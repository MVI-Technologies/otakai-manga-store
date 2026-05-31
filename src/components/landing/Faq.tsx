import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo demora a entrega?",
    a: "Enviamos em até 24h úteis. O prazo varia de 2 a 7 dias úteis conforme a sua região (PAC, Sedex ou Transportadora).",
  },
  {
    q: "Os mangás vêm bem embalados?",
    a: "Com certeza! Como colecionadores, sabemos a dor de receber um mangá amassado. Todos os pedidos são embalados em caixas rígidas com plástico bolha reforçado para garantir estado impecável de banca.",
  },
  {
    q: "Vocês fazem encomendas de títulos raros ou importados?",
    a: "Sim! Temos canal direto de importação do Japão e EUA. Basta enviar os detalhes no formulário de encomenda personalizada e fazemos a cotação sem compromisso.",
  },
  {
    q: "Os produtos são originais e novos?",
    a: "Sim, todos os nossos mangás são 100% novos e originais, adquiridos diretamente das editoras oficiais do Brasil (JBC, Panini, Pipoca & Nanquim, etc.) e internacionais.",
  },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="divide-y divide-border border-y border-border">
      {faqs.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-0">
          <AccordionTrigger className="py-6 text-left font-display text-2xl uppercase tracking-wide hover:text-accent hover:no-underline">
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}.
              </span>
              {item.q}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pl-10 text-base leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
