import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Tu es un expert SEO français. On te donne le nom d'une page et son contenu résumé. Tu dois générer :
1. Un titre SEO optimisé (max 60 caractères, avec mot-clé principal)
2. Une meta description (max 155 caractères, incitative, avec mot-clé)
3. 5 mots-clés pertinents séparés par des virgules

Réponds UNIQUEMENT avec un objet JSON valide, sans markdown, avec les clés : "title", "description", "keywords".
Le contenu doit être en français et optimisé pour le marché français.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { pageName, pageContent } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            {
              role: "user",
              content: `Page : "${pageName}"\nContenu résumé : ${pageContent}`,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Trop de requêtes, réessayez." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporairement indisponible." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("SEO AI error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Erreur du service IA" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    let seoData;
    try {
      seoData = JSON.parse(content);
    } catch {
      // Try to extract JSON from markdown code blocks
      const jsonMatch = content?.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch) {
        seoData = JSON.parse(jsonMatch[1].trim());
      } else {
        throw new Error("Could not parse AI response as JSON");
      }
    }

    return new Response(JSON.stringify(seoData), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-seo error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erreur inconnue" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
