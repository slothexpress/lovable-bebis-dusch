import { Baby, Heart, Leaf } from "lucide-react";
import EventDetails from "@/components/EventDetails";
import RSVPForm from "@/components/RSVPForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        
        {/* Floating decorative elements */}
        <Leaf className="absolute top-20 right-20 w-8 h-8 text-primary/20 floating-leaf" />
        <Leaf className="absolute top-40 left-16 w-6 h-6 text-accent/20 floating-leaf rotate-45" />
        <Leaf className="absolute bottom-40 right-16 w-10 h-10 text-primary/15 floating-leaf -rotate-12" />
        <Heart className="absolute top-60 right-1/4 w-5 h-5 text-primary/20 animate-pulse-scale" />
        <Heart className="absolute bottom-60 left-1/4 w-4 h-4 text-accent/20 animate-pulse-scale" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-pop-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            <Baby className="w-5 h-5 text-primary animate-wiggle" />
            <span className="text-sm uppercase tracking-widest text-primary">Du är inbjuden!</span>
            <Baby className="w-5 h-5 text-primary animate-wiggle" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-semibold mb-4 animate-pop-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <span className="shimmer-text">Bebis Dusch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Fira den lilla på väg med oss! 🍼
          </p>
          
          {/* Animated baby icons */}
          <div className="flex justify-center gap-4 mt-6 animate-pop-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <span className="text-3xl animate-float" style={{ animationDelay: '0s' }}>🧸</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '0.3s' }}>👶</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '0.6s' }}>🍼</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '0.9s' }}>🎀</span>
          </div>
        </header>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-pop-in opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <Leaf className="w-5 h-5 text-primary animate-sway" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Event Details */}
        <section className="mb-20">
          <EventDetails />
        </section>

        {/* RSVP Section */}
        <section className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-cream mb-3 animate-pop-in opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
              OSA 💌
            </h2>
            <p className="text-muted-foreground animate-pop-in opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              Meddela oss senast den 1 december
            </p>
          </div>
          
          <div className="p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-card hover:shadow-mint transition-shadow duration-500">
            <RSVPForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-20 pt-10 border-t border-border/50">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Vi längtar efter att fira med dig! 
            <span className="animate-bounce-gentle inline-block">🌿</span>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
