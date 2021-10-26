import React from 'react'

import Grid from './Grid'

export const Intro = () => (
  <div
    className="sm:flex sm:justify-center sm:items-center mt-10 mb-20 mx-auto"
    aria-hidden="true"
  >
    <img
      alt="Avatar of Dimitri"
      src="/images/avatar.jpg"
      className="h-48 w-48 mx-auto sm:m-0 rounded-full overflow-hidden"
    />

    <div className="sm:ml-10">
      <h1 className="mt-5 sm:mt-0 text-center text-4xl font-semibold">
        Dimitri Kouvdis
      </h1>
      <h2 className="text-center">Full-stack Developer</h2>
      <hr className="h-1 w-32 my-2 mx-auto border border-gray-600 bg-gray-600" />
    </div>
  </div>
)

export const IntroLong = () => (
  <Grid title="In Brief">
    <article>
      <p className="mb-2">
        I'm Dimitri, a developer passionate about people, places, food and
        culture.
      </p>
      <p>
        My primary focus is producing high-quality interfaces for client-side
        web applications.
      </p>
    </article>
  </Grid>
)
