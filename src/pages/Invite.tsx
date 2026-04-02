import {Heart, Leaf, PartyPopper, ShowerHead} from "lucide-react";
import EventDetails from "@/components/EventDetails";
import RSVPForm from "@/components/RSVPForm";
import Confetti from "@/components/Confetti";
import Countdown from "@/components/Countdown";
import { useParams } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SHEET_MONKEY_URL = "https://api.sheetmonkey.io/form/sCEmpohh9waXrgJKmk8mRf";
const POPUP_LAST_SUBMIT_KEY = "popup_last_submit";
const POPUP_RATE_LIMIT_SECONDS = 90;

const Invite = () => {
    // Show dialog on mount
    const [open, setOpen] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const guestName = useParams().name?.toUpperCase();
    const isSami = guestName === "SAMI";

    // Helper to log popup action to SheetMonkey
    const logPopupAction = async (action: "OK" | "CLOSE") => {
        // Rate limiting (per session)
        const lastSubmit = localStorage.getItem(POPUP_LAST_SUBMIT_KEY);
        const now = Date.now();
        if (lastSubmit && now - parseInt(lastSubmit, 10) < POPUP_RATE_LIMIT_SECONDS * 1000) {
            return;
        }
        setSubmitting(true);
        try {
            await fetch(SHEET_MONKEY_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "Namn": guestName ? guestName.charAt(0).toUpperCase() + guestName.slice(1).toLowerCase() : "Guest Popup",
                    "Kommer": action,
                    "Telefon": "-",
                    "Specialkost": "-",
                    "Datum": "x-sheetmonkey-current-date-time"
                })
            });
            localStorage.setItem(POPUP_LAST_SUBMIT_KEY, now.toString());
        } catch (err) {
            // Silently fail, don't block UI
        }
        setSubmitting(false);
    };

    // Handler for OK button
    const handleOk = () => {
        logPopupAction("OK");
        setOpen(false);
    };
    // Handler for dialog close (X button)
    const handleDialogChange = (isOpen: boolean) => {
        if (!isOpen && open) {
            logPopupAction("CLOSE");
        }
        setOpen(isOpen);
    };

    return (
        <>
        {/* Only show popup if not Sami */}
        {!isSami && (
          <Dialog open={open} onOpenChange={handleDialogChange}>
            <DialogContent className="max-w-2xl w-full max-h-[70vh] overflow-y-auto pb-8 sm:pb-6">
              <DialogHeader>

                  <br />

                <DialogTitle className="text-center w-full">♡ LITE PRAKTISK INFO ♡ </DialogTitle>
                <DialogDescription>
                  {/* Replace this with your info text */}
                  <br />

                    <strong>EVELINE:</strong> <br />
                    Tanken är att vi ska få Eve att komma till Triangeln C med tåget kl. <strong>12:33</strong>.
                    Några av oss får möta upp henne där medan några preppar lunchen.
                    Vi bestämmer hur vi delar upp oss längre fram och uppdaterar på hemsidan!

                    <br /><br />

                    Samling <strong>kl. 12:00</strong> gäller fortsatt.

                    <br /><br />

                  <strong>PLATS:</strong> <br />
                  Lunch och lekar blir antingen hos Sami om det blir sol och vi kan vara på takterassen.
                  Vid regn eller tråkigt väder kör vi hos Madde som har stor lägga där alla får plats under tak ♡

                  <br /><br />


                    Vi uppdaterar med adress så snart det blir säkrare hur vädret faktiskt blir.
                    Båda bor vid Möllan så om du åker tåg - hoppa av på <strong>Triangeln C</strong>.

                    <br /><br />

                <strong>BOENDE:</strong> <br />
                Vi har bokat <strong>Quality Hotel The Mill</strong> på Amiralsgatan
                    så om du behöver boende får du gärna köra på samma för det betyder hotellfrukost tillsammans - MYS.

                <br /><br />


                <strong>MIDDAG:</strong> <br />
                Det blir middag på restaurang runtomkring Möllan.
                    Kom ihåg att din middag <strong>INTE</strong> är inräknad i det som du kommer behöva swisha :)

                <br /><br />

                  <strong>HA MED:</strong> <br />
                  Kläder som man kan andas och röra sig i borde räcka - <strong>vi ska dansa</strong> -
                    men önskar du byta om så kör på det!
                  Egen vattenflaska är att föredra.

                    <br /><br /><br /><br />

                    <DialogTitle className="text-center w-full">♡ VI SES SNART, {guestName} ♡</DialogTitle>

                    <br />

                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  className="mt-4 w-full sm:w-auto"
                  onClick={handleOk}
                  disabled={submitting}
                  type="button"
                >
                  ♡ JIPPI ♡
                </Button>
              </DialogFooter>
              {/* X button is already included in DialogContent via DialogClose */}
            </DialogContent>
          </Dialog>
        )}

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
                <Heart className="absolute bottom-60 left-1/4 w-4 h-4 text-accent/20 animate-pulse-scale" style={{ animationDelay: '0.1s' }} />
            </div>

            <div className="relative z-10 container max-w-4xl mx-auto px-4 py-16 md:py-24">
                {/* Header Section */}
                <header className="text-center mb-16">

                  <div className="inline-flex items-center gap-3 md:gap-6 px-6 md:px-10 py-3 md:py-6 rounded-full border border-primary/30 bg-primary/5 mb-8 md:mb-12 animate-pop-in opacity-0" style={{ animationFillMode: 'forwards' }}>

                      <PartyPopper className="w-6 h-6 md:w-10 md:h-10 text-primary animate-wiggle" />

                        <span className="text-lg md:text-2xl uppercase tracking-widest text-primary">


                            HEJ {guestName}


                        </span>

                      <PartyPopper className="w-6 h-6 md:w-10 md:h-10 text-primary animate-wiggle" />


                  </div>
                    <p>&nbsp;</p>


                    <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        Som du redan vet - Eve ska gifta sig!
                    </p>

                    <p>&nbsp;</p>

                    <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>

                    </p>

                    <p>&nbsp;</p>


                    <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        ♡   06 JUNI 2026   ♡
                    </p>

                    <p>&nbsp;</p>

                    {/* Countdown */}
                    <section className="mb-16">
                        <h2 className="text-center text-lg uppercase tracking-widest text-muted-foreground mb-6 animate-pop-in opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>


                            <p>&nbsp;</p>


                        </h2>
                        <Countdown />
                    </section>

                    <p>&nbsp;</p>

                    <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        VI VILL GÄRNA ÖVERRASKA MED
                    </p>



                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                    <h1 className="font-display text-5xl md:text-7xl font-semibold mb-4 animate-pop-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                        <p className="shimmer-text">

                            m ö h i p p e

                        </p>
                    </h1>

                    <p>&nbsp;</p>


                    {/* Animated heart icons */}
                    <div className="flex justify-center gap-4 mt-6 animate-pop-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                        <span className="text-3xl animate-float" style={{ animationDelay: '0.3s' }}>🧡</span>
                        <span className="text-3xl animate-float" style={{ animationDelay: '0.6s' }}>💚</span>
                        <span className="text-3xl animate-float" style={{ animationDelay: '0.9s' }}>💜</span>
                    </div>

                    <p>&nbsp;</p>


                    <p>&nbsp;</p>

                    <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        Vi utlovar mys, skratt och bus ♡
                    </p>

                    <p>&nbsp;</p>

                    <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        Hoppas du kan vara med!
                    </p>

                    <p>&nbsp;</p>

                    <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        Bara att höra av dig vid frågor/funderingar.
                    </p>



                </header>

                {/* Event Details */}
                <section className="mb-20">
                    <EventDetails />
                </section>



                <header className="text-center mb-16">


                    <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        Fler detaljer kommer dyka upp här på hemsidan.
                    </p>

                    <p>&nbsp;</p>

                    <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        O.S.A. I FORMULÄRET NEDAN SÅ SNART DU KAN
                    </p>

                    <p>&nbsp;</p>

                    <p className="text-xl md:text-2xl text-muted-foreground font-light animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        Det underlättar mycket för vår planering ♡
                    </p>

                    <p>&nbsp;</p>



                </header>


                {/* RSVP Section */}
                <section className="max-w-xl mx-auto">

                    <div className="p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-card hover:shadow-mint transition-shadow duration-500">
                        <RSVPForm />
                    </div>
                </section>


                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>


                <header className="text-center mb-16">


                    <div className="inline-flex items-center gap-3 md:gap-6 px-6 md:px-10 py-3 md:py-6 rounded-full border border-primary/30 bg-primary/5 mb-8 md:mb-12 animate-pop-in opacity-0" style={{ animationFillMode: 'forwards' }}>

                        <PartyPopper className="w-6 h-6 md:w-10 md:h-10 text-primary animate-wiggle" />

                        <span className="text-lg md:text-2xl uppercase tracking-widest text-primary">


                               möhippe


                        </span>

                        <PartyPopper className="w-6 h-6 md:w-10 md:h-10 text-primary animate-wiggle" style={{ animationDelay: '0.5s' }} />

                    </div>

                </header>

            </div>
        </main>
        </>
    );
};

export default Invite;
