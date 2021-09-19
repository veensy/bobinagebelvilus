import { Edf } from './logos/Edf';
import { EauxExcellence } from './logos/EauxExcellence';
import { Eiffage } from './logos/Eiffage';
import Frigotech from './logos/Frigotech.jpeg';
import Gem from './logos/Gem.jpeg';
import Renoc from './logos/Renoc.png';

import styles from './Customers.module.scss';

export const Customers = () => (
  <section className={styles.customers}>
    <h2 className={styles.title}>NOS CLIENTS</h2>
    <div className={styles.logos}>
      <Edf width='172px' height='62px' />
      <Eiffage width='172px' height='62px' />
      <EauxExcellence width='172px' height='62px' />
      <img src={Frigotech} className={styles.img} alt='Frigotech logo' />
      <img src={Gem} className={styles.img} alt='Gem logo' />
      <img src={Renoc} className={styles.img} alt='Renoc logo' />
    </div>
  </section>
);
