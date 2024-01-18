import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/pawelk.jpg'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/kasiag.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'I do not know why I am here.',
      author: {
        name: 'Antonio Alejandro',
        role: 'Frontend Developer',
        image: avatarImage3,
      },
    },
  ],
  [
    {
      content:
        'Problemy są po to, żeby je rozwiązywać. Najlepiej szybko, skutecznie i z zadowoleniem wszystkich. Niestety, dyskutując w grupie, często trudno to osiągnąć. Kurs Action Learning/Solving Problems dał mi narzędzia do moderowania dyskusji w taki sposób, aby efektywnie dążyć do postawionych celów. To działa — nawet z rodziną przy świątecznym stole; w tym roku nie było kłótni 😊.',
      author: {
        name: 'Katarzyna Gwóźdź',
        role: 'Szkolenie Action Learning',
        image: avatarImage7,
      },
    },
  ],
  [
    {
      content:
        'Sam fakt uczestnictwa w szkoleniu nigdy nie będzie „magicznym” sposobem na rozwiązanie wszystkich naszych zmartwień i problemów w codziennej pracy z zespołem. Nie mniej jednak, przyjęcie z możliwie otwartą głową przekazywanego na nim spojrzenia często może stanowić dobrą podstawę do dyskusji i szczerej rozmowy z ludźmi, z którymi widzimy się na co dzień w pracy, a to już może okazać się niewątpliwa wartość dodana.',
      author: {
        name: 'Paweł Ksieniewicz',
        role: 'Szkolenie "Efektywna komunikacja z doktorantem/doktorantką" (Optima)',
        image: avatarImage5,
      },
    },
  ],
]

function Testimonial({
  author,
  children,
}: {
  author: { name: string; role: string; image: ImageProps['src'] }
  children: React.ReactNode
}) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Część z nas uczestniczyła już w podobnych działaniach...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eaque laborum! Consequuntur tenetur suscipit atque dicta accusamus, repudiandae inventore! Assumenda voluptas cupiditate quod aliquam rerum, provident quibusdam quidem vero odit.
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && 'hidden lg:list-item',
                        testimonialIndex === 1 && 'lg:mt-8',
                        testimonialIndex > 1 && 'mt-8',
                      )}
                    >
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        {/* <ExpandableButton>Read more testimonials</ExpandableButton> */}
      </Expandable>
    </section>
  )
}
