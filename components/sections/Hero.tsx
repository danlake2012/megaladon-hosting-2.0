import React from 'react'
import Tile from '../../components/Tile'

export default function Hero(){
  return (
    <section id="home" className="min-h-screen py-24 flex items-center justify-center bg-gradient-to-b from-[#020817] to-[#061023]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">Start Your Website Today — Fast, Secure Veteran-Owned Hosting</h1>
          <p className="text-lg text-white/80">Domain, Hosting, Email, SSL — Everything You Need in One Place.</p>
          <div className="flex gap-4">
            <a href="#hosting-plans" className="px-5 py-3 rounded-lg bg-gradient-to-r from-accent to-teal font-semibold text-black">Get Hosting</a>
            <a href="#kb" className="px-5 py-3 rounded-lg border border-white/10 text-sm">Learn How To Start</a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Tile title="Choose Your Domain" icon="✔" href="#domains" />
            <Tile title="Select Hosting Plan" icon="🚀" href="#hosting" />
            <Tile title="Build Your Website" icon="🎨" href="#hosting" />
            <Tile title="Launch & Grow" icon="📈" href="#cta" />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[url('/assets/images/shark-hero.jpg')] bg-cover bg-center min-h-[360px]"> 
          {/* Visual placeholder — hero image as background */}
        </div>
      </div>
    </section>
  )
}
