// Components
import Head from 'next/head'; 
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

// Hooks
import { createContext, useState } from 'react';

// Context
export const Context = createContext();

export default function Home() {
  
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
      <main>
        <Navbar />
        {modal && <Modal />}
      </main>
    </Context.Provider>
  )
}
