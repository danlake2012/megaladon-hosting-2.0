"use client"
import React, { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Hosting', href: '#hosting' },
  { label: 'Domains', href: '#domains' },
  { label: 'Knowledge Base', href: '#kb' },
  { label: 'Support', href: '#support' }
]

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=>{
    function onScroll(){ setScrolled(window.scrollY > 20) }
    window.addEventListener('scroll', onScroll)
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ setActive('#'+e.target.id) } })
    }, {threshold: 0.55})
    document.querySelectorAll('main > section[id]').forEach(s=> obs.observe(s))
    return ()=>{ window.removeEventListener('scroll', onScroll); obs.disconnect() }
  },[])

  return (
    // Make header fixed so it remains visible at all times (user requested always visible)
    // We'll keep the existing scrolled visual effect when the page is scrolled.
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all ${scrolled? 'backdrop-blur-sm bg-black/60 shadow-lg':''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
        <a className="flex items-center gap-3" href="#home">
          <img src="/assets/images/logo.svg" alt="logo" className="h-8 rounded-md" onError={(e:any)=>{ e.currentTarget.onerror = null; e.currentTarget.src = '/assets/images/logo.png' }} />
          <span className="font-bold text-white">Megaladon Hosting</span>
        </a>

        <nav className="ml-6 hidden md:flex gap-3 items-center">
          {links.map(l => (
            <a key={l.href}
               href={l.href}
               className={`px-3 py-2 rounded-md text-sm font-medium ${active===l.href? 'bg-gradient-to-r from-accent to-teal text-[#021018]':''}`}
               onClick={(e)=>{ e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({behavior:'smooth'}) }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a href="#hosting-plans" onClick={(e)=>{ e.preventDefault(); document.querySelector('#hosting-plans')?.scrollIntoView({behavior:'smooth'}) }} className="px-3 py-2 bg-gradient-to-r from-accent to-teal rounded-md font-semibold text-black">Get Hosting</a>
          <button aria-label="Toggle menu" aria-controls="mobile-menu" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden p-2 border rounded-md">{menuOpen? '✕':'☰'}</button>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-[#031018]/95 backdrop-blur-sm shadow-lg z-40">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
              {links.map(l=> (
                <a key={l.href} href={l.href} onClick={(e)=>{ e.preventDefault(); setMenuOpen(false); document.querySelector(l.href)?.scrollIntoView({behavior:'smooth'}) }} className={`px-3 py-3 rounded-md text-sm font-medium ${active===l.href? 'bg-gradient-to-r from-accent to-teal text-[#021018]':''}`}>{l.label}</a>
              ))}
              <a href="#hosting-plans" onClick={(e)=>{ e.preventDefault(); setMenuOpen(false); document.querySelector('#hosting-plans')?.scrollIntoView({behavior:'smooth'}) }} className="px-3 py-3 rounded-md text-sm font-semibold bg-gradient-to-r from-accent to-teal text-black">Get Hosting</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
