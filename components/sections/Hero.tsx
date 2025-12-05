import React from 'react'
import Tile from '../../components/Tile'

export default function Hero(){
  return (
    // make the hero full-screen (min-h-screen) but keep the tile centered and not full-bleed
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-[#020817] to-[#061023] py-12">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* card-like hero tile (contained, not full-bleed) with cyan border */}
          <div className="w-full bg-[#08101a] rounded-3xl border-2 border-cyan-400/30 shadow-lg overflow-hidden">
            <div className="px-6 p-6 md:p-10 flex flex-col md:flex-row items-stretch gap-6">

          {/* Shark visual on the left (keeps aspect and doesn't overflow) */}
          <div className="flex-shrink-0 w-full md:w-5/12 lg:w-4/12 flex items-center justify-center rounded-lg overflow-hidden border-2 border-cyan-400/40 bg-gradient-to-r from-black/0 via-black/5 to-black/0 p-4">
            {/* smaller horizontal rectangle for the shark image, now clearly framed with cyan border and smaller height */}
            <div className="w-full h-44 md:h-56 lg:h-64 xl:h-72 2xl:h-80 flex items-center justify-center bg-black/0 rounded-xl overflow-hidden">
              <img src="/assets/images/shark-hero.jpg" alt="Shark hero" className="w-auto max-w-full max-h-full object-contain" />
            </div>
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
        </div>
      </div>
    </section>
  )
}
