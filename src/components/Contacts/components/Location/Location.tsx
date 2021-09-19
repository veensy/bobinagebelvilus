import LocationIcon from '../../../Icons/LocationIcon';
import styles from './Location.module.scss';

interface LocationInt {
  primaryColor?: string;
  secondaryColor?: string;
}

export const Location = ({ primaryColor, secondaryColor }: LocationInt) => (
  <div className={styles.location}>
    <LocationIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />
    <div className={styles.addressLocation}>
      <span className={styles.locationLabel}>Adresse</span>
      <span className={styles.locationText}>9 rue Nobel 97122 Jarry</span>
    </div>
  </div>
);
