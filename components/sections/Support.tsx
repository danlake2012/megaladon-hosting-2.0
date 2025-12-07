import React from 'react'
import Tile from '../../components/Tile'

export default function Support(){
  return (
    <section id="support" className="py-20 bg-[#041022]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-3">💬 Support</h2>
        <p className="text-white/80 mb-6">Fast, friendly support you can rely on — submit tickets, check status, request migrations.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Tile title="🎫 Submit Ticket" description="Open a support ticket and get expert help. Average response time: under 2 hours, even on weekends." href="/submitticket.php" />
          <Tile title="👤 Account Login" description="Manage billing, domains and tickets from your account. View invoices, update payment methods, and more." href="/clientarea.php" />
          <Tile title="🚀 Migration Help" description="We will move your site and minimize downtime. Free migration assistance for all new customers." />
        </div>

        {/* Support Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/25 text-center">
            <div className="text-4xl font-extrabold text-cyan-400 mb-2">{"<2hrs"}</div>
            <div className="text-sm text-white/70">Average Response Time</div>
          </div>
          <div className="p-6 rounded-xl bg-[#08101a] border-2 border-green-400/25 text-center">
            <div className="text-4xl font-extrabold text-green-400 mb-2">99.9%</div>
            <div className="text-sm text-white/70">First Response Resolution</div>
          </div>
          <div className="p-6 rounded-xl bg-[#08101a] border-2 border-purple-400/25 text-center">
            <div className="text-4xl font-extrabold text-purple-400 mb-2">24/7</div>
            <div className="text-sm text-white/70">Ticket System Available</div>
          </div>
          <div className="p-6 rounded-xl bg-[#08101a] border-2 border-teal-400/25 text-center">
            <div className="text-4xl font-extrabold text-teal-400 mb-2">100%</div>
            <div className="text-sm text-white/70">Customer Satisfaction</div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span className="text-2xl">📧</span>
              Email Support
            </h3>
            <p className="text-white/80 mb-3">
              For non-urgent inquiries or detailed questions, email us at:
            </p>
            <a href="mailto:support@megaladonhosting.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              support@megaladonhosting.com
            </a>
            <p className="text-sm text-white/60 mt-2">
              Response within 24 hours, typically much faster.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span className="text-2xl">💬</span>
              Live Chat (Coming Soon)
            </h3>
            <p className="text-white/80 mb-3">
              We're building a live chat system for instant answers during business hours.
            </p>
            <p className="text-sm text-white/60">
              For now, submit a ticket for the fastest response. Our team monitors tickets in real-time.
            </p>
          </div>
        </div>

        <div className="mt-8 reveal p-6 rounded-xl bg-[#041022]/60 border border-cyan-400/18 flex items-center justify-between gap-4">
          <div>
            <div className="font-extrabold text-lg">🇺🇸 Trusted & Secure — Veteran Owned</div>
            <div className="text-sm text-white/80 mt-1">99.9% uptime, SSL by default, DDoS mitigations, and dedicated support. Your success is our mission.</div>
          </div>
          <div className="flex items-center gap-3">
            <img src="/assets/images/trust-shield.svg" alt="audited" className="h-8" />
            <img src="/assets/images/ssl-badge.svg" alt="ssl" className="h-8" />
            <div className="text-xs text-white/70">Veteran-Owned</div>
          </div>
        </div>

        {/* Community */}
        <div className="mt-10 p-8 rounded-xl bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border-2 border-indigo-400/30 text-center">
          <h3 className="text-2xl font-bold mb-3 text-white">🌐 Join Our Community</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Connect with other Megaladon Hosting users, share tips, get advice, and stay updated on new features and tutorials.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://discord.gg/megaladon" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold text-white transition-colors"
            >
              💬 Join Discord
            </a>
            <a 
              href="https://twitter.com/megaladonhost" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold text-white transition-colors"
            >
              🐦 Follow on Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
