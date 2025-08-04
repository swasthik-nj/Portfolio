import React from 'react'

export default function Nav({ onNavClick }) {
  return (
    <nav className="flex gap-4 p-4">
      <button onClick={() => onNavClick('about')}>About</button>
      <button onClick={() => onNavClick('resume')}>Resume</button>
      <button onClick={() => onNavClick('projects')}>Projects</button>
    </nav>
  )
}
