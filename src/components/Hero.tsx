import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/tasks.jpg'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="font-display text-l font-medium text-slate-900">
        Mikrogranty celowane – wsparcie w zakresie doskonalenia umiejętności komunikacyjnych i zarządczych.
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-puder before:content-['—_']">
          TASK
        </strong>
        : Targetted Skills
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5 mb-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-puder text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          {/* <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-puder shadow-xl md:w-80 lg:w-auto"> */}
          <div className="relative z-10 mx-auto flex w-64 md:w-80 lg:w-auto bg-white rounded-xxl p-8">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
          <div className="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/xtd2eIrr0kU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
            {/* <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              TASK
            </h1>
            <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-3xl">
              Targetted Skills
            </h2>
            <p className="mt-4 text-3xl text-slate-600">
              Mikrogranty celowane – wsparcie w zakresie doskonalenia umiejętności komunikacyjnych i zarządczych.
            </p> */}
            <div className="mt-8 flex gap-4">
              {/* <Button href="#free-chapters" color="puder">
                Złóż wniosek
              </Button> */}
              <Button href="files/opis.pdf" variant="outline" color="blue">
                Opis
              </Button>
              <Button href="files/regulamin.pdf" variant="outline" color="blue">
                Regulamin
              </Button>
              <Button href="files/harmonogram.pdf" variant="outline" color="blue">
                Harmonogram
              </Button>
              <Button href="files/kosztorys.pdf" variant="outline" color="blue">
                Kosztorys
              </Button>
            </div>
            <p className="mt-4 text-3xl text-slate-600">
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
          </div>
        </div>
      </div>
    </header>

    
  )
}
