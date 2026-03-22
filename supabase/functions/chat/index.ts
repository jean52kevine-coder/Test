import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Tu es l'assistant virtuel d'ALTÉRA, une agence web française spécialisée dans la création de sites vitrines et e-commerce pour les artisans, commerçants et professions libérales.

Informations clés sur ALTÉRA :
- Site vitrine : 497€ tout inclus (hébergement 1 an, SSL, responsive, SEO, formation)
- Site e-commerce : 747€ tout inclus (tout ce qui est dans vitrine + boutique en ligne, panier, paiement sécurisé, gestion des stocks, dashboard commandes, facturation auto, formation 2h)
- Maintenance : 3 formules sans engagement — Essentielle 39€/mois, Pro 49€/mois, Premium 59€/mois
- Délai de livraison : 14 jours
- Paiement en plusieurs fois disponible sans frais : vitrine en 2x, e-commerce en 3x
- Hébergement offert la 1ère année, puis environ 80-120€/an (inclus dans la maintenance)
- Processus : Échange découverte (30min offert) → Maquette validée (48h) → Développement → Livraison & formation
- Contact : page /contact du site

Règles :
- Réponds toujours en français, de manière professionnelle mais chaleureuse
- Sois concis (2-4 phrases max par réponse)
- Si on te pose une question hors sujet d'ALTÉRA, redirige poliment vers les services ALTÉRA
- Encourage toujours le visiteur à prendre un appel découverte gratuit via la page contact
- Ne donne jamais de fausses informations, si tu ne sais pas, dis-le et propose de contacter l'équipe
- Utilise du markdown léger pour structurer tes réponses si nécessaire (gras, listes)`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
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
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Trop de requêtes, réessayez dans un instant." }),
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
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Erreur du service IA" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erreur inconnue" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
