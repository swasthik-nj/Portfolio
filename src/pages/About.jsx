import React from "react";

export default function About() {
  return (
    <div className="md:pt-8 nav">
      <h1 className="md:text-3xl text-3xl font-bold text-white relative inline-block md:mb-4 md:pb-5 ">
        About Me
        <span className="absolute left-0 -bottom-1 h-[6px] w-14 bg-orange-500 rounded-md"></span>
      </h1>

      <div className="pt-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
        dignissimos libero? Necessitatibus, pariatur! Unde ullam minima, dicta
        laborum corrupti placeat sit animi deserunt qui aliquam esse eum soluta
        neque ex aliquid reiciendis, similique, voluptatibus totam. Obcaecati
        ipsam ad totam non sit illum dolore, sed, velit delectus architecto sunt
        magni, adipisci cumque. Consequuntur doloremque, aspernatur facilis,
        reiciendis quam quasi dolores aliquam omnis, illum voluptatibus eum.
        Nemo totam incidunt accusantium ad impedit, molestiae dolorum culpa
        voluptate ea autem! Dolorem ratione sequi, veritatis mollitia modi
        soluta iste ipsum ipsa delectus animi quae perferendis recusandae! Quam
        porro in debitis autem quibusdam quidem, temporibus fuga.
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  <div className="border border-amber-100">Item 1</div>
  <div className="border border-amber-100">Item 2</div>
  <div className="border border-amber-100">Item 3</div>
  <div className="border border-amber-100">Item 4</div>
  <div className="border border-amber-100">Item 5</div>
</div>

      </div>
    </div>
  );
}
