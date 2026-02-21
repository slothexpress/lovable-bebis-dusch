import {Baby, Glasses, Heart, Leaf, PartyPopper, ShowerHead} from "lucide-react";
import EventDetails from "@/components/EventDetails";
import RSVPForm from "@/components/RSVPForm";
import Confetti from "@/components/Confetti";
import {useParams} from "react-router-dom";
import Countdown from "@/components/Countdown.tsx";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Confetti */}
      <Confetti />
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint-light/5 rounded-full blur-3xl" />
        
        {/* Floating decorative elements */}
        <Leaf className="absolute top-20 right-20 w-8 h-8 text-primary/20 floating-leaf" />
        <Leaf className="absolute top-40 left-16 w-6 h-6 text-accent/20 floating-leaf rotate-45" />
        <Leaf className="absolute bottom-40 right-16 w-10 h-10 text-primary/15 floating-leaf -rotate-12" />
        <Heart className="absolute top-60 right-1/4 w-5 h-5 text-primary/20 animate-pulse-scale" />
        <Heart className="absolute bottom-60 left-1/4 w-4 h-4 text-accent/20 animate-pulse-scale" style={{ animationDelay: '0.5s' }} />
      </div>

        <div className="relative z-10 container max-w-4xl mx-auto px-4 py-16 md:py-24 flex flex-col justify-center min-h-screen">
        {/* Header Section */}
        <header className="text-center mb-16">

            <p>&nbsp;</p>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-pop-in opacity-0" style={{ animationFillMode: 'forwards' }}>


                <PartyPopper className="w-7 h-7 text-primary animate-wiggle" />

                <span className="text-base uppercase tracking-widest text-primary">

                            EVE GIFTER SIG

                        </span>

                <PartyPopper className="w-7 h-7 text-primary animate-wiggle" style={{ animationDelay: '0.5s' }} />


            </div>


            <p>&nbsp;</p>

            <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                ♡   06 JUN 2026   ♡
            </p>


            {/* Countdown */}
            <section className="mb-16">
                <h2 className="text-center text-lg uppercase tracking-widest text-muted-foreground mb-6 animate-pop-in opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>


                    <p>&nbsp;</p>


                </h2>
                <Countdown />
            </section>



            <h1 className="font-display text-5xl md:text-7xl font-semibold mb-4 animate-pop-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>


              <span className="text-base uppercase tracking-widest text-primary">

                            MEN FÖRST BLIR DET
              </span>

              <p>&nbsp;</p>

              <p className="shimmer-text">MÖHIPPE</p> {/* Landing Page */}

              <p>&nbsp;</p>

              <p className="shimmer-text">🥂</p>


          </h1>

        </header>


      </div>
    </main>
  );
};

export default Index;
