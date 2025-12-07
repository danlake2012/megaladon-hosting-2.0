import React from 'react'
import Tile from '../../components/Tile'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-[#020817] to-[#061023] py-12">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col gap-8">

            {/* Long hero tile with headline, subline, and CTAs */}
            <div className="big-tile rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">Start Your Website Today — Fast, Secure Veteran-Owned Hosting</h1>
                  <p className="mt-3 text-white/80 max-w-3xl">Domain, Hosting, Email, SSL — Everything You Need in One Place.</p>
                  <div className="mt-6 flex gap-3">
                    <a href="#hosting-plans" onClick={(e)=>{ e.preventDefault(); document.querySelector('#hosting-plans')?.scrollIntoView({behavior:'smooth'}) }} className="btn btn-cta">Get Hosting</a>
                    <a href="#kb" onClick={(e)=>{ e.preventDefault(); document.querySelector('#kb')?.scrollIntoView({behavior:'smooth'}) }} className="btn btn-ghost">Learn How To Start</a>
                  </div>
                </div>
                <div className="hidden md:block w-64">
                  <img src="/assets/images/shark-hero.jpg" alt="Shark hero" className="w-full h-auto rounded-md shadow-xl" style={{maxHeight: '200px', objectFit: 'cover'}} />
                </div>
              </div>
            </div>

            {/* Three tiles underneath */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Tile href="#domains" title="Choose Your Domain" icon={<span className="text-3xl">✔️</span>} description="Find the perfect domain name for your website" cta="Search Domains" />
              <Tile href="#hosting" title="Select Hosting Plan" icon={<span className="text-3xl">🚀</span>} description="Fast SSD hosting with free SSL included" cta="View Plans" />
              <Tile href="#kb" title="Build Your Website" icon={<span className="text-3xl">🎨</span>} description="One-click WordPress and site builder tools" cta="Get Started" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
