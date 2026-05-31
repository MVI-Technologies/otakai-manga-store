import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import advogadoImg from "@/assets/advogado.jpg";
import justicaImg from "@/assets/justica.png";
import mangaBg from "@/assets/manga-bg.jpg";
import slayerImg from "@/assets/slayer.jpg";
import berserkImg from "@/assets/berserk.jpg";
import chainsawImg from "@/assets/chainsaw.jpg";
import onepieceImg from "@/assets/onepiece.jpg";
import { Faq } from "@/components/landing/Faq";
import { BookingWizard } from "@/components/BookingWizard";
import { Chatbot } from "@/components/Chatbot";

const WHATSAPP_NUMBER = "5511999999999";
const PHONE_DISPLAY = "(11) 99999-9999";
const OAB = "LOJA OFICIAL";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Otakai | Mangás Colecionáveis, Curadoria & Edições de Luxo" },
      {
        name: "description",
        content:
          "Sua loja especializada de mangás. Shonen, Seinen, Shojo, boxes completos e raros importados sob encomenda. Embalagem ultra-protegida e brindes exclusivos!"
      },
      {
        name: "keywords",
        content: "comprar mangás, mangás importados, box de mangás, shonen, seinen, berserk luxo, demon slayer, chainsaw man, livraria otaku, otakai store"
      },
      { name: "robots", content: "index, follow" },
      // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://otakai.store" },
      { property: "og:title", content: "Otakai | Mangás Colecionáveis, Curadoria & Edições de Luxo" },
      {
        property: "og:description",
        content:
          "Encontre os melhores mangás com frete rápido, embalagem de colecionador 100% blindada contra danos e brindes especiais em todos os pacotes."
      },
      { property: "og:image", content: advogadoImg },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Otakai | Mangás Colecionáveis, Curadoria & Edições de Luxo" },
      {
        name: "twitter:description",
        content:
          "Encontre os melhores mangás com frete rápido, embalagem de colecionador 100% blindada contra danos e brindes especiais em todos os pacotes."
      },
      { name: "twitter:image", content: advogadoImg }
    ],
    links: [
      { rel: "canonical", href: "https://otakai.store" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
    ]
  }),
  component: Landing,
});

function Landing() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Nav onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <SocialProof />
      <Specialties />
      <MangaShowcase />
      <HowItWorks />
      <Testimonials />
      <MidPageCta onOpenBooking={() => setIsBookingOpen(true)} />
      <FaqSection />
      <EvaluationForm />
      <LocationSection />
      <Footer />
      <BookingWizard isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}

interface NavProps {
  onOpenBooking: () => void;
}

function Nav({ onOpenBooking }: NavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <a href="#" className="flex flex-col">
            <span className="font-display text-lg tracking-wider text-white leading-none">OTAKAI</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent leading-none mt-0.5">STORE</span>
          </a>
          <span className="hidden md:block font-mono text-[10px] text-muted-foreground border border-border px-2 py-0.5 ml-2">
            {OAB}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={onOpenBooking}
            className="bg-accent text-accent-foreground px-6 py-2 font-sans text-sm font-semibold tracking-wide hover:brightness-110 transition-all active:scale-95 cursor-pointer"
          >
            Agendar
          </button>
        </div>
      </div>
    </nav>
  );
}

interface HeroProps {
  onOpenBooking: () => void;
}

function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-16 pb-20 overflow-hidden border-b border-border">
      {/* Background Color & Image Wrapper */}
      <div className="absolute inset-0 bg-[#060606] overflow-hidden pointer-events-none z-0">
        <img 
          src={mangaBg} 
          alt="Manga Panels Background" 
          className="w-full h-full object-cover animate-pan-bg opacity-25"
        />
        {/* Dark vignettes to fade the edges seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-[#060606] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/40 to-[#060606] opacity-95" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8 animate-reveal">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance mb-8">
            SUA JORNADA NO UNIVERSO DOS <span className="text-accent">MANGÁS</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground mb-10 text-pretty leading-relaxed">
            Catálogo completo de Shonen, Seinen, Shojo e edições colecionáveis importadas. 
            Embalagem blindada de colecionador para colecionador, com brindes incríveis e frete rápido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-accent text-accent-foreground font-display text-2xl px-8 py-4 hover:brightness-110 transition-all active:scale-[0.99] cursor-pointer w-full sm:w-auto text-center"
            >
              AGENDAR CURADORIA
            </button>
            <a
              href={waLink("Olá, gostaria de falar com a equipe de atendimento sobre um mangá.")}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border font-display text-2xl px-8 py-4 hover:border-foreground transition-colors w-full sm:w-auto text-center block"
            >
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
        <div className="lg:col-span-4 animate-reveal [animation-delay:150ms] relative group">
          <div className="relative overflow-hidden border border-border">
            <img
              src={advogadoImg}
              alt="Retrato do Dr. Marcos Montenegro, advogado trabalhista"
              width={1088}
              height={1344}
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            {/* Inset shadow vignette to seamlessly blend photograph with #060606 background */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_#060606]" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-neutral-950/95 to-transparent pt-8 sm:pt-12 pb-4 sm:pb-6 px-4 sm:px-6 flex flex-col border-t border-border/20">
              <div className="flex flex-wrap items-end justify-between gap-2 mb-2">
                <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-white leading-none">
                  UNIVERSO <span className="text-accent">MANGÁ</span>
                </h3>
                <span className="font-mono text-[9px] text-accent border border-accent/20 px-2 py-0.5 leading-none shrink-0">
                  {OAB}
                </span>
              </div>
              <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-3">
                Curadoria & Boxes Exclusivos
              </p>
              <div className="border-l-2 border-accent pl-3 py-0.5">
                <p className="text-[11px] sm:text-xs text-neutral-200 font-sans italic leading-relaxed">
                  "Sua dose diária de mangás embalados com o cuidado que sua coleção merece."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    ["// HISTÓRIA", "8 ANOS"],
    ["// NO CATÁLOGO", "+2.000 TÍTULOS"],
    ["// CLIENTES FELIZES", "+15 MIL"],
    ["// ENVIO SEGURO", "100% BLINDADO"],
  ];
  return (
    <div className="bg-[#060606] border-b border-border py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(([label, value]) => (
          <div key={label} className="flex flex-col">
            <span className="font-mono text-xs text-accent mb-1">{label}</span>
            <span className="font-display text-4xl">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Specialties() {
  const items = [
    {
      n: "01",
      t: "SHONEN EXTREMO",
      d: "Os maiores sucessos de ação, aventura e batalhas épicas com lançamentos simultâneos.",
    },
    {
      n: "02",
      t: "SEINEN COLECIONADOR",
      d: "Histórias maduras, complexas e edições de luxo com acabamentos em capa dura.",
    },
    {
      n: "03",
      t: "IMPORTADOS EXCLUSIVOS",
      d: "Mangás raros diretamente do Japão e EUA sob encomenda para completar sua coleção.",
    },
    {
      n: "04",
      t: "BOXES COMPLETOS",
      d: "Boxes oficiais lacrados com brindes exclusivos e descontos especiais na coleção completa.",
    },
  ];
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border pb-6 md:pb-8 gap-4 md:gap-0">
          <h2 className="font-display text-5xl md:text-7xl uppercase">Categorias</h2>
          <span className="font-mono text-xs text-muted-foreground md:mb-2">
            [04 ÁREAS DE FOCO]
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {items.map((it) => (
            <div
              key={it.n}
              className="bg-background p-8 hover:bg-neutral-900 border-t-2 border-t-transparent hover:border-t-accent hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-mono text-accent text-sm mb-6 block">{it.n}.</span>
              <h3 className="font-display text-3xl mb-4">{it.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MangaShowcase() {
  const catalog = [
    {
      id: 1,
      title: "Demon Slayer - Vol. 1",
      category: "SHONEN",
      price: "R$ 34,90",
      tag: "Mais Procurado",
      image: slayerImg,
    },
    {
      id: 2,
      title: "Berserk - Luxo Vol. 1",
      category: "SEINEN",
      price: "R$ 89,90",
      tag: "Destaque Luxo",
      image: berserkImg,
    },
    {
      id: 3,
      title: "Chainsaw Man - Vol. 1",
      category: "SHONEN",
      price: "R$ 34,90",
      tag: "Lançamento",
      image: chainsawImg,
    },
    {
      id: 4,
      title: "One Piece - Box 1 (Leste Azul)",
      category: "COLECIONADOR",
      price: "R$ 349,90",
      tag: "Últimas Unidades",
      image: onepieceImg,
    },
  ];

  return (
    <section className="py-20 bg-neutral-950 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border pb-6 md:pb-8 gap-4 md:gap-0">
          <div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">// CATÁLOGO DE DESTAQUES</span>
            <h2 className="font-display text-5xl md:text-7xl uppercase">MANGÁS À VENDA</h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground md:mb-2">
            [ENCOMENDE DIRETAMENTE PELO WHATSAPP]
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {catalog.map((manga) => (
            <div 
              key={manga.id} 
              className="group bg-neutral-900 border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Cover Image Wrapper */}
              <div className="relative overflow-hidden aspect-[3/4] bg-neutral-950 border-b border-border">
                <img 
                  src={manga.image} 
                  alt={manga.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Floating Tag */}
                <span className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-accent text-accent-foreground font-mono text-[8px] sm:text-[9px] uppercase tracking-wider px-1.5 sm:px-2 py-0.5 sm:py-1 font-semibold">
                  {manga.tag}
                </span>
              </div>

              {/* Content details */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] sm:text-[10px] text-accent tracking-widest uppercase">{manga.category}</span>
                  <h3 className="font-display text-lg sm:text-2xl tracking-wide text-white leading-tight">{manga.title}</h3>
                </div>
                
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 border-t border-border/40">
                  <span className="font-mono text-base sm:text-xl font-bold text-white">{manga.price}</span>
                  <a
                    href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá! Gostaria de comprar/encomendar o mangá: ${manga.title} (${manga.price})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:brightness-110 text-accent-foreground text-[10px] sm:text-xs font-mono px-2.5 sm:px-3 py-1.5 sm:py-2 font-semibold transition-all active:scale-95 text-center w-full sm:w-auto"
                  >
                    ENCOMENDAR
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "ESCOLHA SEUS TÍTULOS",
      d: "Navegue pelo nosso catálogo online ou consulte diretamente nossos especialistas no WhatsApp.",
    },
    {
      n: "02",
      t: "EMBALAGEM BLINDADA",
      d: "Seus volumes são embalados individualmente com plástico bolha duplo em caixas ultra-resistentes.",
    },
    {
      n: "03",
      t: "ENVIO COM BRINDES",
      d: "Receba em tempo recorde com marcadores exclusivos e mimos oficiais selecionados para você.",
    },
  ];
  return (
    <section className="py-16 bg-neutral-950 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="flex flex-col animate-reveal"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="font-display text-8xl text-white/10 mb-[-40px]">{s.n}</div>
              <div className="pl-8 border-l border-accent">
                <h4 className="font-display text-3xl mb-4">{s.t}</h4>
                <p className="text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "Minha coleção de One Piece está completa graças à Otakai! A embalagem veio super protegida com plástico bolha duplo.",
      n: "Carla M.",
      r: "Estudante — São Paulo",
    },
    {
      q: "Melhor atendimento via WhatsApp. Eles conseguiram um box importado raro de Berserk que eu procurava há anos.",
      n: "Roberto S.",
      r: "Designer — Curitiba",
    },
    {
      q: "Os brindes que vêm junto (markers, mini-posters) são de altíssima qualidade. Minha loja favorita de mangás agora!",
      n: "Juliana P.",
      r: "Ilustradora — Belo Horizonte",
    },
  ];
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border pb-6 md:pb-8 gap-4 md:gap-0">
          <h2 className="font-display text-5xl md:text-7xl uppercase">Depoimentos</h2>
          <span className="font-mono text-xs text-muted-foreground md:mb-2">
            [COLECIONADORES ATENDIDOS]
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {items.map((t) => (
            <figure key={t.n} className="bg-background p-8 flex flex-col justify-between hover:bg-neutral-900/50 transition-all duration-300">
              <div className="space-y-4">
                {/* Visual rating stars above review content */}
                <div className="flex items-center gap-0.5 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-display text-2xl leading-tight mb-8">
                  <span className="text-accent">“</span>
                  {t.q}
                  <span className="text-accent">”</span>
                </blockquote>
              </div>
              <figcaption className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-4">
                <span className="block text-foreground">{t.n}</span>
                {t.r}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

interface MidPageCtaProps {
  onOpenBooking: () => void;
}

function MidPageCta({ onOpenBooking }: MidPageCtaProps) {
  return (
    <section className="py-16 bg-neutral-900 border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,71,87,0.1),transparent_40%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
        <div className="space-y-3 max-w-2xl text-left">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block">// COMPLETE SUA COLEÇÃO HOJE</span>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight text-white">ENCONTRE A SUA PRÓXIMA LEITURA</h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
            Nossos curadores apaixonados estão prontos para indicar a melhor saga ou encontrar aquele volume raro para completar sua prateleira.
          </p>
        </div>
        <div className="w-full lg:w-auto flex shrink-0">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-accent text-accent-foreground font-display text-2xl px-8 py-4 hover:brightness-110 transition-all active:scale-[0.99] cursor-pointer text-center"
          >
            AGENDAR CURADORIA AGORA
          </button>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-16 bg-neutral-950 border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase mb-4">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground">
            Esclarecimentos comuns sobre compras, encomendas e envio.
          </p>
        </div>
        <Faq />
      </div>
    </section>
  );
}

function EvaluationForm() {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [caso, setCaso] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, gostaria de fazer uma encomenda especial.\n\nNome: ${nome}\nWhatsApp: ${tel}\n\nPedidos/Títulos:\n${caso}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="avaliacao" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-neutral-900 border border-border grid lg:grid-cols-12 gap-0 overflow-hidden">
          {/* Left Column: Premium Trust Image */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full group border-b lg:border-b-0 lg:border-r border-border">
            <img
              src={justicaImg}
              alt="Manga Art Detail"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.6] group-hover:scale-105 transition-all duration-700"
            />
            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/50 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none" />
            
            {/* Overlay Text */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-2 block">// COMPROMISSO</span>
              <h3 className="font-display text-3xl text-white mb-2 leading-none">PEDIDO GARANTIDO</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Importações e encomendas especiais são totalmente garantidas contra taxas extras e avarias no transporte.
              </p>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7 p-8 md:p-16">
            <div className="mb-12">
              <h2 className="font-display text-5xl md:text-6xl mb-4">ENCOMENDA ESPECIAL</h2>
              <p className="text-muted-foreground text-sm">
                Procurando um volume específico, edição rara ou importado? Preencha os dados e cotamos para você.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <fieldset className="md:col-span-2 grid md:grid-cols-2 gap-6 border-none p-0 m-0">
                <legend className="sr-only">Formulário de avaliação de caso trabalhista</legend>
                <div className="space-y-2">
                  <label
                    htmlFor="nome"
                    className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest"
                  >
                    Nome Completo
                  </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-background border border-border px-4 py-3 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="tel"
                    className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest"
                  >
                    WhatsApp
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    required
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    className="w-full bg-background border border-border px-4 py-3 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label
                    htmlFor="caso"
                    className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest"
                  >
                    Descreva quais mangás ou coleções você deseja encomendar
                  </label>
                  <textarea
                    id="caso"
                    rows={4}
                    required
                    value={caso}
                    onChange={(e) => setCaso(e.target.value)}
                    className="w-full bg-background border border-border px-4 py-3 outline-none focus:border-accent transition-colors"
                  />
                </div>
              </fieldset>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground font-display text-3xl py-5 hover:brightness-110 transition-all active:scale-[0.99] cursor-pointer"
                >
                  SOLICITAR COTAÇÃO
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0980696924843!2d-46.652203023778556!3d-23.564947978796856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f1a30ef1%3A0xffa55097de609e99!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1717171717171!5m2!1spt-BR!2sbr";
  
  return (
    <section className="py-16 bg-neutral-950 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Office details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-accent tracking-widest uppercase">// NOSSO QG</span>
              <h2 className="font-display text-5xl md:text-6xl text-white uppercase leading-none">QG HELIX MANGÁS</h2>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Localizado no coração geek de São Paulo na Avenida Paulista. Venha retirar sua encomenda ou tomar um café com a gente!
            </p>

            <div className="border-l-2 border-accent pl-4 space-y-3 font-mono text-xs">
              <div>
                <span className="text-white block uppercase tracking-wide">Endereço</span>
                <span className="text-muted-foreground">Av. Paulista, 1000 - Sobreloja 5<br />Bela Vista, São Paulo - SP, 01310-100</span>
              </div>
              <div>
                <span className="text-white block uppercase tracking-wide">Horário de Funcionamento</span>
                <span className="text-muted-foreground">Segunda a Sábado: 10h às 20h<br />Retiradas com aviso prévio no WhatsApp</span>
              </div>
            </div>

            <div>
              <a
                href="https://maps.google.com/?q=Av.+Paulista,+1000+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP,+01310-100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-accent text-accent-foreground font-display text-xl px-6 py-3 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                ABRIR NO GOOGLE MAPS
              </a>
            </div>
          </div>

          {/* Right: Map Iframe */}
          <div className="lg:col-span-7 relative h-[350px] sm:h-[400px] w-full border border-border overflow-hidden">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Escritório Dr. Marcos Montenegro no Google Maps"
              className="absolute inset-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <span className="font-display text-3xl text-accent block mb-6 uppercase">
              UNIVERSO MANGÁ
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed uppercase font-mono">
              Otakai Store LTDA. CNPJ: 12.345.678/0001-99. Todos os mangás são adquiridos
              de canais de distribuição oficial das respectivas editoras nacionais e internacionais.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <span className="block font-display text-xl mb-4 uppercase">Contato</span>
              <p className="text-sm text-muted-foreground mb-2">contato@advocacia.com.br</p>
              <p className="text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
            </div>
            <div>
              <span className="block font-display text-xl mb-4 uppercase">Local</span>
              <p className="text-sm text-muted-foreground leading-tight">
                Av. Paulista, 1000
                <br />
                São Paulo - SP
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <span className="font-mono text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Otakai Store | O melhor do Universo Otaku. Todos os direitos reservados.
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            {OAB} | Loja Oficial
          </span>
        </div>
      </div>
    </footer>
  );
}
