import React from 'react'
import WHMCSPlans from '../WHMCSPlans'

export default function Hosting(){
  return (
    <section id="hosting" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-3">Hosting</h2>
        <p className="text-white/80 mb-6">Fast SSD Hosting — Free SSL Included — One-click WordPress — Secure Firewall + Backups — Veteran Owned Support</p>

        <WHMCSPlans />

        <div className="mt-10 reveal grid md:grid-cols-3 gap-6">
          <div className="card p-6 rounded-xl bg-black/30 border-2 border-cyan-400/18">
            <h3 className="font-bold">Why Megaladon Hosting</h3>
            <p className="text-white/80 mt-2">Enterprise-grade hardware, DDoS mitigation, automatic backups & free SSL.</p>
          </div>
          <div className="card p-6 rounded-xl bg-[#021018]/60 border-2 border-cyan-400/22">
            <h3 className="font-bold">Powered for WordPress</h3>
            <p className="text-white/80 mt-2">Caching, tuned PHP, and 1-click installer for rapid launches.</p>
          </div>
          <div className="card p-6 rounded-xl bg-black/30 border-2 border-cyan-400/18">
            <h3 className="font-bold">Trusted & Secure</h3>
            <p className="text-white/80 mt-2">Veteran-owned, transparent pricing, and priority support for paid plans.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
