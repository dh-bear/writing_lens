import Image from 'next/image'
import styles from './page.module.css'

import Modal from './modal';
import Form from './form';
import { useState } from 'react';


export default function Home() {
  const [isModal1Open, setIsModal1Open] = useState(true);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  // ... repeat for all modals

  const closeModal1AndOpenModal2 = () => {
    setIsModal1Open(false);
    setIsModal2Open(true);
  }

  const closeModal2AndOpenModal3 = () => {
    setIsModal2Open(false);
    setIsModal3Open(true);
  }

  // ... repeat for all modals

  return (
    <div>
      <Modal open={isModal1Open} onClose={closeModal1AndOpenModal2}>
        <Form onClose={closeModal1AndOpenModal2} />
      </Modal>

      <Modal open={isModal2Open} onClose={closeModal2AndOpenModal3}>
        <Form onClose={closeModal2AndOpenModal3} />
      </Modal>

      // ... repeat for all modals
    </div>
  );
}