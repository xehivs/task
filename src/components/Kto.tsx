import Link from 'next/link'
import Image from 'next/image'

import { SectionHeading } from '@/components/SectionHeading'

import { GridPattern } from '@/components/GridPattern'
import authorImage from '@/images/avatars/jan.jpeg'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Kto() {
  return (
    
    <section
      id="kto"
      aria-label="Kim jesteśmy?"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,pink)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="4" id="author-title">
              Kim jesteśmy?
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              <span className="block text-puder">Jesteśmy członkami Politechniki Wrocławskiej –</span> Reprezentujemy różne Wydziały i stanowiska: od pracowników administracji, przez studentów i doktorantów, po nauczycieli akademickich.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Porównaliśmy nasze doświadczenia i wspólnie postanowiliśmy pomóc naszej Społeczności w rozwiązaniu problemów, które ją dotykają. 
            </p>

            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Bezpośrednimi autorami wniosku są: 
            </p>
            <ul role="list" className="mt-8 space-y-3">
              {[
                'Marta Rusnak (W1)',
                'Radosław Szymon (W11, doktorant)',
                'Dawid Skrzypczak (W3)',
                'Kamila Foremny (W12, pracowniczka administracji)',
                'Paweł Ksieniewicz (W4)'
              ].map((feature) => (
                <li key={feature} className="flex">
                  <CheckIcon className="h-8 w-8 flex-none fill-puder" />
                  <span className="ml-4">{feature}</span>
                </li>
              ))}
            </ul>

              <p className="mt-4 text-lg tracking-tight text-slate-700">
              Za szczególne wsparcie, konsultacje, cenne i szczegółowe rady dziękujemy Marlenie Boguckiej-Kubackiej, Krzysztofowi Gałkowskiemu, Joannie Majczyk, Oldze Rac-Rumijowskiej, Witoldowi Sikorze, Grzegorzowi Serafinowi, Mateuszowi Szatkowskiemu.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
