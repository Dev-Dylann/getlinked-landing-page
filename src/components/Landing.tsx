import { useState } from 'react'
import Header from './Header'
import MobileNav from './MobileNav'
import Hero from './Hero'
import Introduction from './Introduction'
import Guidelines from './Guidelines'
import Criteria from './Criteria'
import FAQ from './FAQ'
import Timeline from './Timeline'
import Prizes from './Prizes'
import Sponsors from './Sponsors'
import Policy from './Policy'
import Footer from './Footer'

const Landing = () => {
    const [isNav, setIsNav] = useState(false)

  return (
    <>
      <header className='relative'>
        <Header setIsNav={setIsNav} />
        <MobileNav isNav={isNav} setIsNav={setIsNav} />
      </header>

      <main className='flex flex-col gap-6'>
        <Hero />
        <Introduction />
        <Guidelines />
        <Criteria />
        <FAQ />
        <Timeline />
        <Prizes />
        <Sponsors />
        <Policy />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Landing