import '../public/styles/main.scss'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../redux/store'
import React from 'react'

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <title>Manual - Questionnaire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='app' id="app">
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default App
