import React from 'react'
import Tile from '../../components/Tile'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-[#020817] to-[#061023] py-12">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="px-6 p-6 md:p-10 flex flex-col md:flex-row items-stretch gap-6">

            <div className="flex-shrink-0 w-full md:w-[250px] flex items-center justify-center rounded-lg overflow-hidden border-2 border-cyan-400/40 bg-gradient-to-r from-black/0 via-black/5 to-black/0 p-4">
              <div className="w-full h-44 md:w-[250px] md:h-[250px] flex items-center justify-center bg-black/0 rounded-xl overflow-hidden">
                <img src="/assets/images/shark-hero.jpg" alt="Shark hero" className="w-auto max-w-full max-h-full object-contain" />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center text-white">
              <div className="w-full mb-6">
                <div className="p-8 rounded-xl bg-[#071018] border-2 border-cyan-400/30 shadow-inner">
                  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">Start Your Website Today — Fast, Secure Veteran-Owned Hosting</h1>
                  <p className="mt-3 text-white/80 max-w-2xl">Domain registration, lightning-fast hosting, email, and free SSL — everything you need to get online quickly and reliably.</p>
                </div>
              </div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
                <Tile href="#home" title="Meet the Shark" icon={<span className="text-2xl">🦈</span>} floatIcon={<span className="text-xl">🦈</span>} square />
                <Tile href="#domains" title="Domain Search" icon={<span className="text-2xl">🔎</span>} floatIcon={<span className="text-xl">🔎</span>} square />
                <a href="#kb" className="tile block shark-cursor">
                  <div className="p-4 rounded-xl bg-[#08101a] border-2 border-cyan-400/35 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 flex items-center justify-center" style={{minHeight: '160px'}}>
                    <div className="cube-scene">
                      <div className="cube">
                        <div className="cube-face front">Start</div>
                        <div className="cube-face right">Build</div>
                        <div className="cube-face top">Launch</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
