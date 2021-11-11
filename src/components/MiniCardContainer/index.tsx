import { Cards } from '../../utils/miniCards';

import styles from './styles.module.scss';
import { MiniCard } from '../MiniCard';

export function MiniCardContainer() {
  const miniCardItems = Cards.map((card) => <MiniCard city={card.city} img={card.img} />)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {miniCardItems}
        </div>
      </div>

      <hr className={styles.styleSeven}></hr>
    </>
  )
}