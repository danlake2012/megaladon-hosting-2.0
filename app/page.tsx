import React from 'react'
import Navbar from '../components/Navbar'
import ClientEnhance from '../components/ClientEnhance'
import Hero from '../components/sections/Hero'
import Hosting from '../components/sections/Hosting'
import Domains from '../components/sections/Domains'
import KB from '../components/sections/KB'
import Support from '../components/sections/Support'
import CTA from '../components/sections/CTA'

export default function Home(){
  return (
    <>
      <Navbar />
      <ClientEnhance />
      <main className="min-h-screen bg-[#020817] text-[#E5E7EB]">
        <Hero />
        <Hosting />
        <Domains />
        <KB />
        <Support />
        <CTA />
      </main>
    </>
  )
}
