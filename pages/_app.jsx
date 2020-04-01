import React from 'react'
import Head from 'next/head'

import '../styles/_app.scss'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        rel='stylesheet'
        href='https://pro.fontawesome.com/releases/v5.12.1/css/all.css'
        integrity='sha384-TxKWSXbsweFt0o2WqfkfJRRNVaPdzXJ/YLqgStggBVRREXkwU7OKz+xXtqOU4u8+'
        crossOrigin='anonymous'
      />
      <link
        ref='stylesheet'
        href='https://fonts.googleapis.com/css?family=Inter:300,400,600,700&display=swap'
      />
    </Head>
    <Component
      {...pageProps}
    />
  </>
)

export default App
