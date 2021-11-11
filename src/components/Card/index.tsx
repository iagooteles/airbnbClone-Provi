import React from 'react';
import { Cards } from '../../utils/Cards';

import styles from './styles.module.scss';

type Card ={
  img: string;
  description: string;
}

export function Card(props: Card) {
  return (
    <>
        <div className={styles.cards}>

          <img src={props.img} className={styles.cardImg}></img>
          <p className={styles.description}>{props.description}</p>
          
        </div>
    </>
  )
}