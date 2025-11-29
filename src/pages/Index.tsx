import { Sparkles } from "lucide-react";
import EventDetails from "@/components/EventDetails";
import RSVPForm from "@/components/RSVPForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm uppercase tracking-widest text-gold">You're Invited</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-semibold mb-4 animate-fade-in-up opacity-0 animate-delay-100" style={{ animationFillMode: 'forwards' }}>
            <span className="shimmer-text">Celebration</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light animate-fade-in-up opacity-0 animate-delay-200" style={{ animationFillMode: 'forwards' }}>
            Join us for an evening of joy, laughter, and memories
          </p>
        </header>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0 animate-delay-300" style={{ animationFillMode: 'forwards' }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Event Details */}
        <section className="mb-20">
          <EventDetails />
        </section>

        {/* RSVP Section */}
        <section className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-champagne mb-3 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              Kindly Respond
            </h2>
            <p className="text-muted-foreground animate-fade-in-up opacity-0 animate-delay-100" style={{ animationFillMode: 'forwards' }}>
              Please let us know if you can make it by December 1st
            </p>
          </div>
          
          <div className="p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-card">
            <RSVPForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-20 pt-10 border-t border-border/50">
          <p className="text-muted-foreground text-sm">
            We can't wait to celebrate with you! ✨
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
