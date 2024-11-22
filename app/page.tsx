"use client"

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import Image from 'next/image'


export default function DrivingSchoolWebsite() {
  return (
    <main className="max-w-7xl mx-auto p-8 flex flex-col gap-12">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Kontakt oss</h2>
        <div className="flex flex-col md:flex-row md:gap-24">
          <div className="flex flex-col gap-8">
            <section>
              <h3 className="font-semibold">Kontaktinfo</h3>
              <p>Telefon: 51 66 44 11</p>
              <p>Epost: post@gerds.no</p>
            </section>
            <section>
              <h3 className="font-semibold mt-4">Besøksadresser</h3>
              <p>Brannstasjonsveien 6<br/>4312 Sandnes</p>
              <p>Storgata 51<br/>4312 Sandnes</p>
            </section>
            <section>
              <h3 className="font-semibold mt-4">Postadresse</h3>
              <p>Brannstasjonsveien 6<br/>4312 Sandnes</p>
            </section>
          </div>
          <div>
            <Image src="/images/map.png" alt="Map" width={500} height={0}/>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Åpningstider</h2>
        <p>Kontoret er betjent 08.00-15.30</p>
        <p className="mt-2">
          Av og til er vi forhindret fra å kunne svare på telefonhenvendelser. Du er da velkommen til å nå oss på andre
          måter. Husk at vi alltid er tilgjengelig på mail post@gerds.no
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Lurer du på dette?</h2>
        <Accordion type="single" collapsible className="md:w-8/12">
          <AccordionItem value="item-1">
            <AccordionTrigger>Hva koster det å ta førerkort hos dere?</AccordionTrigger>
            <AccordionContent>
              Prisene varierer avhengig av hvilke tjenester du trenger. Våre priser inkluderer teorikurs, kjøretimer og
              gebyrer for praktiske prøver. For en fullstendig oversikt over prisene våre, se vår prisliste her. Vi
              tilbyr også pakker som kan gi deg rabatt ved kjøp av flere kjøretimer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Hvor lang tid tar det å få førerkort?</AccordionTrigger>
            <AccordionContent>
              Tiden det tar å få førerkort avhenger av hvor ofte du kan ta kjøretimer og hvor raskt du lærer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Tilbyr dere automatgir-opplæring?</AccordionTrigger>
            <AccordionContent>
              Ja, vi tilbyr opplæring både med manuell og automatgir.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Må jeg ha bestått teoriprøven før jeg kan ta kjøretimer?</AccordionTrigger>
            <AccordionContent>
              Nei, du kan begynne med kjøretimer før du har bestått teoriprøven, men teoriprøven må være bestått før du
              kan ta den praktiske prøven.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-8 bg-red-50 p-4 rounded-lg md:w-8/12">
        <h2 className="text-3xl font-bold mb-4">Ta kontakt</h2>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <div>
                <Label htmlFor="name">Navn</Label>
                <Input id="name" placeholder="Navn" className="bg-white"/>
              </div>
              <div>
                <Label htmlFor="email">E-post</Label>
                <Input id="email" placeholder="E-post" className="bg-white"/>
              </div>
              <div>
                <Label htmlFor="phone">Telefonnummer</Label>
                <Input id="phone" placeholder="Telefonnummer" className="bg-white"/>
              </div>
            </div>
            <div className="h-full">
              <Label htmlFor="message">Hva lurer du på?</Label>
              <Textarea id="message" placeholder="Din melding" className="bg-white"/>
            </div>
          </div>
          <Button type="submit" className="col-span-full">Send inn</Button>
        </form>
      </section>
    </main>
  )
}