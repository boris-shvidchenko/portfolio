// Components
import Head from 'next/head'; 

// Hooks
import { createContext, useEffect, useState } from 'react';

// Styles
import '../styles/globals.css';

// Context
export const Context = createContext();

export default function MyApp({ Component, pageProps }) {
  
  // State
  const [modal, setModal] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [mobileView, setMobileView] = useState({width: 'undefined'});
  const [formData, setFormData] = useState({fullName: '', email: '', message: ''});
  const [confirmFormData, setConfirmFormData] = useState(true);

  // Sets the mobileView state width property to the current browser width. This is used in order to render components based on where mobile view is used or not
  // The code in the useEffect hook was referenced from the following source: https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setMobileView({
          width: window.innerWidth
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); 

  return (
    <Context.Provider value={{ modal, setModal, darkTheme, setDarkTheme, mobileView, formData, setFormData, confirmFormData, setConfirmFormData }}>
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
