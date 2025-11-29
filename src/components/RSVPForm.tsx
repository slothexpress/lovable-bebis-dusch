import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RSVPForm = () => {
  const [attendance, setAttendance] = useState<string>("");
  const [plusOne, setPlusOne] = useState<string>("");
  const [allergies, setAllergies] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!attendance) {
      toast.error("Please select your attendance");
      return;
    }
    
    if (!plusOne) {
      toast.error("Please indicate if you're bringing a plus one");
      return;
    }

    // In a real app, this would send to a backend
    console.log({ attendance, plusOne, allergies });
    setSubmitted(true);
    toast.success("Thank you for your RSVP!");
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-fade-in-up">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="font-display text-2xl text-gold mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          Your response has been recorded. We can't wait to celebrate with you!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Attendance */}
      <div className="space-y-4 animate-fade-in-up animate-delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <Label className="text-lg font-display text-champagne">
          Will you be attending?
        </Label>
        <RadioGroup value={attendance} onValueChange={setAttendance} className="space-y-3">
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-gold/50 transition-colors cursor-pointer">
            <RadioGroupItem value="yes" id="yes" className="border-gold text-gold" />
            <Label htmlFor="yes" className="cursor-pointer flex-1">Joyfully Accept</Label>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-gold/50 transition-colors cursor-pointer">
            <RadioGroupItem value="no" id="no" className="border-gold text-gold" />
            <Label htmlFor="no" className="cursor-pointer flex-1">Regretfully Decline</Label>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-gold/50 transition-colors cursor-pointer">
            <RadioGroupItem value="maybe" id="maybe" className="border-gold text-gold" />
            <Label htmlFor="maybe" className="cursor-pointer flex-1">Not Sure Yet</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Plus One */}
      <div className="space-y-4 animate-fade-in-up animate-delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <Label className="text-lg font-display text-champagne">
          Will you be bringing a plus one?
        </Label>
        <RadioGroup value={plusOne} onValueChange={setPlusOne} className="space-y-3">
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-gold/50 transition-colors cursor-pointer">
            <RadioGroupItem value="yes" id="plus-yes" className="border-gold text-gold" />
            <Label htmlFor="plus-yes" className="cursor-pointer flex-1">Yes, plus one</Label>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-gold/50 transition-colors cursor-pointer">
            <RadioGroupItem value="no" id="plus-no" className="border-gold text-gold" />
            <Label htmlFor="plus-no" className="cursor-pointer flex-1">No, just me</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Allergies */}
      <div className="space-y-4 animate-fade-in-up animate-delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <Label htmlFor="allergies" className="text-lg font-display text-champagne">
          Any food allergies or dietary restrictions?
        </Label>
        <Textarea
          id="allergies"
          placeholder="Please let us know if you have any allergies or dietary requirements..."
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
          className="min-h-[100px] bg-secondary/50 border-border focus:border-gold resize-none"
        />
      </div>

      {/* Submit */}
      <div className="animate-fade-in-up animate-delay-400 opacity-0 pt-4" style={{ animationFillMode: 'forwards' }}>
        <Button 
          type="submit" 
          className="w-full bg-gold text-primary-foreground hover:bg-gold-light font-display text-lg py-6 shadow-gold transition-all duration-300 hover:shadow-lg"
        >
          Send RSVP
        </Button>
      </div>
    </form>
  );
};

export default RSVPForm;
