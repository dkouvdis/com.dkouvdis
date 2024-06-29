import React from 'react'

const Card = () => (
  <section className="card mx-auto">
    <div className="bg-white my-6 py-4 p-3 border border-gray-300 rounded-lg">
      <header>
        <img
          className="rounded-full h-32 w-32 border border-gray-300 overflow-hidden p-1 mx-auto"
          src="/avatar.jpg"
          alt=""
        />
        <h1 className="text-center mt-2 text-2xl font-semibold">
          Dimitri Kouvdis
        </h1>
      </header>

      <hr className="w-32 my-3 mx-auto border border-gray-300 bg-gray-300" />

      <article className="p-2 text-sm leading-normal text-gray-700">
        <p className="mb-2">I'm a Full-Stack Developer based in London.</p>
        <p className="mb-2">
          I specialise in producing high-quality interfaces for client-side web
          applications in HTML5, CSS3 and Javascript.
        </p>
      </article>
    </div>
  </section>
)

export default Card
