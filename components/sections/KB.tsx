import React from 'react'
import Tile from '../../components/Tile'

export default function KB(){
  return (
    <section id="kb" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-3">Knowledge Base</h2>
        <p className="text-white/80 mb-6">Guides and documentation to get you started and keep your site healthy.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <Tile title="Getting Started" description="Step-by-step walkthroughs for new users." href="https://docs.megaladonhosting.com" />
          <Tile title="DNS & Domain Setup" description="How to point domains and create records." href="https://docs.megaladonhosting.com/dns" />
          <Tile title="WordPress Install" description="Get WordPress running in minutes with one-click." href="https://docs.megaladonhosting.com/wordpress" />
        </div>
      </div>
    </section>
  )
}
