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
    // Use `sticky` so the header remains in the document flow and only pins to the top
    // when the page scrolls — this is less intrusive than `fixed` and avoids content
    // being overlapped. Keep the existing scrolled effects for background & blur.
    <header className={`sticky top-0 w-full z-50 transition-all ${scrolled? 'backdrop-blur-sm bg-black/60 shadow-lg':''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
        <a className="flex items-center gap-3" href="#home">
          <img src="/assets/images/shark.jpg" alt="logo" className="h-8 rounded-md" />
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
          <button className="md:hidden p-2 border rounded-md">☰</button>
        </div>
      </div>
    </header>
  )
}
