import Link from 'next/link'
import Image from 'next/image'

import { SectionHeading } from '@/components/SectionHeading'

import { GridPattern } from '@/components/GridPattern'
import authorImage from '@/images/avatars/jan.jpeg'
import kasiaG from '@/images/avatars/kasiag.png'
import pawelK from '@/images/avatars/pawelk.jpg'
import dawidS from '@/images/avatars/dawids.jpg'
import radoslawS from '@/images/avatars/radoslaws.png'
import kamilaF from '@/images/avatars/kamilaf.png'
import martaR from '@/images/avatars/marta.jpg'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

const people = [
  {
    name: 'Marta Rusnak',
    department: "W1",
    photo: martaR
  },
  {
    name: 'Katarzyna Gwóźdź',
    department: "W11",
    photo: kasiaG
  },
  {
    name: 'Radosław Szymon',
    department: "W11 (doktorant)",
    photo: radoslawS
  },
  {
    name: 'Dawid Skrzypczak',
    department: "W3",
    photo: dawidS
  },
  {
    name: 'Kamila Foremny',
    department: "W12, pracowniczka administracji",
    photo: kamilaF
  },
  {
    name: 'Paweł Ksieniewicz',
    department: "W4",
    photo: pawelK
  },
]

export function Kto() {
  return (
    
    <section
      id="kto"
      aria-label="Autorzy"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,pink)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="4" id="author-title">
              Autorzy
            </SectionHeading>
            <p className="mt-8 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              <span className="block text-puder">Jesteśmy członkami Politechniki Wrocławskiej –</span> Reprezentujemy różne Wydziały i stanowiska: od pracowników administracji, przez studentów i doktorantów, po nauczycieli akademickich.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Porównaliśmy nasze doświadczenia i wspólnie postanowiliśmy pomóc naszej Społeczności w rozwiązaniu problemów, które ją dotykają. 
            </p>
          <div>
  <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
    <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {people.map((person) => (
      <li>
        <img className="mx-auto h-56 w-56 rounded-full" src={person.photo.src} alt=""></img>
        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
        <p className="text-sm leading-6 text-gray-600">{person.department}</p>
      </li>
              ))}

    </ul>
  </div>
</div>


            <p className="mt-8 text-lg tracking-tight text-slate-700">
              Za szczególne wsparcie, konsultacje, cenne i szczegółowe rady dziękujemy Marlenie Boguckiej-Kubackiej, Krzysztofowi Gałkowskiemu, Joannie Majczyk, Oldze Rac-Rumijowskiej, Witoldowi Sikorze, Grzegorzowi Serafinowi, Mateuszowi Szatkowskiemu.
            </p>
          </div>
          



        </div>
      </div>
    </section>
  )
}
