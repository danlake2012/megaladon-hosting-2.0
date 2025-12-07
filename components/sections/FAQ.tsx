"use client"
import React, { useState } from 'react'

const faqs = [
  { 
    q: '🚀 How quickly can I get my site online?', 
    a: `Most sites are online within minutes after successful checkout! Your hosting account is provisioned automatically, and you'll receive cPanel login credentials via email immediately. From there, you can upload files via FTP, use the File Manager, or install WordPress with one click. We also provide assisted setup on selected plans if you need extra help getting started.` 
  },
  { 
    q: '🔄 Do you offer free migrations?', 
    a: `Yes — we offer free migration assistance for all new customers! Our team will handle the entire migration process from most control panels (cPanel, Plesk, DirectAdmin) with minimal downtime. Just submit a ticket after signing up with your old hosting login credentials, and we'll take care of the rest. Typical migrations complete within 24-48 hours.` 
  },
  { 
    q: '⏰ What is your uptime guarantee?', 
    a: `We aim for 99.9% uptime backed by enterprise-grade infrastructure. Our systems use real-time monitoring, automated failover, and redundant hardware to keep services online. In the rare event of unexpected downtime, our team is alerted immediately and works around the clock to restore service. You can view our current uptime stats at status.megaladonhosting.com.` 
  },
  { 
    q: '🔒 Is SSL included?', 
    a: `Yes! Free SSL certificates (Let's Encrypt) are included with every hosting plan at no extra charge. SSL certificates encrypt the connection between your visitors and your website, protecting sensitive data and improving SEO rankings. We automatically install and renew SSL certificates, so you never have to worry about expiration.` 
  },
  { 
    q: '💾 How often are backups taken?', 
    a: `We perform automated daily backups of all hosting accounts, retained for 30 days. Backups include your website files, databases, and email accounts. You can restore from any backup point through cPanel with just a few clicks. For added peace of mind, we recommend keeping your own local backups of critical data.` 
  },
  { 
    q: '💳 What payment methods do you accept?', 
    a: `We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and cryptocurrency (Bitcoin, Ethereum). All payments are processed securely through industry-standard payment gateways. You can set up automatic billing to ensure uninterrupted service, or pay manually each billing cycle.` 
  },
  { 
    q: '📧 Can I create email accounts with my domain?', 
    a: `Absolutely! Every hosting plan includes unlimited email accounts at your domain (e.g., contact@yourdomain.com). Access email via webmail (Roundcube, Horde, or SquirrelMail), or configure it with desktop/mobile email clients using IMAP or POP3. We also support email forwarding, autoresponders, and spam filtering.` 
  },
  { 
    q: '🛡️ What security features are included?', 
    a: `Security is our top priority. Every plan includes free SSL certificates, DDoS protection, automated malware scanning, firewall protection, and daily backups. We also offer two-factor authentication (2FA) for cPanel, IP blocking, password-protected directories, and ModSecurity rules to prevent common attacks. Our team monitors for suspicious activity 24/7.` 
  },
  { 
    q: '⚡ What makes your hosting faster than others?', 
    a: `We use NVMe SSD storage (10x faster than traditional SSDs), LiteSpeed web server (84x faster than Apache), server-level caching (LSCache), and a global CDN to deliver content from the nearest location to your visitors. Our servers are optimized specifically for PHP applications like WordPress, resulting in lightning-fast page load times.` 
  },
  { 
    q: '🎯 Can I upgrade or downgrade my plan later?', 
    a: `Yes! You can upgrade to a higher plan at any time through your client area. We'll prorate the difference and apply credit to your account. Downgrades are also possible, though please note that some features (like storage and bandwidth) must fit within the new plan's limits. Contact support if you need help choosing the right plan.` 
  },
  { 
    q: '💰 Do your prices increase at renewal?', 
    a: `No sneaky price hikes here! Unlike many hosting companies that offer low introductory rates but jack up prices at renewal, our pricing is transparent and consistent. The price you pay today is the same price you'll pay at renewal—guaranteed. What you see is what you get, now and forever.` 
  },
  { 
    q: '🌍 Where are your servers located?', 
    a: `Our primary data center is located in the United States with tier-3 redundancy, 24/7 on-site security, and multiple upstream network providers. We're expanding to additional global locations soon. All our facilities feature climate-controlled environments, redundant power (generators + UPS), and enterprise-grade networking equipment.` 
  }
]

export default function FAQ(){
  const [open, setOpen] = useState<number|null>(0)
  return (
    <section id="faq" className="py-20 bg-gradient-to-t from-black/5 to-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-2">❓ FAQ — Quick Answers</h2>
        <p className="text-white/70 mb-8">Everything you need to know about Megaladon Hosting</p>
        <div className="space-y-3">
          {faqs.map((f, i)=> (
            <div key={i} className="rounded-lg border border-white/6 p-4 bg-[#061018]/30 hover:border-cyan-400/30 transition-colors">
              <button aria-expanded={open===i} onClick={()=> setOpen(open===i ? null : i)} className="w-full text-left flex items-center justify-between gap-3">
                <div className="font-semibold">{f.q}</div>
                <div className="text-xl text-white/60">{open===i? '−' : '+'}</div>
              </button>
              {open===i && <div className="mt-3 text-white/80 text-sm leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
        
        <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-2 border-cyan-400/30 text-center">
          <h3 className="text-xl font-bold mb-2 text-white">🤔 Still have questions?</h3>
          <p className="text-white/80 mb-4">
            Our support team is here to help! Submit a ticket and get answers from real humans (not bots) who actually know hosting.
          </p>
          <a 
            href="/submitticket.php" 
            className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold text-white transition-colors"
          >
            📩 Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
