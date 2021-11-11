import styles from './styles.module.scss';
import { SiAirbnb } from 'react-icons/Si';
import { BurguerMenu } from '../BurguerMenu';
import { FiGlobe } from 'react-icons/Fi';

export function Header() {
  return (
    <>
      <div className={styles.shadow}>
        <div className={styles.container}>

          <div className={styles.logo}>

            <a href="#" className={styles.logoLink}>
              < SiAirbnb size={32} />
              <p className={styles.logoAirbnb}>airbnb</p>
            </a>
          </div>

          <div className={styles.middleOptions}> 
            <a className={styles.headerOptions} href="#">Places to stay</a>
            <a className={styles.headerOptions} href="#">Experiences</a>
            <a className={styles.headerOptions} href="#">Online Experiences</a>
          </div>

          <div className={styles.endOptions}>
            <a className={styles.headerOptionsHost} href="#">Become a Host</a>

            <FiGlobe className={styles.headerIconGlobe} />

            <BurguerMenu />
          </div>
        </div>
      </div>
    </>
  )
}