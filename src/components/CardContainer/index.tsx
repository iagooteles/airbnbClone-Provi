import { Cards } from '../../utils/Cards';

import styles from './styles.module.scss';
import { Card } from '../Card';

export function CardContainer() {
  const cardItems = Cards.map((card) => <Card description={card.description} img={card.img} />)

  return (
    <>
      <div className={styles.container}>

      <div className={styles.content}>
        {cardItems}
      </div>

      </div>


    </>
  )
}