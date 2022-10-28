// Components
import Head from 'next/head'; 

// Hooks
import { createContext, useState } from 'react';

// Styles
import '../styles/globals.css';

// Context
export const Context = createContext();

export default function MyApp({ Component, pageProps }) {
  
  // State
  const [modal, setModal] = useState(false);

  return (
    <Context.Provider value={{ modal, setModal }}>
      <Head>
        <meta charSet='utf-8' />
        <meta name="description" content="Personal portfolio for Boris Shvidchenko." />
        <meta name="keywords" content="Boris Shvidchenko, Portfolio, Front End, Developer" />
        <meta name="author" content="Boris Shvidchenko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <title>Boris Shvidchenko</title>
      </Head>
      <Component {...pageProps} />
    </Context.Provider>
  )
}
