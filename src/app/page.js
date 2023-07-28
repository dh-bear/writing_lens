"use client";
import { useState } from 'react';
//import Image from 'next/image'
//import styles from './page.module.css'
import Modal from './modal';
import Form from './form';

export default function Page() {
  /*const [isModal1Open, setIsModal1Open] = useState(true);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [isModal5Open, setIsModal5Open] = useState(false);
  

  const closeModal1AndOpenModal2 = () => {
    setIsModal1Open(false);
    setIsModal2Open(true);
  }

  const closeModal2AndOpenModal3 = () => {
    setIsModal2Open(false);
    setIsModal3Open(true);
  }

  const closeModal3AndOpenModal4 = () => {
    setIsModal3Open(false);
    setIsModal4Open(true);
  }

  const closeModal4AndOpenModal5 = () => {
    setIsModal4Open(false);
    setIsModal5Open(true);
  }

  const closeModal5 = () => {
    setIsModal5Open(false);
  }
  */

  return (
    <div>
      <Modal>
        <Form />
      </Modal>
    </div>
  );
}