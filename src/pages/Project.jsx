import React from 'react'
import { projects } from '../projects'

export default function Project() {
  return (
    <div className="md:pt-8 nav">
       <h1 className="md:text-3xl text-2xl font-bold text-white relative inline-block mb-4 pb-3 main-head">
        Projects
        <span className="absolute left-0 -bottom-1 h-[6px] w-14 bg-orange-500 rounded-md"></span>
      </h1>
      <div  className='flex gap-5 justify-center flex-wrap'>
      {projects.map((project, index) => (
        <div key={index} className='flex p-2 bg-amber-100 w-fit'>
          <div>
            <div className='flex justify-center items-center'>
            <img src={project.imageUrl} alt="" srcset="" className='h-[8rem] w-[15rem]    rounded-md projects'/>
          </div>
          <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
