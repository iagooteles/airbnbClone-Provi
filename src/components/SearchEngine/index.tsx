import React, { useState } from 'react';
import { BiSearch } from 'react-icons/Bi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.scss';

export function SearchEngine() {
  const [input, setInput] = useState("");

  const notify = () => toast(`Sua busca por ' ${input} ' não está disponível no momento. :(`);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.title}>Location</p>
          <input
            className={styles.inputDesc}
            placeholder="Where are you going?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
        <hr className={styles.hr} />
        <div className={styles.content}>
          <p className={styles.title}>Checkin</p>
          <input className={styles.inputDesc} placeholder="Add dates"></input>
        </div>
        <hr className={styles.hr} />
        <div className={styles.content}>
          <p className={styles.title}>Check out</p>
          <input className={styles.inputDesc} placeholder="Add dates"></input>
        </div>
        <hr className={styles.hr} />
        <div className={styles.content}>
          <p className={styles.title}>Guests</p>
          <input className={styles.inputDesc} placeholder="Add guests"></input>
        </div>

        <button
          className={styles.button}
          onClick={notify}
        >
          <BiSearch />
        </button>
        <ToastContainer />
      </div>
    </>
  )
}