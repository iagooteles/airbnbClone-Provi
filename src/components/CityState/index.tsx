import styles from './styles.module.scss';

export function CityState() {

  return (
    <>
      <p className={styles.cityStateTitle}>Inspiration for future getaways</p>

      <div className={styles.destinationContainer}>
        <div className={styles.destination}>
          <button className={styles.destinationBtn}>Destinations for arts & culture</button>
        </div>
        <div className={styles.destination}>
          <button className={styles.destinationBtn}>Destinations for outdoor adventure</button>
        </div>
      </div>

      <hr className={styles.cityStateHr} />
      
      <div className={styles.cityStateOptionContainer}>
        <div className={styles.cityState}>
          <p className={styles.cityOption}>Phoenix</p>
          <p className={styles.stateOption}>Arizona</p>
          <p className={styles.cityOption}>San Francisco</p>
          <p className={styles.stateOption}>California</p>
          <p className={styles.cityOption}>Keswick</p>
          <p className={styles.stateOption}>England</p>
          <p className={styles.cityOption}>Dublin</p>
          <p className={styles.stateOption}>Ireland</p>
          <p className={styles.cityOption}>Duluth</p>
          <p className={styles.stateOption}>Minnesota</p>
          <p className={styles.cityOption}>Keswick</p>
          <p className={styles.stateOption}>England</p>
          <p className={styles.cityOption}>Dublin</p>
          <p className={styles.stateOption}>Ireland</p>
          <p className={styles.cityOption}>Duluth</p>
          <p className={styles.stateOption}>Minnesota</p>
        </div>

        <div className={styles.cityState}>
          <p className={styles.cityOption}>Phoenix</p>
          <p className={styles.stateOption}>Arizona</p>
          <p className={styles.cityOption}>San Francisco</p>
          <p className={styles.stateOption}>Ireland</p>
          <p className={styles.cityOption}>Duluth</p>
          <p className={styles.stateOption}>Minnesota</p>
          <p className={styles.cityOption}>Dublin</p>
          <p className={styles.stateOption}>Ireland</p>
          <p className={styles.cityOption}>Duluth</p>
          <p className={styles.stateOption}>Minnesota</p>
        </div>

        <div className={styles.cityState}>
          <p className={styles.cityOption}>Phoenix</p>
          <p className={styles.stateOption}>Arizona</p>
          <p className={styles.cityOption}>San Francisco</p>
          <p className={styles.stateOption}>California</p>
          <p className={styles.cityOption}>Keswick</p>
          <p className={styles.stateOption}>England</p>
          <p className={styles.cityOption}>Dublin</p>
          <p className={styles.stateOption}>Ireland</p>
          <p className={styles.cityOption}>Duluth</p>
          <p className={styles.stateOption}>Minnesota</p>          
          <p className={styles.cityOption}>Dublin</p>
          <p className={styles.stateOption}>Ireland</p>
          <p className={styles.cityOption}>Duluth</p>
          <p className={styles.stateOption}>Minnesota</p>
        </div>

        <div className={styles.cityState}>
          <p className={styles.cityOption}>Phoenix</p>
          <p className={styles.stateOption}>Arizona</p>
          <p className={styles.cityOption}>San Francisco</p>
          <p className={styles.stateOption}>California</p>
          <p className={styles.cityOption}>Keswick</p>
          <p className={styles.stateOption}>England</p>
          <p className={styles.cityOption}>Dublin</p>
          <p className={styles.stateOption}>Ireland</p>
          <p className={styles.cityOption}>Duluth</p>
          <p className={styles.stateOption}>Minnesota</p>
        </div>
      </div>
    </>
  )
}