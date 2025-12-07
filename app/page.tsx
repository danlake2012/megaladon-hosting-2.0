import React from 'react'
import Navbar from '../components/Navbar'
import ClientEnhance from '../components/ClientEnhance'
import Hero from '../components/sections/Hero'
import TilesGrid from '../components/TilesGrid'
import AboutShark from '../components/sections/AboutShark'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Hosting from '../components/sections/Hosting'
import Domains from '../components/sections/Domains'
import KB from '../components/sections/KB'
import Support from '../components/sections/Support'
import CTA from '../components/sections/CTA'
import StickyCTAs from '../components/StickyCTAs'
import FAQ from '../components/sections/FAQ'

export default function Home(){
  return (
    <>
      <Navbar />
      <ClientEnhance />
      <main className="min-h-screen bg-[#020817] text-[#E5E7EB] pt-20 md:pt-16">
        <Hero />
        <TilesGrid />
        <AboutShark />
        <WhyChooseUs />
        <Hosting />
        <StickyCTAs />
        <Domains />
        <KB />
        <Support />
        <FAQ />
        <CTA />
      </main>
    </>
  )
}
