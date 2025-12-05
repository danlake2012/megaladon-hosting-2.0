import React from 'react'
import Tile from '../../components/Tile'

export default function Domains(){
  return (
    <section id="domains" className="py-20 bg-gradient-to-tr from-black/10 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-3">Domains</h2>
        <p className="text-white/80 mb-6">Search, transfer, and protect your domain — WHOIS privacy, DNS, and email routing included.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <Tile title="Domain Search" description="Find the perfect domain and register instantly." cta="Search Domains" href="#kb" />
          <Tile title="Domain Transfer" description="Move your domain to Megaladon with minimal downtime." cta="Transfer" />
          <Tile title="DNS & Email" description="Manage DNS records and attach email services easily." cta="Setup DNS" />
        </div>
      </div>
    </section>
  )
}
