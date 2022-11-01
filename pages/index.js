// Components
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import Bio from '../components/Bio';

// Context
import { Context } from './_app';

// Hooks
import { useContext } from 'react';

export default function Home() {

  // Access the application states
  const { modal, darkTheme } = useContext(Context);
  
  return (
    <main className={` ${darkTheme ? 'bg-[#272727]' : 'bg-[#d7dee1]'} `}>
      <Navbar />
      {modal && <Modal />}
      <Bio />

      {/* Import Projects and Contact (1 container component for project + contact pages ) Components here for mobile */}

    </main>
  )
}
