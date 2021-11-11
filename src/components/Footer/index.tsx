import React from 'react';
import { Footer2 } from '../Footer2';

import styles from './styles.module.scss';



export function Footer() {

  return (
    <>
      <div className={styles.containerAllFooter}>
        <div className={styles.containerItens}>

          <div className={styles.content}>
            <p className={styles.type}>Support</p>
            <a href="#" className={styles.link}>Help Center</a>
            <a href="#" className={styles.link}>Safety information</a>
            <a href="#" className={styles.link}>Cancellation options</a>
            <a href="#" className={styles.link}>Our COVID-19 Response</a>
            <a href="#" className={styles.link}>Supporting people with disabilities</a>
            <a href="#" className={styles.link}>Report a neighborhood concern</a>
          </div>

          <div className={styles.content}>
            <p className={styles.type}>Community</p>
            <a href="#" className={styles.link}>Airbnb.org: disaster relief housing</a>
            <a href="#" className={styles.link}>Support Afghan refugees</a>
            <a href="#" className={styles.link}>Celebrating diversity & belonging</a>
            <a href="#" className={styles.link}>Combating discrimination</a>
          </div>

          <div className={styles.content}>
            <p className={styles.type}>Hosting</p>
            <a href="#" className={styles.link}>Try hosting</a>
            <a href="#" className={styles.link}>AirCover: protection for Hosts</a>
            <a href="#" className={styles.link}>Explore hosting resources</a>
            <a href="#" className={styles.link}>Visit our community forum</a>
            <a href="#" className={styles.link}>How to host responsibly</a>
          </div>

          <div className={styles.content}>
            <p className={styles.type}>About</p>
            <a href="#" className={styles.link}>Newsroom</a>
            <a href="#" className={styles.link}>Learn about new features</a>
            <a href="#" className={styles.link}>Letter from our founders</a>
            <a href="#" className={styles.link}>Careers</a>
            <a href="#" className={styles.link}>Investors</a>
            <a href="#" className={styles.link}>Airbnb Luxe</a>
          </div>


        </div>

        <hr className={styles.hrFooter} />


        <Footer2 />
      </div>


    </>
  )
}