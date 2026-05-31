import { useState, useEffect } from "react";
import { 
  X, Calendar as CalendarIcon, Clock, User, FileText, CheckCircle, 
  ArrowLeft, ArrowRight, Phone, Mail, Award, Check
} from "lucide-react";
import { format, addDays, isWeekend, startOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

type Service = {
  id: string;
  name: string;
  duration: number;
  price: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    id: "consultoria",
    name: "Curadoria de Mangás Personalizada",
    duration: 30,
    price: "Gratuito",
    description: "Recomendação inicial de novos títulos e coleções com base no seu perfil e gostos de leitura."
  },
  {
    id: "rescisao-horas",
    name: "Cotação de Importados Raros",
    duration: 45,
    price: "Gratuito",
    description: "Pesquisa minuciosa de disponibilidade e preços de edições raras ou importadas sob encomenda direta."
  },
  {
    id: "justa-causa",
    name: "Montagem de Assinatura Otakai Club",
    duration: 30,
    price: "Gratuito",
    description: "Estudo e customização de planos de assinatura mensal de mangás com entrega programada."
  }
];

export function BookingWizard({ isOpen, onClose }: BookingWizardProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset wizard state when opening/closing
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Generate available dates (next 10 business days starting tomorrow)
  const getAvailableDates = () => {
    const dates: Date[] = [];
    let current = addDays(new Date(), 1);
    while (dates.length < 10) {
      if (!isWeekend(current)) {
        dates.push(startOfDay(current));
      }
      current = addDays(current, 1);
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  // Mock booked slots to show authentic availability
  const getBookedSlotsForDate = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    // Simple mock: some slots are consistently "taken" on certain days to show real states
    const day = date.getDate();
    if (day % 3 === 0) return ["10:30", "15:30"];
    if (day % 2 === 0) return ["09:00", "14:00", "17:00"];
    return ["14:00"];
  };

  const allTimeSlots = ["09:00", "10:30", "14:00", "15:30", "17:00"];
  const bookedSlots = selectedDate ? getBookedSlotsForDate(selectedDate) : [];

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      setErrors({ service: "Selecione uma especialidade de atendimento." });
      return;
    }
    if (step === 2 && (!selectedDate || !selectedTime)) {
      setErrors({ datetime: "Escolha uma data e horário disponíveis." });
      return;
    }
    if (step === 3) {
      const newErrors: Record<string, string> = {};
      if (!name.trim()) newErrors.name = "Nome completo é obrigatório.";
      if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Insira um e-mail válido.";
      if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
        newErrors.phone = "Insira um número de telefone com DDD válido.";
      }
      
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // Finalize booking, generate Mock ID and save to local storage
      const generatedId = `TR-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingId(generatedId);

      const newBooking = {
        id: generatedId,
        service: selectedService,
        date: format(selectedDate!, "yyyy-MM-dd"),
        time: selectedTime,
        customer: { name, email, phone, description },
        createdAt: new Date().toISOString()
      };

      const existing = localStorage.getItem("advogado_conectado_bookings");
      const bookings = existing ? JSON.parse(existing) : [];
      bookings.push(newBooking);
      localStorage.setItem("advogado_conectado_bookings", JSON.stringify(bookings));
    }

    setErrors({});
    setStep(step + 1);
  };

  const handleBack = () => {
    setErrors({});
    setStep(step - 1);
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      let formatted = numbers;
      if (numbers.length > 2) {
        formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      }
      if (numbers.length > 7) {
        formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
      }
      return formatted;
    }
    return value;
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-neutral-900 border border-border rounded-none shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-accent" />
            <h2 className="font-display text-2xl tracking-wide uppercase">Agendamento de Consulta</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-muted-foreground hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        {step <= 4 && (
          <div className="flex w-full h-1 bg-neutral-800">
            <div 
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        )}

        {/* Steps Info Indicator */}
        {step <= 4 && (
          <div className="px-6 pt-4 flex items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <span>Passo {step} de 4</span>
            <span>
              {step === 1 && "Escolha o Serviço"}
              {step === 2 && "Data & Horário"}
              {step === 3 && "Seus Dados"}
              {step === 4 && "Confirmação"}
            </span>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 min-h-[40vh]">
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-display text-2xl text-accent">Selecione o serviço ideal para você</h3>
                <p className="text-sm text-muted-foreground">O atendimento com nossos curadores é totalmente personalizado e gratuito.</p>
              </div>

              {errors.service && (
                <div className="p-3 bg-red-950/50 border border-red-800/50 text-red-200 text-xs font-mono">
                  {errors.service}
                </div>
              )}

              <div className="grid gap-4">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service);
                      setErrors({});
                    }}
                    className={`text-left p-5 border transition-all duration-200 flex flex-col justify-between md:flex-row md:items-center gap-4 ${
                      selectedService?.id === service.id
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-neutral-700 bg-neutral-900/50"
                    }`}
                  >
                    <div className="space-y-2 max-w-xl">
                      <div className="flex items-center gap-2">
                        {selectedService?.id === service.id && (
                          <span className="w-2 h-2 rounded-full bg-accent" />
                        )}
                        <h4 className="font-display text-xl text-white tracking-wide">{service.name}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
                      <span className="px-2 py-1 bg-neutral-800 border border-border text-muted-foreground flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent" /> {service.duration} min
                      </span>
                      <span className="px-2 py-1 bg-accent/15 border border-accent/30 text-accent font-semibold">
                        {service.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-display text-2xl text-accent">Escolha a data e o horário do atendimento</h3>
                <p className="text-sm text-muted-foreground">Selecione um dia útil disponível no calendário abaixo.</p>
              </div>

              {errors.datetime && (
                <div className="p-3 bg-red-950/50 border border-red-800/50 text-red-200 text-xs font-mono">
                  {errors.datetime}
                </div>
              )}

              <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Date Grid */}
                <div className="md:col-span-7 space-y-3">
                  <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    Próximas datas disponíveis
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-2">
                    {availableDates.map((date) => {
                      const isSelected = selectedDate && format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
                      return (
                        <button
                          key={date.toISOString()}
                          onClick={() => {
                            setSelectedDate(date);
                            setSelectedTime("");
                            setErrors({});
                          }}
                          className={`p-3 border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                            isSelected 
                              ? "border-accent bg-accent/5 text-white" 
                              : "border-border hover:border-neutral-700 bg-neutral-900/50 text-muted-foreground"
                          }`}
                        >
                          <span className="font-mono text-[9px] uppercase tracking-widest">
                            {format(date, "EEE", { locale: ptBR })}
                          </span>
                          <span className="font-display text-xl leading-none">
                            {format(date, "d")}
                          </span>
                          <span className="font-mono text-[9px] uppercase">
                            {format(date, "MMM", { locale: ptBR })}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="md:col-span-5 space-y-3">
                  <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    Horários para {selectedDate ? format(selectedDate, "dd 'de' MMMM", { locale: ptBR }) : "a data selecionada"}
                  </span>
                  
                  {!selectedDate ? (
                    <div className="p-8 border border-border border-dashed text-center text-xs text-muted-foreground">
                      Selecione uma data ao lado para carregar os horários.
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 md:grid-cols-2 gap-2">
                      {allTimeSlots.map((time) => {
                        const isBooked = bookedSlots.includes(time);
                        const isSelected = selectedTime === time;
                        
                        if (isBooked) {
                          return (
                            <button
                              key={time}
                              disabled
                              aria-disabled="true"
                              className="p-3 border border-border bg-neutral-950/20 text-muted-foreground/30 font-mono text-xs line-through cursor-not-allowed flex items-center justify-center gap-1"
                            >
                              {time}
                            </button>
                          );
                        }

                        return (
                          <button
                            key={time}
                            onClick={() => {
                              setSelectedTime(time);
                              setErrors({});
                            }}
                            className={`p-3 border transition-all font-mono text-xs flex items-center justify-center ${
                              isSelected
                                ? "border-accent bg-accent/5 text-white font-semibold"
                                : "border-border hover:border-neutral-700 bg-neutral-900/50 text-muted-foreground"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-display text-2xl text-accent">Preencha seus dados de contato</h3>
                <p className="text-sm text-muted-foreground">As informações compartilhadas são totalmente confidenciais e protegidas por sigilo profissional.</p>
              </div>

              <div className="space-y-4">
                {/* Nome */}
                <div className="space-y-2">
                  <label htmlFor="wizard-name" className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="wizard-name"
                      type="text"
                      placeholder="Ex: Carlos da Silva"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`w-full bg-neutral-900/50 border pl-11 pr-4 py-3 outline-none transition-colors ${
                        errors.name ? "border-red-800 focus:border-red-600" : "border-border focus:border-accent"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-[10px] font-mono text-red-400">{errors.name}</p>}
                </div>

                {/* Email e Celular */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="wizard-email" className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                      E-mail de Contato
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        id="wizard-email"
                        type="email"
                        placeholder="Ex: carlos@email.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full bg-neutral-900/50 border pl-11 pr-4 py-3 outline-none transition-colors ${
                          errors.email ? "border-red-800 focus:border-red-600" : "border-border focus:border-accent"
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-[10px] font-mono text-red-400">{errors.email}</p>}
                  </div>

                  {/* Celular */}
                  <div className="space-y-2">
                    <label htmlFor="wizard-phone" className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                      WhatsApp / Celular
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        id="wizard-phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={phone}
                        onChange={(e) => {
                          setPhone(formatPhone(e.target.value));
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        className={`w-full bg-neutral-900/50 border pl-11 pr-4 py-3 outline-none transition-colors ${
                          errors.phone ? "border-red-800 focus:border-red-600" : "border-border focus:border-accent"
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[10px] font-mono text-red-400">{errors.phone}</p>}
                  </div>
                </div>

                {/* Caso */}
                <div className="space-y-2">
                  <label htmlFor="wizard-description" className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    Descreva resumidamente sua situação (Opcional)
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-4 w-4 h-4 text-muted-foreground" />
                    <textarea
                      id="wizard-description"
                      rows={3}
                      placeholder="Ex: Fui demitido recentemente e gostaria de verificar se as horas extras foram pagas corretamente..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-neutral-900/50 border border-border pl-11 pr-4 py-3 outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-8 py-4 text-center">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent flex items-center justify-center animate-scale-up">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-4xl text-white tracking-wide">ATENDIMENTO CONFIRMADO!</h3>
                  <p className="text-sm text-accent font-mono uppercase tracking-widest">Código de Agendamento: {bookingId}</p>
                </div>
              </div>

              <div className="max-w-md mx-auto p-6 border border-border bg-neutral-900/50 text-left space-y-4">
                <h4 className="font-display text-xl border-b border-border pb-2 uppercase text-white">Resumo da Consulta</h4>
                
                <div className="grid grid-cols-3 gap-2 text-xs font-mono text-muted-foreground">
                  <span className="col-span-1">Especialidade:</span>
                  <span className="col-span-2 text-white font-sans font-medium">{selectedService?.name}</span>

                  <span className="col-span-1">Data:</span>
                  <span className="col-span-2 text-white font-sans font-medium">{format(selectedDate!, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>

                  <span className="col-span-1">Horário:</span>
                  <span className="col-span-2 text-white">{selectedTime}</span>

                  <span className="col-span-1">Cliente:</span>
                  <span className="col-span-2 text-white font-sans font-medium">{name}</span>
                </div>
              </div>

              <p className="max-w-md mx-auto text-xs text-muted-foreground leading-relaxed">
                Um de nossos curadores especialistas analisará o seu perfil e entrará em contato via WhatsApp no número <strong className="text-white">{phone}</strong> no horário marcado.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={onClose}
                  className="bg-accent text-white font-display text-xl px-8 py-3.5 hover:brightness-110 transition-all active:scale-95 flex items-center gap-2"
                >
                  <Check className="w-5 h-5" /> CONCLUIR E FECHAR
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {step <= 3 && (
          <div className="flex items-center justify-between p-6 border-t border-border bg-neutral-950/40">
            <div>
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="px-4 py-2.5 border border-border text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-white hover:border-neutral-700 transition-colors flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Voltar
                </button>
              )}
            </div>
            
            <button
              onClick={handleNext}
              className="bg-accent text-white font-display text-xl px-6 py-2.5 hover:brightness-110 transition-all active:scale-95 flex items-center gap-2"
            >
              {step === 3 ? "Confirmar" : "Avançar"} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
