// Components
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

// Context
import { Context } from './_app';

// Hooks
import { useContext } from 'react';

export default function Home() {

  // Access the application states
  const { modal } = useContext(Context);
  
  return (
    <main>
      <div>
        <Navbar />
        {modal && <Modal />}
      </div>
    </main>
  )
}
