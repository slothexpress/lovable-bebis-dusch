import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const RSVPForm = () => {
  const [attendance, setAttendance] = useState<string>("");
  const [plusOne, setPlusOne] = useState<string>("");
  const [allergies, setAllergies] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!attendance) {
      toast.error("Svara om du ska vara med eller inte!");
      return;
    }
    
    if (!plusOne) {
      toast.error("Svara om du tar med en gäst eller inte!");
      return;
    }

    setSubmitting(true);

    try {
      await emailjs.send(
        'service_efuzk8p',
        'template_e50k5uj',
        {
          name: 'Guest RSVP',
          answer1: attendance,
          answer2: plusOne,
          answer3: allergies || 'Ingen specialkost'
        },
        'qphzOCWK-Et9KsVZF'
      );
      setSubmitted(true);
      toast.success("Tack för ditt svar!");
    } catch (err) {
      toast.error("Kunde inte skicka. Försök igen.");
    }
    
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-pop-in">
        <div className="text-6xl mb-4 animate-bounce-gentle">💌</div> {/* Svar är skickat*/}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Attendance */}
      <div className="space-y-4 animate-pop-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <Label className="text-lg font-display text-cream">
          VILL DU VARA MED?
        </Label>
        <RadioGroup value={attendance} onValueChange={setAttendance} className="space-y-3">

          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
            <RadioGroupItem value="yes" id="yes" className="border-primary text-primary" />
            <Label htmlFor="yes" className="cursor-pointer flex-1 group-hover:text-primary transition-colors">JA SÅKLART ❤️‍🔥‍️❤️‍🔥‍️❤️‍🔥‍</Label>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
            <RadioGroupItem value="no" id="no" className="border-primary text-primary" />
            <Label htmlFor="no" className="cursor-pointer flex-1 group-hover:text-primary transition-colors">NEJ, JAG KAN INTE 💔💔😭😭</Label>
          </div>

        </RadioGroup>
      </div>

      {/* Plus One */}
      <div className="space-y-4 animate-pop-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        <Label className="text-lg font-display text-cream">
          TAR DU MED EN GÄST?

        </Label>
        <RadioGroup value={plusOne} onValueChange={setPlusOne} className="space-y-3">
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
            <RadioGroupItem value="yes" id="plus-yes" className="border-primary text-primary" />
            <Label htmlFor="plus-yes" className="cursor-pointer flex-1 group-hover:text-primary transition-colors">Ja</Label>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
            <RadioGroupItem value="no" id="plus-no" className="border-primary text-primary" />
            <Label htmlFor="plus-no" className="cursor-pointer flex-1 group-hover:text-primary transition-colors">Nej</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Allergies */}
      <div className="space-y-4 animate-pop-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
        <Label htmlFor="allergies" className="text-lg font-display text-cream">

            SPECIALKOST...

        </Label>
        <Textarea
          id="allergies"
          placeholder=""
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
          className="min-h-[100px] bg-secondary/50 border-border focus:border-primary resize-none transition-colors"
        />
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
