import { Header } from '../Header';
import { SearchEngine } from '../SearchEngine';

import styles from './styles.module.scss';

export function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <Header />
          <SearchEngine />
        </div>
      </div>
    </>
  )
}