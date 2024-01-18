import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Register } from '@/components/Register'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Jak } from '@/components/Jak'
import { DlaKogo } from '@/components/DlaKogo'
import { Kto } from '@/components/Kto'
import { Inne } from '@/components/Inne'
import { Claim } from '@/components/Claim'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Hero />
      <NavBar />
      <Claim />
      <Introduction />
      <Testimonials />
      <DlaKogo />
      <Jak />
      <Register />
      <Kto />
      <Footer />
    </>
  )
}
