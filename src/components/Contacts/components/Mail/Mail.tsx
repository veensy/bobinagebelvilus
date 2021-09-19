import MailIcon from '../../../Icons/MailIcon';
import styles from './Mail.module.scss';

interface MailInt {
  primaryColor?: string;
  secondaryColor?: string;
}

const addressMail = 'jimmybelvilus@gmail.com';

export const Mail = ({ primaryColor, secondaryColor }: MailInt) => (
  <div className={styles.mail}>
    <MailIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />
    <div className={styles.mailLabelAndText}>
      <span className={styles.mailLabel}>Email</span>
      <a href={`mailto:${addressMail}`} className={styles.mailText}>
        {addressMail}
      </a>
    </div>
  </div>
);
