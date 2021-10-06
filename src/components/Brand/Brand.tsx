import { ElectricMotorIcon } from '../Icons/ElectricMotorIcon';

import styles from './Brand.module.scss';

export const Brand = () => (
  <div className={styles.brandWapper}>
    <ElectricMotorIcon />
    <div className={styles.brand}>
      <span className={styles.brandText}>BOBINAGE BELVILUS</span>
      <span className={styles.brandSubText}>Notre excellence à votre service</span>
    </div>
    <ul className={styles.listBrand}>
        <li>Bobinage de moteurs electriques</li>
        <li>Maintenance industrielle</li>
        <li>Pompes et Compresseurs</li>
        <li>Groupes électrogènes</li>
      </ul>
  </div>
);
