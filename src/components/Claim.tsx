import Link from 'next/link'
import Image from 'next/image'

import { SectionHeading } from '@/components/SectionHeading'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Claim() {
  return (
    <section
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">

        
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        Głównym zadaniem projektu TASK jest wsparcie jednostek i zespołów Wspólnoty Akademickiej PWr w skutecznej realizacji misji i wizji Uczelni. W tym celu chcemy stworzyć źródło finansowania szkoleń z zakresu komunikacji i zarządzania.
        </p>
        <p className="mt-4">
        Współdziałanie i współpraca są na Uczelni niezbędne. Pozwalają nam szerzyć i promować naukę, przekraczać granice poznania i dąrzyć do doskonałości. Kluczowa jest dobra atmosfera studiów i pracy oraz równowaga pomiędzy życiem akademickim a prywatnym. To one pozwalają działać efektywnie i budować dobrostan Uczelni, zmniejszając koszt finansowy, prywatny i społeczny.
        </p>
        <p className='mt-4'>
        Konkurs ma także na celu promocję dobrych praktyk wśród członków wspólnoty akademickiej Politechniki Wrocławskiej odnośnie przejmowania inicjatywy w oddolnym diagnozowaniu potrzeb, poszukiwaniu rozwiązań, wyznaczaniu celów oraz rozwiązywania problemów.
        </p>
        <p className='mt-4'>
        Projekt zostanie wykorzystany do diagnozy potrzeb społeczności Politechniki Wrocławskiej, co umożliwi zaplanowanie kolejnych celowanych działań w zakresie szkoleń, projektów wewnętrznych czy ubiegania się o środki zewnętrzne.
        </p>

        <p className="mt-4">
          Projekt TASK został zgłoszony do drugiej edycji konkursu Polytechnica Nova.
        </p>
        <p className="mt-4">
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
