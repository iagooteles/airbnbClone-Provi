import styles from './styles.module.scss';

type Text ={
  text: string;
}

export function Title(props: Text) {
  return (
    <>
      <div className={styles.text}>
        <p>{props.text}</p>
      </div>
    </>
  )
}