import React from 'react'
import Tile from '../../components/Tile'

export default function Domains(){
  return (
    <section id="domains" className="py-20 bg-gradient-to-tr from-black/10 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-3">Domains</h2>
        <p className="text-white/80 mb-6">Search, transfer, and protect your domain — WHOIS privacy, DNS, and email routing included.</p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 items-start">
          <div className="reveal w-full">
            <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30 shadow-lg">
              <h3 className="font-bold mb-3">Domain Search</h3>
              <p className="text-white/80 mb-4">Quickly search and register domains. Transfer or protect with WHOIS privacy.</p>
              {/* Use a simple GET submit so prerender/export works without client JS */}
              <form action="/domain-search" method="GET" className="flex gap-2">
                <input name="q" aria-label="domain search" className="flex-1 rounded-md bg-black/30 px-3 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-300" placeholder="example.com" />
                <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-accent to-teal font-semibold text-black">Check</button>
              </form>
            </div>
          </div>

          <div className="reveal">
            <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30 shadow-lg">
              <h4 className="font-semibold">Transfer a Domain</h4>
              <p className="text-sm text-white/80 mt-2">Quick transfer assistance and domain tools for DNS and routing.</p>
            </div>
          </div>

          <div className="reveal">
            <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30 shadow-lg">
              <h4 className="font-semibold">DNS Management</h4>
              <p className="text-sm text-white/80 mt-2">Full DNS control with A/CNAME/MX/SRV support and fast propagation.</p>
            </div>
          </div>

          <div className="reveal">
            <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30 shadow-lg">
              <h4 className="font-semibold">WHOIS Privacy</h4>
              <p className="text-sm text-white/80 mt-2">Protect your identity — free WHOIS privacy on selected TLDs.</p>
            </div>
          </div>

          <div className="reveal">
            <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30 shadow-lg">
              <h4 className="font-semibold">Email Integration</h4>
              <p className="text-sm text-white/80 mt-2">Seamless email routing & integrations with your domain.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
