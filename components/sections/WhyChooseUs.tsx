import React from 'react'

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-b from-[#020817] to-[#061023]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            ⚔️ Why Developers & Businesses Choose Megaladon
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We're not your typical hosting company. Here's what makes us different.
          </p>
        </div>

        <div className="space-y-8">
          {/* Performance That Matters */}
          <div className="p-8 rounded-xl bg-[#08101a] border-2 border-cyan-400/30 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-3xl">
                  ⚡
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Performance That Actually Matters</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Forget "unlimited bandwidth" promises from companies running on decade-old hard drives. We use <strong className="text-cyan-400">pure NVMe SSD storage</strong> across all plans—the same technology powering enterprise cloud infrastructure. Your WordPress site loads in milliseconds, not seconds.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-lg bg-cyan-900/20 border border-cyan-400/20">
                    <div className="font-semibold text-cyan-400 mb-1">⚡ LiteSpeed Web Server</div>
                    <p className="text-sm text-white/70">Up to 84x faster than Apache for WordPress sites. Built-in caching, HTTP/3 support.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-teal-900/20 border border-teal-400/20">
                    <div className="font-semibold text-teal-400 mb-1">🚀 Edge Caching & CDN</div>
                    <p className="text-sm text-white/70">Your static assets served from the nearest location to your visitors. Global speed, local feel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security First */}
          <div className="p-8 rounded-xl bg-[#08101a] border-2 border-cyan-400/30 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl">
                  🛡️
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Security Isn't an Add-On—It's Built In</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  My military background taught me that security is a <strong className="text-purple-400">mindset, not a checklist</strong>. Every Megaladon server is hardened from the ground up with multi-layered protection.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🔒</span>
                    <div>
                      <strong className="text-purple-400">Free SSL Certificates (Let's Encrypt)</strong>
                      <p className="text-sm text-white/70">Automatic installation, auto-renewal. HTTPS should be standard, not premium.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🚨</span>
                    <div>
                      <strong className="text-pink-400">DDoS Protection & Firewall</strong>
                      <p className="text-sm text-white/70">Enterprise-grade mitigation stops attacks before they reach your site. Your uptime is our priority.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">💾</span>
                    <div>
                      <strong className="text-purple-400">Automated Daily Backups</strong>
                      <p className="text-sm text-white/70">Your data is backed up every single day. Restore with one click if disaster strikes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🔐</span>
                    <div>
                      <strong className="text-pink-400">Malware Scanning & Removal</strong>
                      <p className="text-sm text-white/70">Proactive monitoring detects threats early. If something slips through, we clean it—free of charge.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Developer-Friendly */}
          <div className="p-8 rounded-xl bg-[#08101a] border-2 border-cyan-400/30 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-3xl">
                  👨‍💻
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Built by a Developer, for Developers</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  I've spent years in the trenches coding, deploying, and debugging. I know what developers need because <strong className="text-green-400">I am one</strong>. That's why every plan includes tools that matter.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-green-900/20 border border-green-400/20">
                    <div className="text-2xl mb-2">⚙️</div>
                    <div className="font-semibold text-green-400 mb-1">SSH Access</div>
                    <p className="text-sm text-white/70">Full shell access on all plans. Deploy with Git, run custom scripts, install what you need.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-400/20">
                    <div className="text-2xl mb-2">🐘</div>
                    <div className="font-semibold text-emerald-400 mb-1">Multiple PHP Versions</div>
                    <p className="text-sm text-white/70">Switch between PHP 7.4, 8.0, 8.1, 8.2 with one click. Test before you deploy.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-900/20 border border-green-400/20">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="font-semibold text-green-400 mb-1">cPanel & WHM</div>
                    <p className="text-sm text-white/70">Industry-standard control panel. Manage domains, databases, email accounts with ease.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-400/20">
                    <div className="text-2xl mb-2">🗄️</div>
                    <div className="font-semibold text-emerald-400 mb-1">MySQL & PostgreSQL</div>
                    <p className="text-sm text-white/70">Both databases available. Optimized for performance, backed up automatically.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-900/20 border border-green-400/20">
                    <div className="text-2xl mb-2">🔄</div>
                    <div className="font-semibold text-green-400 mb-1">Git Deployment</div>
                    <p className="text-sm text-white/70">Push to deploy. Integrate with GitHub, GitLab, or Bitbucket seamlessly.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-400/20">
                    <div className="text-2xl mb-2">📦</div>
                    <div className="font-semibold text-emerald-400 mb-1">Composer & npm</div>
                    <p className="text-sm text-white/70">Modern dependency management for PHP and Node.js projects built-in.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support That Understands */}
          <div className="p-8 rounded-xl bg-[#08101a] border-2 border-cyan-400/30 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-3xl">
                  🎯
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Real Support from People Who Know Hosting</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  You won't get passed around to five different departments or wait 48 hours for a canned response. Our support team is <strong className="text-orange-400">small, skilled, and actually gives a damn</strong> about solving your problem.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-900/20">
                    <span className="text-2xl">⏱️</span>
                    <div>
                      <strong className="text-orange-400">Average Response Time: Under 2 Hours</strong>
                      <p className="text-sm text-white/70">Even on weekends. Your emergencies don't wait for Monday.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-red-900/20">
                    <span className="text-2xl">🧠</span>
                    <div>
                      <strong className="text-red-400">Technical Expertise You Can Trust</strong>
                      <p className="text-sm text-white/70">No reading from scripts. We troubleshoot, debug, and fix the actual problem.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-900/20">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <strong className="text-orange-400">Migration Assistance Included</strong>
                      <p className="text-sm text-white/70">Switching from another host? We'll handle the migration for you—zero downtime.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transparent Pricing */}
          <div className="p-8 rounded-xl bg-gradient-to-r from-cyan-900/20 to-teal-900/20 border-2 border-cyan-400/40">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-3xl">
                  💰
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">No Hidden Fees. No Surprise Renewals. Just Honest Pricing.</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  I hate bait-and-switch pricing. You know the drill: <em className="text-cyan-300">"$2.99/month!"</em> Then renewal hits and it's suddenly $14.99/month. <strong className="text-teal-400">We don't play those games.</strong>
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span> Same price at renewal—forever
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span> No setup fees, ever
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span> SSL, backups, and DDoS protection included in every plan
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span> 30-day money-back guarantee if you're not satisfied
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center p-8 rounded-xl bg-gradient-to-r from-[#071018] to-[#061023] border-2 border-cyan-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            🦈 Ready to Experience Hosting Done Right?
          </h3>
          <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Join hundreds of developers and businesses who've made the switch to Megaladon Hosting and never looked back.
          </p>
          <a 
            href="#hosting-plans" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-accent to-teal rounded-lg font-bold text-black text-lg hover:scale-105 transition-transform"
          >
            🚀 See Our Plans & Pricing
          </a>
        </div>
      </div>
    </section>
  )
}
