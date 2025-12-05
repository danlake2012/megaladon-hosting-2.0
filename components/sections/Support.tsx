import React from 'react'
import Tile from '../../components/Tile'

export default function Support(){
  return (
    <section id="support" className="py-20 bg-[#041022]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-3">Support</h2>
        <p className="text-white/80 mb-6">Fast, friendly support you can rely on — submit tickets, check status, request migrations.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <Tile title="Submit Ticket" description="Open a support ticket and get expert help." href="/submitticket.php" />
          <Tile title="Live Chat (coming soon)" description="Real-time chat for fast answers." />
          <Tile title="Migration Help" description="We will move your site and minimize downtime." />
        </div>
      </div>
    </section>
  )
}
