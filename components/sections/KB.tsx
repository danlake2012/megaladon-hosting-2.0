import React from 'react'
import Tile from '../../components/Tile'

export default function KB(){
  return (
    <section id="kb" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-3">📚 Knowledge Base</h2>
        <p className="text-white/80 mb-6">Comprehensive guides and documentation to help you get started and keep your site running smoothly.</p>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Tile title="🚀 Getting Started" description="Step-by-step walkthroughs for new users. Set up your first site in under 10 minutes with our quick-start guide." href="https://docs.megaladonhosting.com" />
          <Tile title="🌐 DNS & Domain Setup" description="How to point domains and create records. Master A records, CNAME, MX records, and more." href="https://docs.megaladonhosting.com/dns" />
          <Tile title="💎 WordPress Install" description="Get WordPress running in minutes with one-click installer. Includes optimization tips and security hardening." href="https://docs.megaladonhosting.com/wordpress" />
        </div>

        {/* Popular Topics */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Tile title="✉️ Email Setup" description="Connect inboxes and configure routing. Create professional email addresses with your domain in minutes." />
          <Tile title="🔧 Troubleshooting" description="Common fixes and troubleshooting guides. 500 errors, database connection issues, SSL problems—we've got you covered." />
          <Tile title="🔐 Security & Backups" description="How we protect your data and restore safely. Learn about automated backups, malware scanning, and disaster recovery." />
        </div>

        {/* Advanced Topics */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-white">🎓 Advanced Tutorials</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">SSH & Terminal Access</h4>
                  <p className="text-sm text-white/70 mb-3">Master command-line deployment, Git integration, and server management. Essential skills for serious developers.</p>
                  <a href="https://docs.megaladonhosting.com/ssh" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Read Tutorial →</a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Performance Optimization</h4>
                  <p className="text-sm text-white/70 mb-3">Squeeze every millisecond out of your site. Caching strategies, CDN setup, database optimization, and more.</p>
                  <a href="https://docs.megaladonhosting.com/performance" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Read Tutorial →</a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔒</span>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">SSL & HTTPS Configuration</h4>
                  <p className="text-sm text-white/70 mb-3">Force HTTPS, mixed content fixes, certificate renewal, and troubleshooting SSL errors step-by-step.</p>
                  <a href="https://docs.megaladonhosting.com/ssl" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Read Tutorial →</a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-[#08101a] border-2 border-cyan-400/30">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🗄️</span>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Database Management</h4>
                  <p className="text-sm text-white/70 mb-3">MySQL optimization, phpMyAdmin tips, database backups, and managing multiple databases efficiently.</p>
                  <a href="https://docs.megaladonhosting.com/database" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Read Tutorial →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Tutorials */}
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-2 border-purple-400/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎥</span>
            <h3 className="text-2xl font-bold text-white">Video Tutorials Coming Soon!</h3>
          </div>
          <p className="text-white/80 mb-4">
            We're creating a complete video library covering everything from basic cPanel navigation to advanced server configuration. Subscribe to our YouTube channel to get notified when new tutorials drop!
          </p>
          <a 
            href="https://youtube.com/@megaladonhosting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:scale-105 transition-transform"
          >
            🔔 Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
