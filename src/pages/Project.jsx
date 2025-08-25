import React from 'react'

export default function Project() {
  return (
    <div className="md:pt-8 nav">
       <h1 className="md:text-3xl text-2xl font-bold text-white relative inline-block mb-4 pb-3 main-head">
        Projects
        <span className="absolute left-0 -bottom-1 h-[6px] w-14 bg-orange-500 rounded-md"></span>
      </h1>
      <div className='flex gap-5 justify-center flex-wrap'>
        <div className=' p-2 bg-amber-100 w-fit'>
          <div className='h-[8rem] md:w-[15rem]   w-[18rem]   bg-amber-400 rounded-md projects'>imge</div>
          <div>
            <h1>Project Title</h1>
            <p>Project Description</p>
          </div>
        </div>
        <div className=' p-2 bg-amber-100 w-fit'>
          <div className='h-[8rem] md:w-[15rem]   w-[18rem]   bg-amber-400 rounded-md projects'>imge</div>
          <div>
            <h1>Project Title</h1>
            <p>Project Description</p>
          </div>
        </div>
        <div className=' p-2 bg-amber-100 w-fit'>
          <div className='h-[8rem] md:w-[15rem]   w-[18rem]  bg-amber-400  rounded-md projects'>imge</div>
          <div>
            <h1>Project Title</h1>
            <p>Project Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}
