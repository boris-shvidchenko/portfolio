// Components
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import Bio from '../components/Bio';
import ProjectContainer from '../components/ProjectContainer';

// Context
import { Context } from './_app';

// Hooks
import { useContext } from 'react';


export default function Home() {

  // Access the application states
  const { modal, darkTheme, mobileView } = useContext(Context);

  return (
    <main className={` ${darkTheme ? 'bg-[#272727]' : 'bg-[#d7dee1]'} `}>
      <Navbar />
      {modal && <Modal />}
      <Bio />
      {mobileView.width <= 768 && <ProjectContainer />}
    </main>
  )
}
