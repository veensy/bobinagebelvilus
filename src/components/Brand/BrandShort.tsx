import { ElectricMotorIcon } from '../Icons/ElectricMotorIcon';

import styles from './Brand.module.scss';

export const BrandShort = () => (
  <div className={styles.brandContainer}>
    <ElectricMotorIcon width='60px' height='54px' />
    <div className={styles.brandWrapper}>
      <span className={styles.brandText}>BOBINAGE BELVILUS</span>
      <span className={styles.brandSubText}>
        Notre excellence à votre service
      </span>
    </div>
  </div>
);
