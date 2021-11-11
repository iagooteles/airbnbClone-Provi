import React from 'react';
import { Banner } from '../Banner';
import { CardContainer } from '../CardContainer';
import { CityState } from '../CityState';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { MiniCardContainer } from '../MiniCardContainer';
import { Title } from '../Title';

import styles from './styles.module.scss';

export function MainPage() {
  return (
    <>

      <Hero />

      <main className={styles.contentWrapper}>
        <Title text={'Explore nearby'} />

        <MiniCardContainer />

        <Title text={'Live anywhere'} />

        <CardContainer />

        <Banner />

        <CityState />


      </main>

      <Footer />



      
    </>
  )
}