import React from 'react'
import Head from 'next/head'
import App from 'next/app'

import '../css/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Dimitri Kouvdis - Front-end | Full-stack Developer</title>
          <meta
            name="description"
            content="My primary focus is producing high-quality interfaces for client-side web applications."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
