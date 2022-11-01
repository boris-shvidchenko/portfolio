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
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Context.Provider value={{ modal, setModal, darkTheme, setDarkTheme }}>
      <Head>
        <meta charSet='utf-8' />
        <meta name="description" content="Personal portfolio for Boris Shvidchenko." />
        <meta name="keywords" content="Boris Shvidchenko, Portfolio, Front End, Developer" />
        <meta name="author" content="Boris Shvidchenko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* The 3 link tags below are for/from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&family=Open+Sans:wght@300&display=swap" rel="stylesheet" />

        <title>Boris Shvidchenko</title>
      </Head>
      <Component {...pageProps} />
    </Context.Provider>
  )
}
