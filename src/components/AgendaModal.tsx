import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface AgendaItem {
  time: string;
  title: string;
  desc: React.ReactNode;
}

const agenda: AgendaItem[] = [
  {
    time: "SAMLING 12:00",
    title: "SAMLING",
    desc: (
      <>
          Samling <strong>kl. 12:00</strong> på Typografgatan 4A i Malmö <br /><br />

        Eve kommer till Triangeln C med tåget kl. <strong>12:33</strong> <br /><br />

        Majoriteten går tillsammans och möter henne, medan resterande preppar lunchen. <br /> <br />

          <strong>10 MIN PROMENAD</strong>

      </>
    ),
  },
  {
    time: "LUNCH 13:00",
    title: "LUNCH",
    desc: (
      <>
          Vi satsar på att grilla utomhus så klä dig efter väder. Det kommer finnas både alkoholfritt och alkoholdryck. <br /> <br />

          Senast <strong>kl. 15:00</strong> behöver vi börja plocka undan eftersom vi har en tid att passa.


          Alla kommer även få ett kort som ska fyllas i (medtag penna) under dagen som Eve ska få ♡ <br /> <br />


          <strong>15 MIN PROMENAD</strong>

      </>
    ),
  },
  {
    time: "AKTIVITET 16:00",
    title: "AKTIVITET",
    desc: (
      <>
          Senast <strong>kl. 15:30</strong> måste vi gå vidare.

          Malmö Dansakademi väntar på oss med en danslektion i Burlesque Chair!  <br /> <br />

        Vanliga kläder som du kan röra dig i någorlunda borde räcka,
        men önskar du byta om så finns det omklädningsrum. <br /><br />

        Egen vattenflaska är att föredra. Efter dansen rör sig <strong>alla som vill</strong> till Eves hotell.
          Ifall du behöver lite egentid, så passa på nu. <br /> <br />

          <strong>30 MIN PROMENAD</strong>
      </>
    ),
  },
  {
    time: "HOTELL 18:00",
    title: "HOTELL",
    desc: (
      <>
        Vi har bokat <strong>Quality Hotel The Mill</strong> på Amiralsgatan till Eveline.


          Efter dansen är det fokus på hotell <strong>check-in</strong> för de som behöver göra det. <br /><br />


          Samling igen <strong>kl. 19:30</strong> i lobbyn av Quality Hotel The Mill.


          Vi går iväg till middagen tillsammans för de som vill.  <br /><br />


         Vid det här laget bör du ha fyllt i kortet du som du fått :)  <br /><br />


          <strong>15 MIN PROMENAD</strong>
      </>
    ),
  },
  {
    time: "MIDDAG 20:00",
    title: "MIDDAG",
    desc: (
      <>
        Det blir middag på Grand på Möllan.

          Maten är förbeställd så att middagen inte blir alltför sen.

          Här kan du beställa din dryck direkt i baren.

        <strong> GLÖM INTE</strong> att ta med ditt kort :)

          <br /> <br />

          Efter maten får Eve korten av oss och om ingen har tjuvkikat blir det roligare att läsa upp.

          Planen är att avrunda senast <strong>kl. 21:30</strong>.

          För de som vill, bjuder Grand på dans från kl. 22:00.


          <br /> <br />

          Tack för idag ♡

      </>
    ),
  },
];

export function AgendaModal({
  open,
  onOpenChange,
  guestName,
  onOk,
  submitting
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  guestName?: string;
  onOk?: () => void;
  submitting?: boolean;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] max-w-md sm:max-w-2xl sm:w-full mx-auto px-4 sm:px-6 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-center w-full">

              AGENDA

          </DialogTitle>

          <DialogDescription>


          </DialogDescription>

        </DialogHeader>
        <Accordion type="single" collapsible className="w-full">
          {agenda.map((item) => (
            <AccordionItem value={item.time} key={item.time}>
              <AccordionTrigger>
                <span className="flex w-full justify-between items-center">
                  <span className="font-semibold">{item.title}</span>
                  <span className="ml-4 text-muted-foreground">{item.time.replace(/^[^\d]*/, "")}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pb-2 px-1 sm:px-0">{item.desc}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <DialogTitle className="text-center w-full mt-8">

            VI SES SNART{guestName ? ` ${guestName}` : ""}

        </DialogTitle>
        <DialogClose asChild>
          <Button
            variant="secondary"
            className="mt-4 w-[70vw] max-w-xs mx-auto block sm:w-auto"
            onClick={onOk}
            disabled={submitting}
            type="button"
          >
            ♡ JIPPI ♡
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
