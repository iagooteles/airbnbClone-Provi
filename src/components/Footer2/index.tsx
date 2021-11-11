import styles from './styles.module.scss';

import {FiGlobe} from 'react-icons/Fi';
import {FaFacebookF} from 'react-icons/Fa';
import {AiOutlineTwitter} from 'react-icons/Ai';
import {ImInstagram} from 'react-icons/Im';

export function Footer2() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.textFooter}>© 2021 Airbnb, Inc.</p>
          <p className={styles.textFooter}>·</p>
          <a className={styles.textFooter} href="#">Privacy</a>
          <p className={styles.textFooter}>·</p>
          <a className={styles.textFooter} href="#">Terms</a>
          <p className={styles.textFooter}>·</p>
          <a className={styles.textFooter} href="#">Sitemap</a>
        </div>
        <div className={styles.content}>
          <FiGlobe  className={styles.iconsFooter} />
          <a className={styles.textFooterEnglish} href="#">English(US)</a>
          <a className={styles.textFooterRS} href="#">R$ <span className={styles.brl}>BRL</span></a>
          <FaFacebookF  className={styles.iconsFooter} size={18} />
          <AiOutlineTwitter  className={styles.iconsFooter} size={18} />
          <ImInstagram  className={styles.iconsFooter} size={18} />
        </div>
      </div>
    </>
  )
}