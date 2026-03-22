import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  const sendMessage = useCallback(async (overrideInput?: string) => {
    const text = (overrideInput ?? input).trim();
    if (!text || isLoading) return;

    const userMsg: Msg = { role: "user", content: text };
    if (!overrideInput) setInput("");
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!resp.ok || !resp.body) {
        const errData = await resp.json().catch(() => ({}));
        upsertAssistant(errData.error || "Désolé, une erreur est survenue. Réessayez.");
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") { streamDone = true; break; }
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Flush remaining buffer
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (raw.startsWith(":") || raw.trim() === "") continue;
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch { /* ignore */ }
        }
      }
    } catch {
      upsertAssistant("Désolé, impossible de se connecter. Contactez-nous sur altera.fr/contact");
    }

    setIsLoading(false);
  }, [input, isLoading, messages]);

  const quickSuggestions = ["C'est combien ?", "Délai de livraison ?", "Je veux un devis"];

  return (
    <div className="fixed bottom-6 right-6 z-9999 flex flex-col items-end gap-3" style={{ isolation: "isolate" }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col"
            style={{ height: "480px", backgroundColor: "hsl(var(--sidebar-bg, 143 33% 5%))", border: "1px solid hsl(var(--border-green))" }}
          >
            {/* Header */}
            <div className="bg-card border-b border-[#1a2e1a] p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Bot size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold font-display">Assistant ALTÉRA</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse block" />
                    <span className="text-muted-foreground text-xs font-dm">En ligne</span>
                  </div>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-secondary/50">
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scroll-smooth">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <Bot size={32} className="text-primary mx-auto mb-3 opacity-60" />
                  <p className="text-sm text-muted-foreground font-dm">Bonjour ! 👋 Comment puis-je vous aider ?</p>
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-primary/20 shrink-0 flex items-center justify-center mt-1">
                      <Bot size={14} className="text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground font-medium rounded-br-sm"
                        : "bg-card border border-[#1a2e1a] text-foreground/80 rounded-bl-sm"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm prose-invert max-w-none [&_p]:my-1 [&_ul]:my-1 [&_li]:my-0">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 shrink-0 flex items-center justify-center mt-1">
                      <User size={14} className="text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/20 shrink-0 flex items-center justify-center">
                    <Bot size={14} className="text-primary" />
                  </div>
                  <div className="bg-card border border-[#1a2e1a] px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5">
                    {[0, 1, 2].map((n) => (
                      <span key={n} className="w-1.5 h-1.5 rounded-full bg-primary/60 block animate-bounce" style={{ animationDelay: `${n * 0.15}s` }} />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick suggestions */}
            {messages.length === 0 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
                {quickSuggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => sendMessage(s)}
                    className="text-xs bg-card border border-[#1a2e1a] text-muted-foreground hover:text-primary hover:border-primary/30 px-3 py-1.5 rounded-full transition-colors font-dm"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
              className="p-3 border-t border-[#1a2e1a] flex gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Votre message..."
                disabled={isLoading}
                className="flex-1 bg-card border border-[#1a2e1a] text-foreground/80 placeholder-muted-foreground text-sm rounded-xl px-3.5 py-2.5 outline-hidden focus:border-primary/40 transition-colors font-dm"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-primary hover:bg-[#17a349] disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <Send size={16} strokeWidth={2.5} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <div className="relative">
        {!open && <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="relative w-14 h-14 bg-primary hover:bg-[#17a349] rounded-full shadow-[0_8px_30px_rgba(29,185,84,0.4)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Ouvrir le chat"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} className="text-primary-foreground" strokeWidth={2.5} />
              </motion.div>
            ) : (
              <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <MessageCircle size={22} className="text-primary-foreground" strokeWidth={2.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
