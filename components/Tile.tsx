import React from 'react'

type TileProps = {
  title: string
  description?: string
  icon?: React.ReactNode
  floatIcon?: React.ReactNode
  square?: boolean
  href?: string
  cta?: string
}

export default function Tile({ title, description, icon, floatIcon, square, href, cta }: TileProps){
  const Inner = (
    <div className={`tile p-6 ${square ? 'w-[250px] h-[250px] flex items-center justify-center' : ''} rounded-xl bg-[#08101a] shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 relative`}> 
      <div className="mb-3 text-xl font-bold">{icon && <span className="mr-2">{icon}</span>} {title}</div>
      {description && <p className="text-sm text-white/80 mb-4">{description}</p>}
      {cta && <div className="text-sm font-semibold text-cyan-400">{cta}</div>}
      {floatIcon && (
        <div className="absolute -top-4 -right-4 w-11 h-11 bg-[#06121A]/60 rounded-full flex items-center justify-center text-cyan-400 shadow-lg animate-float">
          {floatIcon}
        </div>
      )}
    </div>
  )

  if(href){
    return <a href={href} className="block transition-colors shark-cursor tile-glow">{Inner}</a>
  }
  return <div className="tile-glow">{Inner}</div>
}
