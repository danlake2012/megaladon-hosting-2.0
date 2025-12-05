import React from 'react'

type TileProps = {
  title: string
  description?: string
  icon?: React.ReactNode
  href?: string
  cta?: string
}

export default function Tile({ title, description, icon, href, cta }: TileProps){
  const Inner = (
    <div className="p-6 rounded-xl bg-[#08101a] border border-white/5 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3"> 
      <div className="mb-3 text-xl font-bold">{icon && <span className="mr-2">{icon}</span>} {title}</div>
      {description && <p className="text-sm text-white/80 mb-4">{description}</p>}
      {cta && <div className="text-sm font-semibold text-cyan-400">{cta}</div>}
    </div>
  )

  if(href){
    return <a href={href} className="tile">{Inner}</a>
  }
  return <div className="tile">{Inner}</div>
}
