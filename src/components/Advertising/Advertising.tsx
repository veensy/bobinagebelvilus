import { ArrowRightIcon } from '../Icons/ArrowRightIcon';

import styles from './Advertising.module.scss';

export const Advertising = () => (
  <section className={styles.advertisingContainer}>
    <div className={styles.advertising}>
      <h1 className={styles.brandName}>BOBINAGE BELVILUS</h1>
      <div className={styles.listAndContact}>
        <ul className={styles.listing}>
          <li>
            Bobinage de moteurs electriques <ArrowRightIcon />
          </li>
          <li>Maintenance industrielle</li>
          <li>Pompes et Compresseurs</li>
          <li>Groupes électrogènes</li>
        </ul>
        <div className={styles.contact}>
          <h4>Tél.Fax</h4>
          <h4>0590 25.24.01</h4>
          <p>0690 471.410-0690 670.665</p>
        </div>
      </div>
    </div>
  </section>
);
