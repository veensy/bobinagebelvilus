import MailIcon from '../../../Icons/MailIcon';
import styles from './Mail.module.scss';

interface MailInt {
  primaryColor?: string;
  secondaryColor?: string;
}

export const Mail = ({
  primaryColor,
  secondaryColor,
}: MailInt) => (
  <div className={styles.mail}>
    <MailIcon
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    />
    <div className={styles.mailLabelAndText}>
      <span className={styles.mailLabel}>Email</span>
      <span className={styles.mailText}>Jimmybelvilus@gmail.com</span>
    </div>
  </div>
);
