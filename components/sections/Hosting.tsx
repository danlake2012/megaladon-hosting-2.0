import React from 'react'
import Tile from '../../components/Tile'

export default function Hosting(){
  return (
    <section id="hosting" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-3">Hosting</h2>
        <p className="text-white/80 mb-6">Fast SSD Hosting — Free SSL Included — One-click WordPress — Secure Firewall + Backups — Veteran Owned Support</p>

        <div className="grid md:grid-cols-3 gap-6">
          <Tile title="Shared Hosting" description="Fast, secure hosting perfect for websites and WordPress." cta="Get Started" href="#hosting-plans" />
          <Tile title="WordPress Hosting" description="One-click installs and performance tuned stacks for WP." cta="Choose WP" href="#hosting-plans" />
          <Tile title="VPS (Upcoming)" description="High performance virtual servers for larger projects." cta="Notify me" />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="card p-6 rounded-xl bg-black/30">
            <h3 className="font-bold">Reef Starter</h3>
            <div className="text-2xl font-extrabold mt-2">$3.99<span className="text-sm">/mo</span></div>
          </div>
          <div className="card p-6 rounded-xl bg-gradient-to-r from-accent to-teal text-black">
            <h3 className="font-bold">Creator Current</h3>
            <div className="text-2xl font-extrabold mt-2">$7.99<span className="text-sm">/mo</span></div>
          </div>
          <div className="card p-6 rounded-xl bg-black/30">
            <h3 className="font-bold">Apex Predator</h3>
            <div className="text-2xl font-extrabold mt-2">$19.99<span className="text-sm">/mo</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
