import React from 'react';
import { Cards } from '../../utils/miniCards';

import styles from './styles.module.scss';
import { MiniCard } from '../MiniCard';



export function MiniCardContainer() {
  const miniCardItems = Cards.map((card) => <MiniCard city={card.city} img={card.img} />)

  return (
    <>
      {/* <div className={styles.container}>
        
        <div className={styles.content}>
          <MiniCard city="Fortaleza" img={Cards[0].img} />
        </div>
        <div className={styles.content}>
          <MiniCard city="Caponga" img={Cards[0].img} />
        </div>
        <div className={styles.content}>
          <MiniCard city="Jericoacoara" img={Cards[0].img} />
        </div>
        <div className={styles.content}>
          <MiniCard city="Pipa" img={Cards[0].img} />
        </div>

      </div>
      <div className={styles.container}>

        <div className={styles.content}>
          <MiniCard city="Pacajus" img={Cards[0].img} />
        </div>
        <div className={styles.content}>
          <MiniCard city="São benedido" img={Cards[0].img} />
        </div>
        <div className={styles.content}>
          <MiniCard city="Guaramiranga" img={Cards[0].img} />
        </div>
        <div className={styles.content}>
          <MiniCard city="Iguape" img={Cards[0].img} />
        </div>

      </div> */}

      <div className={styles.container}>
        <div className={styles.content}>
          {miniCardItems}
        </div>
      </div>


      <hr className={styles.styleSeven}></hr>
    </>
  )
}