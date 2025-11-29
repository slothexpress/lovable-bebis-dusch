import { Calendar, Clock, MapPin } from "lucide-react";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      label: "Date",
      value: "Saturday, December 14th, 2024",
    },
    {
      icon: Clock,
      label: "Time",
      value: "7:00 PM onwards",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "The Grand Ballroom, 123 Celebration Avenue",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {details.map((detail, index) => (
        <div
          key={detail.label}
          className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm animate-fade-in-up opacity-0"
          style={{ 
            animationDelay: `${(index + 1) * 100}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
            <detail.icon className="w-6 h-6 text-gold" />
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
