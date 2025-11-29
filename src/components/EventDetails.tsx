import { Calendar, Clock, MapPin } from "lucide-react";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      label: "Datum",
      value: "Lördag 14 december 2024",
      delay: 100,
    },
    {
      icon: Clock,
      label: "Tid",
      value: "Kl. 15:00",
      delay: 200,
    },
    {
      icon: MapPin,
      label: "Plats",
      value: "Hemma hos oss, Exempelgatan 123",
      delay: 300,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {details.map((detail, index) => (
        <div
          key={detail.label}
          className="group flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm animate-pop-in opacity-0 hover:border-primary/50 hover:shadow-mint transition-all duration-300"
          style={{ 
            animationDelay: `${detail.delay}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-bounce-gentle">
            <detail.icon className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            {detail.label}
          </span>
          <span className="font-display text-lg text-foreground">
            {detail.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;
