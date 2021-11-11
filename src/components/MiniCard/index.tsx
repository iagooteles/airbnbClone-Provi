import styles from './styles.module.scss';

type MiniCard ={
  img: string;
  city: string;
  time?: string;
}

export function MiniCard(props: MiniCard) {
  return (
    <>
        <div className={styles.cards}>

          <img src={props.img} className={styles.cardImg}></img>
          <p className={styles.city}>{props.city}</p>
          
        </div>
    </>
  )
}