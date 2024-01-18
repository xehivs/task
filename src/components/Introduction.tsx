import Link from 'next/link'
import Image from 'next/image'

import { SectionHeading } from '@/components/SectionHeading'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

// 'Utworzymy budżet na ogólnouczelniane mikrogranty.',
//             'Dzięki “TASK” sfinansujemy aktywności (kursy, szkolenia, warsztaty), których celem będzie poprawa jakości komunikacji i metod zarządzania zespołami. W ten sposób proponujemy, aby wyzwanie rozwiązywania problemów na Uczelni stało się przedmiotem wspólnej, inicjowanej oddolnie wrażliwości. W ten sposób każdy będzie mógł samemu zatroszczyć się o siebie i o swoje środowisko pracy.',
//             'Wzmocnimy poczucie sprawczości u każdego z nas.',
//             'Umożliwimy i uprościmy także sposób rozwiązywania problemów. Osoba, której dotyczy trudność, sama dokona diagnozy. Liczymy na to, że pracownicy zachęceni łatwym w uzyskaniu finansowaniem znajdą odpowiednie szkolenia i wpłyną na usunięcie wielu przeszkód.',
//             'Program pozwoli także na postawienie diagnozy dotyczącej szeroko rozumianej      kondycji zarządczej Uczelni.',
//             'Wzbogacimy naszą wiedzę o tym, jak powszechne są problemy społeczne i jaki jest ich najczęstszy typ. Te informacje staną się kluczowe dla formowania dalszej polityki Uczelni. Program ma charakter sondażu, który w przypadku sukcesu będzie można udoskonalić i kontynuować.'

const resources = [
  {
    title: 'Ułatwijmy finansowanie inicjatyw pracowniczych',
    description:
      "Utworzymy budżet na ogólnouczelniane mikrogranty.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#ce4e8a]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Postarajmy się ze sobą dogadać',
    description:
      "Dzięki “TASK” sfinansujemy aktywności (kursy, szkolenia, warsztaty), których celem będzie poprawa jakości komunikacji i metod zarządzania zespołami. W ten sposób proponujemy, aby wyzwanie rozwiązywania problemów na Uczelni stało się przedmiotem wspólnej, inicjowanej oddolnie wrażliwości. W ten sposób każdy będzie mógł samemu zatroszczyć się o siebie i o swoje środowisko pracy.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#ce4e8a]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Zróbmy coś z besilnością',
    description:
      "Wzmocnimy poczucie sprawczości u każdego z nas.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#ce4e8a]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Nie stawiajmy dodatkowych utrudnień',
    description:
      "Umożliwimy i uprościmy także sposób rozwiązywania problemów. Osoba, której dotyczy trudność, sama dokona diagnozy. Liczymy na to, że pracownicy zachęceni łatwym w uzyskaniu finansowaniem znajdą odpowiednie szkolenia i wpłyną na usunięcie wielu przeszkód.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#ce4e8a]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Skoro jest tak dobrze, to dlaczego jest tak źle?',
    description:
      "Program pozwoli także na postawienie diagnozy dotyczącej szeroko rozumianej kondycji zarządczej Uczelni.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#ce4e8a]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Skoro jest tak źle, to co pomaga?',
    description:
      "Wzbogacimy naszą wiedzę o tym, jak powszechne są problemy społeczne i jaki jest ich najczęstszy typ. Te informacje staną się kluczowe dla formowania dalszej polityki Uczelni. Program ma charakter sondażu, który w przypadku sukcesu będzie można udoskonalić i kontynuować.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#ce4e8a]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <SectionHeading number="1" id="introduction-title">
          Po co?
        </SectionHeading>
      </Container>

      <Container>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Jaki jest cel projektu TASK i co właściwie próbujemy przez niego osiągnąć?
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, exercitationem rerum sapiente magnam officiis nobis excepturi alias quod mollitia consequatur iste vel deserunt eveniet pariatur quisquam dignissimos delectus veniam!
        </p>
      </Container>

      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>

      <Container className="text-lg tracking-tight text-slate-700">

      
        
      </Container>

      

    </section>
  )
}
