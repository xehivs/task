import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '@/images/screencasts/duotone.svg'
import gridsImage from '@/images/screencasts/grids.svg'
import setupImage from '@/images/screencasts/setup.svg'
import strokesImage from '@/images/screencasts/strokes.svg'

const stages = [
  {
    title: 'Wybór kategorii grantu',
    description:
      'O dofinansowanie będzie można aplikować w dwóch kategoriach: indywidualnej (kat. A) oraz zespołowej (kat. B). Pojedyncza osoba będzie mogła otrzymać finansowanie do 5 000 zł, a zespół do 25 000 zł. Na przeprowadzanie kursów w 2024/25 roku i administrację projektem przewidziano łącznie 1 056 000 zł.',
    //image: setupImage,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Kwalifikacja wydatków',
    description:
      'Finanse będzie można przeznaczyć na opłacenie realizowanych w Polsce warsztatów, kursów i egzaminów, a w przypadku indywidualnych aktywności także dojazdu, noclegu i diety.',
    // image: gridsImage,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Zgłoszenie',
    description:
      'Zgłoszenia będą możliwe poprzez formularz na tej stronie internetowej. Wnioski będą przyjmowane w dwóch edycjach: październik 2024 i marzec 2025. Zwięzłe formularze (zał. 3A i 3B) będą zawierały dane wnioskujących, krótką charakterystykę wyzwania, opis rozwiązania oraz wpływ na rozwój zespołu i PWr. Wniosek będzie następnie podlegał anonimizacji.',
    // image: duotoneImage,
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Ocena formalna',
    description:
      'Pierwszym etapem oceny wniosków będzie weryfikacja ich kompletności i zgodności z regulaminem.',
    // image: duotoneImage,
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Ocena merytoryczna',
    description:
      'Drugi etap to ocena merytoryczna, w której Komisja oceniać będzie: związek zgłoszonej potrzeby z misją projektu “TASK” (0-10 pkt); atrakcyjność i jakość proponowanej aktywności (0-10 pkt); wpływ na rozwój Uczelni (0-20 pkt).',
    // image: duotoneImage,
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Realizacja',
    description:
      'Podział przyznawanych punktów podkreśla, że głównym celem “TASK” jest inwestycja w umiejętności, które przyniosą korzyści wykraczające poza definicję indywidualnego rozwoju.',
    // image: duotoneImage,
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Raport końcowy',
    description:
      'W lutym 2026 zostanie przedstawiony raport, w którym zawarta będzie liczba zgłoszeń i uczestników, a także rodzaj zgłaszanych problemów i realizowanych szkoleń.',
    // image: duotoneImage,
    runtime: { minutes: 28, seconds: 44 },
  },
]

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Jak() {
  return (
    <section
      id="jak"
      aria-labelledby="jak"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="jak-title">
          Jak to zrealizujemy?
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum consequuntur magni, dignissimos qui quae consequatur eos pariatur accusamus sit officiis aspernatur ea explicabo nisi quod? Minus consectetur aliquam laudantium vero.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, exercitationem rerum sapiente magnam officiis nobis excepturi alias quod mollitia consequatur iste vel deserunt eveniet pariatur quisquam dignissimos delectus veniam!
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {stages.map((stage) => (
            <li key={stage.title} className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                style={{
                  backgroundImage:
                    'conic-gradient(from -49.8deg at 50% 50%, #ce4e8a 0deg, #ce4e8a 59.07deg, #Fe4eBa 185.61deg, #ce4e8a 284.23deg, #Fe4eBa 329.41deg, #ce4e8a 360deg)',
                }}
              >
                {/* <div className="flex overflow-hidden rounded shadow-sm">
                  <Image src={stage.image} alt="" unoptimized />
                </div> */}
                {/* <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <PlayIcon className="h-4 w-4 fill-current stroke-current" />
                  <time
                    dateTime={`${stage.runtime.minutes}m ${stage.runtime.seconds}s`}
                    className="ml-2"
                  >
                    {`${stage.runtime.minutes}:${stage.runtime.seconds
                      .toString()
                      .padStart(2, '0')}`}
                  </time>
                </div> */}
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{stage.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
