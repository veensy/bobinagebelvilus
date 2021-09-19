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
      <span className={styles.phoneNumberText}>0590 25 24 01</span>
    </div>
  </div>
);
