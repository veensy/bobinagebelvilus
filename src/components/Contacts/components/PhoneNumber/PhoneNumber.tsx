import PhoneNumberIcon from '../../../Icons/PhoneNumberIcon';
import styles from './PhoneNumber.module.scss';

interface PhoneNumberInt {
  primaryColor?: string;
  secondaryColor?: string;
}

export const PhoneNumber = ({
  primaryColor,
  secondaryColor,
}: PhoneNumberInt) => (
  <div className={styles.phoneNumber}>
    <PhoneNumberIcon
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    />
    <div className={styles.phoneNumberLabelAndText}>
      <span className={styles.phoneNumberLabel}>Téléphone</span>
      <a href="tel:0590252401" className={styles.phoneNumberText}>0590 25 24 01</a>
      <a href="tel:0690670665" className={styles.phoneNumberText}>0690 67 06 65</a>
    </div>
  </div>
);
