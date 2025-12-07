"use client"
import React from 'react'

export default function TilesGrid(){
  return (
    <section id="hosting-plans" className="max-w-7xl mx-auto px-6 py-12">
      <div className="tile-row-bottom">
        <article className="tile tile--shared" aria-labelledby="shared-title">
          <div>
            <h3 id="shared-title" className="text-xl font-extrabold"><span className="emoji" role="img" aria-label="dolphin">🐬</span> Shared Hosting</h3>
            <p className="mt-2 text-sm text-[#041022]/90">Affordable, managed hosting that’s perfect for portfolios, small businesses, and first sites.</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>⚡ 1-click installs & LiteSpeed cache</li>
              <li>🔁 Auto-updates & daily backups</li>
              <li>🔐 Free SSL & easy domain management</li>
            </ul>
          </div>

          <div className="mt-6">
            <a href="/cart.php?a=add&pid=1" className="cta cta-accent" aria-label="Start Shared Hosting">Start Shared Hosting 🐬</a>
          </div>
        </article>

        <article className="tile tile--vps" aria-labelledby="vps-title">
          <div>
            <h3 id="vps-title" className="text-xl font-extrabold"><span className="emoji" role="img" aria-label="shark">🦈</span> VPS Hosting</h3>
            <p className="mt-2 text-sm text-[#041022]/90">Predictable resources, root access, and snapshots for apps that need reliable performance.</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>🛠 Full root or managed options</li>
              <li>📸 Snapshots & scheduled backups</li>
              <li>⚡ NVMe storage & vertical scaling</li>
            </ul>
          </div>

          <div className="mt-6">
            <a href="/cart.php?a=add&pid=3" className="cta cta-accent" aria-label="Launch Your VPS">Launch Your VPS 🦈</a>
          </div>
        </article>

        <article className="tile tile--wp" aria-labelledby="wp-title">
          <div>
            <h3 id="wp-title" className="text-xl font-extrabold"><span className="emoji" role="img" aria-label="rocket">🚀</span> WordPress Turbo</h3>
            <p className="mt-2 text-sm text-[#041022]/90">CyberPanel + LiteSpeed tuned for WordPress performance, staging, and plugin-safe updates.</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>🔁 Staging & cloning</li>
              <li>🚀 LSCache acceleration</li>
              <li>🧩 Plugin-safe updates & backups</li>
            </ul>
          </div>

          <div className="mt-6">
            <a href="/cart.php?a=add&pid=4" className="cta cta-accent" aria-label="Turbocharge WordPress">Turbocharge WordPress 🚀</a>
          </div>
        </article>
      </div>
    </section>
  )
}
