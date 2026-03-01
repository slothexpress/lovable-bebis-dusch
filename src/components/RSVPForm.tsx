import { useState } from "react";
import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SHEET_MONKEY_URL = "https://api.sheetmonkey.io/form/sCEmpohh9waXrgJKmk8mRf";
const RATE_LIMIT_SECONDS = 100;
const LAST_SUBMIT_KEY = "rsvp_last_submit";

const RSVPForm = () => {
  const { name } = useParams<{ name?: string }>();
  const [attendance, setAttendance] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [allergies, setAllergies] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Rate limiting logic
    const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit, 10) < RATE_LIMIT_SECONDS * 1000) {
      const secondsLeft = Math.ceil((RATE_LIMIT_SECONDS * 1000 - (now - parseInt(lastSubmit, 10))) / 1000);
      toast.error(`Vänta ${secondsLeft} sekunder innan du skickar igen.`);
      return;
    }
    if (!attendance) {
      toast.error("Svara om du ska vara med eller inte!");
      return;
    }
    if (attendance === "yes" && !phone.trim()) {
      toast.error("Fyll i ditt telefonnummer!");
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(SHEET_MONKEY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Namn": name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : "Guest RSVP",
          "Kommer": attendance === "yes" ? "Ja" : "Nej",
            "Telefon": phone,
          "Specialkost": allergies || "-", // Ingen specialkost
          "Datum": "x-sheetmonkey-current-date-time"
        })
      });
      if (!response.ok) throw new Error("Något gick fel vid inskickning.");
      setSubmitted(true);
      localStorage.setItem(LAST_SUBMIT_KEY, now.toString()); // Store submit time
      toast.success("Tack för ditt svar!");
    } catch (err) {
      toast.error("Kunde inte skicka. Försök igen.");
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-pop-in">
        <div className="text-6xl mb-4 animate-bounce-gentle">

            💌 {/* Svar är skickat*/}

        </div>
          <p>
              ❤ KOM IHÅG ❤
          </p>

          <p>
              DETTA ÄR EN ÖVERRASKNING
          </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Attendance */}
      <div className="space-y-4 animate-pop-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <Label className="text-lg font-display text-primary">

            {/* Dynamiskt NAMN */}

      {name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!" : ""} Vad säger du?

        </Label>
        <RadioGroup value={attendance} onValueChange={setAttendance} className="space-y-3">
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
            <RadioGroupItem value="yes" id="yes" className="border-primary text-primary" />
            <Label htmlFor="yes" className="cursor-pointer flex-1 group-hover:text-primary transition-colors">
                Ja, såklart ❤️‍🔥‍️❤️‍🔥‍️❤️‍🔥‍
            </Label>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
            <RadioGroupItem value="no" id="no" className="border-primary text-primary" />
            <Label htmlFor="no" className="cursor-pointer flex-1 group-hover:text-primary transition-colors">
                Nej, jag kan inte 😭😭😭
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Phone Number - only show if attendance is YES */}
      {attendance === "yes" && (
        <div className="space-y-4 animate-pop-in opacity-0" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
          <Label htmlFor="phone" className="text-lg font-display text-primary">
            Telefonnummer
          </Label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/50 text-primary focus:border-primary transition-colors outline-none"
          />
        </div>
      )}

      {/* Allergies */}
      {attendance === "yes" && (
        <div className="space-y-4 animate-pop-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <Label htmlFor="allergies" className="text-lg font-display text-primary">
              Specialkost
            </Label>
            <Textarea
              id="allergies"
              placeholder="Allergier? Alkoholfritt? Eller något annat vi bör veta?"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              className="min-h-[100px] bg-secondary/50 border-border focus:border-primary resize-none transition-colors"
            />
          </div>
      )}

      {/* Info note about contribution - always visible */}
      <div className="animate-pop-in opacity-0 text-center text-sm text-primary/80 font-medium" style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}>
       Beroende på hur många vi blir har våra beräkningar hamnat på 400-500kr per person (exklusive middag ute).

          Beloppet täcker då lunch, aktivitet, minimalt med pynt samt Eves hotell, middag + dryck till henne 💚
      </div>

      {/* Submit */}
      <div className="animate-pop-in opacity-0 pt-4" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
        <Button 
          type="submit" 
          disabled={submitting}
          className="w-full bg-primary text-primary-foreground hover:bg-mint-light font-display text-lg py-6 shadow-mint transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
        >
          {submitting ? "Skickar..." : "SKICKA"}
        </Button>
      </div>
    </form>
  );
};

export default RSVPForm;
