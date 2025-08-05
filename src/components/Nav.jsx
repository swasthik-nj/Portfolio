import React from 'react'

export default function Nav({ onNavClick }) {
  return (
    <nav className="flex gap-4 p-4">
      <button onClick={() => onNavClick('about')} className='cursor-pointer'>About</button>
      <button onClick={() => onNavClick('resume')} className='cursor-pointer'>Resume</button>
      <button onClick={() => onNavClick('projects')} className='cursor-pointer'>Projects</button>
    </nav>
  )
}
