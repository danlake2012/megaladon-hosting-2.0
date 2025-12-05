"use client"
import { useEffect } from 'react'

export default function ClientEnhance(){
  useEffect(()=>{
    var revealTargets = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, {threshold: 0.12});
    revealTargets.forEach(function(r){ observer.observe(r); });
    return ()=> observer.disconnect();
  },[])
  return null;
}
