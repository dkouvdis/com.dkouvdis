import React from 'react'

import Grid from './Grid'

import careers from '../data/career'

const Career = ({ career }) => (
  <li className="mt-6">
    <div className="pl-4 flex items-center">
      <img
        className="w-10 mr-4 my-2"
        src={`/images/companies/${career.name}.svg`}
        alt=""
      />

      <div>
        {career.company ? (
          <p className="text-2xl pb-2 leading-none">{career.company}</p>
        ) : null}

        {career?.date ? (
          <p className="text-sm mb-1">
            <img
              className="w-5 h-5 mr-1 inline-block"
              src="/images/icons/calendar.svg"
              alt="Date worked at"
            />
            {career.date[0]}
            {career?.date[1] ? ` - ${career?.date[1]}` : null}
          </p>
        ) : null}

        {career.location ? (
          <p className="text-sm mb-1">
            <img
              className="w-5 h-5 mr-1 inline-block"
              src="/images/icons/location.svg"
              alt="Location worked at"
            />
            {career.location}
          </p>
        ) : null}
      </div>
    </div>

    {career.outsourced ? (
      <ul className="timeline--child ml-4">
        {career.outsourced.map((c, i) => (
          <Career career={c} key={i} />
        ))}
      </ul>
    ) : null}
  </li>
)

const Timeline = () => (
  <Grid title="Experiences">
    <ul className="timeline">
      {careers.map((career, index) => (
        <Career key={index} career={career} />
      ))}
    </ul>

    <h4 className="mt-6 mb-10 font-semibold">Etc...</h4>
  </Grid>
)

export default Timeline
