import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User, ChevronRight, Sparkles } from "lucide-react";
import carolinaImg from "@/assets/carolina.png";

interface ChatbotProps {
  onOpenBooking: () => void;
}

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  options?: { label: string; action: string }[];
};

export function Chatbot({ onOpenBooking }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        {
          id: "welcome",
          sender: "bot",
          text: "Olá! Seja bem-vindo à Otakai Store. Sou a Mika, sua assistente e curadora virtual! Como posso te ajudar a encontrar sua próxima leitura hoje?",
          timestamp: new Date(),
          options: [
            { label: "Dúvida sobre Entrega / Frete", action: "rescisao" },
            { label: "Títulos Raros / Importações", action: "horas" },
            { label: "Montar Assinatura Otakai Club", action: "justa_causa" },
            { label: "Agendar Curadoria ao Vivo", action: "agendar" }
          ]
        }
      ]);
      setHasNewMessage(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
  };

  const simulateBotResponse = (userAction: string) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let responseText = "";
      let options: { label: string; action: string }[] = [];

      switch (userAction) {
        case "rescisao":
          responseText = "Todos os nossos pedidos são enviados em até 24h úteis em embalagens blindadas contra amassados. O prazo varia de 2 a 7 dias úteis. Gostaria de agendar uma curadoria rápida de assinatura Otakai para receber todo mês?";
          options = [
            { label: "Sim, agendar curadoria", action: "confirm_agendar" },
            { label: "Menu Principal", action: "menu_principal" }
          ];
          break;
        case "horas":
          responseText = "Temos canal de importação direta do Japão e EUA para conseguir edições raras e boxes oficiais. Nossos especialistas em importação estão prontos para te atender. Quer abrir o agendador de curadoria/cotação?";
          options = [
            { label: "Agendar curadoria/cotação", action: "confirm_agendar" },
            { label: "Menu Principal", action: "menu_principal" }
          ];
          break;
        case "justa_causa":
          responseText = "No Otakai Club você escolhe seus gêneros favoritos e recebe mensalmente volumes selecionados por nossa equipe com marcadores e posters exclusivos. Quer planejar sua assinatura?";
          options = [
            { label: "Planejar minha assinatura", action: "confirm_agendar" },
            { label: "Menu Principal", action: "menu_principal" }
          ];
          break;
        case "agendar":
        case "confirm_agendar":
          responseText = "Excelente escolha! Um curador especialista da Otakai Store vai te atender. Vou abrir a tela de agendamento agora mesmo para você escolher a melhor data e horário. Um momento...";
          setTimeout(() => {
            onOpenBooking();
            setIsOpen(false);
          }, 2000);
          break;
        case "menu_principal":
          responseText = "Sem problemas! Escolha uma das opções abaixo para continuarmos conversando:";
          options = [
            { label: "Dúvida sobre Entrega / Frete", action: "rescisao" },
            { label: "Títulos Raros / Importações", action: "horas" },
            { label: "Montar Assinatura Otakai Club", action: "justa_causa" },
            { label: "Agendar Curadoria ao Vivo", action: "agendar" }
          ];
          break;
        default:
          responseText = "Compreendi! Para que eu possa te recomendar a melhor leitura ou tirar dúvidas sobre coleções, recomendo conversar ao vivo com nossos curadores in um agendamento rápido de 30 minutos gratuito. Vamos agendar?";
          options = [
            { label: "Sim, agendar", action: "confirm_agendar" },
            { label: "Voltar ao menu", action: "menu_principal" }
          ];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: responseText,
          timestamp: new Date(),
          options
        }
      ]);
    }, 1500);
  };

  const handleSend = (text: string, action?: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // Simulate bot response
    simulateBotResponse(action || "default");
  };

  return (
    <div className="fixed bottom-6 right-6 z-100 flex flex-col items-end gap-3 sm:gap-4 select-none">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[500px] bg-neutral-900 border border-border rounded-none shadow-2xl flex flex-col overflow-hidden animate-slide-up mb-4 z-50">
          
          {/* Header */}
          <div className="bg-neutral-950 p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={carolinaImg}
                  alt="Mika"
                  className="w-9 h-9 rounded-full object-cover border border-accent/30"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-neutral-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg tracking-wide text-white leading-none">MIKA</span>
                <span className="font-mono text-[8px] text-accent uppercase tracking-widest mt-0.5">Curadora Otaku Virtual</span>
              </div>
            </div>
            <button 
              onClick={handleOpenToggle}
              className="p-1 text-muted-foreground hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]/50 chatbot-scroll">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                <div className={`max-w-[85%] p-3.5 text-sm leading-relaxed ${
                  msg.sender === "user" 
                    ? "bg-accent text-accent-foreground font-sans font-medium" 
                    : "bg-neutral-900 border border-border text-neutral-200"
                }`}>
                  {msg.text}
                </div>
                
                {/* Options / Quick Replies */}
                {msg.options && msg.options.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2 max-w-[90%]">
                    {msg.options.map((opt) => (
                      <button
                        key={opt.action}
                        onClick={() => handleSend(opt.label, opt.action)}
                        className="bg-neutral-950 border border-border hover:border-accent hover:text-accent px-3 py-1.5 text-xs font-mono tracking-wide text-muted-foreground transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono bg-neutral-900/50 border border-border/30 px-3 py-2 w-max">
                <Sparkles className="w-3.5 h-3.5 text-accent animate-spin" /> Mika está digitando...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputText);
            }} 
            className="p-3 border-t border-border bg-neutral-950 flex gap-2"
          >
            <input
              type="text"
              placeholder="Digite seu mangá ou dúvida..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-neutral-900 border border-border px-3 py-2 text-sm outline-none focus:border-accent transition-colors"
            />
            <button 
              type="submit" 
              className="bg-accent text-accent-foreground p-2.5 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* WhatsApp Direct Link FAB (Stacked above Chatbot) */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipe%20Otakai%20sobre%20encomendas%20de%20mang%C3%A1s."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 active:scale-90 cursor-pointer hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] animate-reveal"
        style={{ animationDelay: "200ms" }}
        aria-label="Falar diretamente no WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Chatbot Internal Assistant FAB */}
      <button
        onClick={handleOpenToggle}
        className="relative w-14 h-14 bg-neutral-900 border border-border text-white flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 active:scale-90 cursor-pointer hover:border-accent hover:shadow-[0_0_15px_rgba(255,71,87,0.3)] group"
        aria-label="Abrir assistente virtual Mika"
      >
        {/* Pulsing indicator if there's a new message */}
        {hasNewMessage && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent text-[9px] font-bold text-accent-foreground items-center justify-center">1</span>
          </span>
        )}
        
        <img
          src={carolinaImg}
          alt="Dra. Carolina"
          className="w-full h-full rounded-full object-cover border-2 border-transparent group-hover:border-accent transition-all"
        />
      </button>

    </div>
  );
}
