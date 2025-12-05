import React from 'react'
import Tile from '../../components/Tile'

export default function Hero(){
  return (
    <section id="home" className="py-24 bg-gradient-to-b from-[#020817] to-[#061023]">
      <div className="max-w-7xl mx-auto px-6">
        {/* One long-width hero tile */}
        <div className="p-6 md:p-10 rounded-2xl bg-[#08101a] border border-white/5 shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch gap-6">

          {/* Shark visual on the left (keeps aspect and doesn't overflow) */}
          <div className="flex-shrink-0 w-full md:w-5/12 lg:w-4/12 flex items-center justify-center bg-black/5 rounded-lg overflow-hidden">
            <img src="/assets/images/shark-hero.jpg" alt="Shark hero" className="block w-full h-full object-cover object-center max-h-[520px] md:max-h-[640px]" />
          </div>

          {/* Right side: H1 on top, rest of the content beneath it */}
          <div className="flex-1 flex flex-col justify-center text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Start Your Website Today — Fast, Secure Veteran-Owned Hosting</h1>

            <div className="mt-4 text-lg text-white/80 max-w-2xl">
              <p>Domain registration, lightning-fast hosting, email, and free SSL — everything you need to get online quickly and reliably.</p>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <a href="#hosting-plans" className="inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-accent to-teal font-semibold text-black">Get Hosting</a>
                <a href="#kb" className="inline-block px-4 py-2 rounded-lg border border-white/10 text-sm">Learn How To Start</a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm">
                <Tile title="Choose Your Domain" icon="✔" href="#domains" />
                <Tile title="Select Hosting Plan" icon="🚀" href="#hosting" />
                <Tile title="Build Your Website" icon="🎨" href="#hosting" />
                <Tile title="Launch & Grow" icon="📈" href="#cta" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
