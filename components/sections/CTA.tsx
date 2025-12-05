import React from 'react'

export default function CTA(){
  return (
    <section id="cta" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center bg-gradient-to-r from-[#021018]/30 via-transparent to-[#021018]/10 rounded-xl p-10">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Launch Your Website?</h2>
        <p className="text-white/80 mb-6">Pick a plan and let Megaladon Hosting handle the rest — fast, secure, and built for growth.</p>
        <a href="#hosting-plans" className="px-6 py-3 bg-gradient-to-r from-accent to-teal rounded-lg font-bold text-black">Get Hosting Now</a>
      </div>
    </section>
  )
}
