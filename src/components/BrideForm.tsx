import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const FOOD_CHOICES = [
	{
		value: "rabiff",
		label: "Råbiff på oxinnanlår, smörstekt bröd, friterad kapris, pepparrot, körvel, pommes frites och aioli.",
	},
	{
		value: "moules_frites",
		label: "Moules frites - blåmusslor kokta i vin, pommes frites, citron och aioli.",
	},
	{
		value: "smorbakad_gardsfisk",
		label: "Smörbakad gårdsfisk med sandefjordsås, stekt gurka, spenat, smörslungad potatis och vårig sallad.",
	},
	{
		value: "stekt_flankstek",
		label: "Stekt flankstek med vit sparris, friterad sparrispotatis, stekt rapsskott, ramslökssmör och rödvinsås.",
	},
];

const BrideForm = () => {
	const [food, setFood] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const navigate = useNavigate();

	const handleClose = () => {
		navigate("/");
	};

    const brideName = "EVE"

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!food) {
			toast.error("Välj en maträtt!");
			return;
		}
		setSubmitting(true);
		try {
			await emailjs.send(
				"service_efuzk8p",
				"template_e50k5uj",
				{
					name: brideName,
					answer1: food,
				},
				"qphzOCWK-Et9KsVZF"
			);
			setSubmitted(true);
			setTimeout(() => {
				navigate("/");
			}, 3000);
		} catch (err) {
			toast.error("Kunde inte skicka. Försök igen.");
		}
		setSubmitting(false);
	};

	if (submitted) {
		return (
			<div className="fixed inset-0 z-50 flex items-center justify-center">
				<div className="flex flex-col items-center justify-center w-full h-full text-center animate-pop-in">
					<div className="text-6xl mb-4 animate-bounce-gentle">
						💌
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
			<form
				onSubmit={handleSubmit}
				className="relative bg-background p-8 rounded-lg shadow-lg w-full max-w-md mx-4 animate-pop-in"
			>
				<button
					type="button"
					onClick={handleClose}
					className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
					aria-label="Stäng"
				>
					<svg
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="none"
						stroke="currentColor"
					>
						<path
							d="M6 6l8 8M6 14L14 6"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				</button>

				<div className="flex flex-col items-center text-center w-full">
					<span className="text-lg md:text-2xl uppercase tracking-widest text-primary block">
						♡ HEJ {brideName} ♡
					</span>
					<br />
					<Label className="text-lg font-display text-primary block mb-6">
						Vad önskar du till middag ikväll?
					</Label>
				</div>
				<RadioGroup
					value={food}
					onValueChange={setFood}
					className="space-y-4 mb-8"
				>
					{FOOD_CHOICES.map((choice) => (
						<div
							key={choice.value}
							className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
						>
							<RadioGroupItem
								value={choice.value}
								id={choice.value}
								className="border-primary text-primary"
							/>
							<Label
								htmlFor={choice.value}
								className="cursor-pointer flex-1 group-hover:text-primary transition-colors"
							>
								{choice.label}
							</Label>
						</div>
					))}
				</RadioGroup>
				<Button
					type="submit"
					disabled={submitting}
					className="w-full bg-primary text-primary-foreground hover:bg-mint-light font-display text-lg py-4 shadow-mint transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
				>
					{submitting ? "Skickar..." : "♡ MUMS ♡"}
				</Button>
			</form>
		</div>
	);
};

export default BrideForm;

