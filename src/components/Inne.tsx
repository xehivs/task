import Link from 'next/link'
import { SectionHeading } from '@/components/SectionHeading'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Inne() {
  return (
    <section
      id="inne"
      aria-label="Inne pytania"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <SectionHeading number="5" id="introduction-title">
          Inne pytania
        </SectionHeading>

        Co zyska Politechnika Wrocławska dzięki TASK?
Pracownicy techniczni i administracyjni dzięki otwartej komunikacji i usprawnieniom
zarządczym będą mogli lepiej wspierać: studentów, doktorantów i pracowników. Ich
obecność we wspólnym projekcie jest kluczowa.

Zobacz kto poparł TASK!
(Tutaj nie wiem czy osoby, które nas poparły, dałyby zgodę na wymienienie nazwisk).

        {/* <p className="mt-4">
          In “Everything Starts as a Square”, you’ll learn the systems experts
          use to create pixel perfect icons, without relying on a steady hand.
        </p> */}
        {/* <ul role="list" className="mt-8 space-y-3">
          {[
            'Using boolean operations to combine basic shapes into complex icons',
            'How to adapt icons to different sizes',
            'Translating icons from an outline style to a solid style',
            'Identifying the characteristics that make an icon set cohesive',
            'Figma features and keyboard shortcuts to speed up your workflow',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul> */}
        <p className="mt-8">
          Projekt TASK został zgłoszony do drugiej edycji konkursu Polytechnica Nova.
        </p>
        <p className="mt-10">
          <Link
            href="https://pwr.edu.pl/polytechnica-nova"
            className="text-base font-medium text-puder hover:text-puder-800"
          >
            Przeczytaj więcej o inicjatywie Polytechnica Nova{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
