import clsx from 'clsx'

import Link from 'next/link'
import { SectionHeading } from '@/components/SectionHeading'

import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { GridPattern } from '@/components/GridPattern'
import { Container } from '@/components/Container'
import { Testimonials } from './Testimonials'


function Plan({
    name,
    description,
    price,
    features,
    href,
    featured = false,
  }: {
    name: string
    description: string
    price: string
    features: Array<string>
    href: string
    featured?: boolean
  }) {
    return (
      <div
        className={clsx(
          'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
          featured && 'bg-blue-600 sm:shadow-lg',
        )}
      >
        {featured && (
          <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
            <GridPattern x="50%" y="50%" />
          </div>
        )}
        <div className="relative flex flex-col">
          <h3
            className={clsx(
              'mt-7 text-lg font-semibold tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            {name}
          </h3>
          <p
            className={clsx(
              'mt-2 text-lg tracking-tight',
              featured ? 'text-white' : 'text-slate-600',
            )}
          >
            {description}
          </p>
          {/* <p className="order-first flex font-display font-bold">
            <span
              className={clsx(
                'text-[1.75rem] leading-tight',
                featured ? 'text-blue-200' : 'text-slate-500',
              )}
            >
              $
            </span>
            <span
              className={clsx(
                'ml-1 mt-1 text-7xl tracking-tight',
                featured ? 'text-white' : 'text-slate-900',
              )}
            >
              {price}
            </span>
          </p> */}
          <div className="order-last mt-8">
            <ul
              role="list"
              className={clsx(
                '-my-2 divide-y text-base tracking-tight',
                featured
                  ? 'divide-white/10 text-white'
                  : 'divide-slate-200 text-slate-900',
              )}
            >
              {features.map((feature) => (
                <li key={feature} className="flex py-2">
                  <CheckIcon
                    className={clsx(
                      'h-8 w-8 flex-none',
                      featured ? 'fill-white' : 'fill-slate-600',
                    )}
                  />
                  <span className="ml-4">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <Button
            href={href}
            color={featured ? 'white' : 'slate'}
            className="mt-8"
            aria-label={`Get started with the ${name} plan for $${price}`}
          >
            Get started
          </Button> */}
        </div>
      </div>
    )
  }

export function DlaKogo() {
  return (
    <section
      id="dla-kogo"
      aria-label="Kto może skorzystać?"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >

      <Container>
        <SectionHeading number="2" id="pricing-title">
          Kto poparł?
        </SectionHeading>
        
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Nasz projekt poparli
        </p>

        {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
          Bezpośrednimi autorami wniosku są: 
        </p> */}
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Członkowie Academia Iuvenum 2021-2024',
            'Dziekan Szkoły Doktorskiej',
            'Dziekan Wydziału Chemicznego', 
            'Dziekan Wydziału Medycznego',
            'Dziekan Wydziału Zarządzania', 
            'Kierowniczka Dziekanatu i Pracowników Administracji Wydziału Architektury',
            'Kierowniczka Dziekanatu Wydziału Elektroniki, Fotoniki i Mikrosystemów', 
            'Kierowniczka Dziekanatu Wydziału Podstawowych Problemów Techniki',
            'Opiekunka Naukowa Koła Naukowego Pojazdów i Robotów Mobilnych',
            'Pełnomocniczka Rektora ds. Osób z Niepełnosprawnościami',
            'Pełnomocniczka Rektora ds. przeciwdziałania dyskryminacji wraz z Zespołem',
            'Pełnomocniczka Rektora ds. rozwoju nauk społecznych i humanistycznych / Mentorki Academia Iuvenum',
            'Zarząd Parlamentu Studentów',
            'Rada Doktorantów',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-puder" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </Container>

      {/* ● pracownicy dydaktyczni,
● pracownicy badawczy,
● pracownicy badawczo-dydaktyczni,
● pracownicy administracyjni,
● pracownicy techniczni, wspierający i inni. */}

      {/* <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            name="Pracownicy dydaktyczni"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, exercitationem rerum sapiente magnam officiis nobis excepturi alias quod mollitia consequatur iste vel deserunt eveniet pariatur quisquam dignissimos delectus veniam!"
            price="15"
            href="#"
            features={[
                'Stanowisko A',
                'Stanowisko B',
                'Stanowisko C',
            ]}
          />
          <Plan
            name="Pracownicy badawczy"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, exercitationem rerum sapiente magnam officiis nobis excepturi alias quod mollitia consequatur iste vel deserunt eveniet pariatur quisquam dignissimos delectus veniam!"
            price="15"
            href="#"
            features={[
                'Stanowisko A',
                'Stanowisko B',
                'Stanowisko C',
            ]}
          />
          <Plan
            name="Pracownicy badawczo-dydaktyczni"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, exercitationem rerum sapiente magnam officiis nobis excepturi alias quod mollitia consequatur iste vel deserunt eveniet pariatur quisquam dignissimos delectus veniam!"
            price="15"
            href="#"
            features={[
                'Stanowisko A',
                'Stanowisko B',
                'Stanowisko C',
            ]}
          />
          <Plan
            name="Pracownicy administracyjni"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, exercitationem rerum sapiente magnam officiis nobis excepturi alias quod mollitia consequatur iste vel deserunt eveniet pariatur quisquam dignissimos delectus veniam!"
            price="15"
            href="#"
            features={[
                'Stanowisko A',
                'Stanowisko B',
                'Stanowisko C',
            ]}
          />
          <Plan
            name="Pracownicy techniczni, wspierający i inni"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, exercitationem rerum sapiente magnam officiis nobis excepturi alias quod mollitia consequatur iste vel deserunt eveniet pariatur quisquam dignissimos delectus veniam!"
            price="15"
            href="#"
            features={[
              'Stanowisko A',
              'Stanowisko B',
              'Stanowisko C',
            ]}
          />
        </div>
      </div> */}

    </section>
  )
}
