import ScheduleIcon from '../../../Icons/ScheduleIcon';
import styles from './Schedule.module.scss';

interface ScheduleInt {
  primaryColor?: string;
  secondaryColor?: string;
}

export const Schedule = ({ primaryColor, secondaryColor }: ScheduleInt) => (
  <div className={styles.schedule}>
    <ScheduleIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />
    <div className={styles.scheduleLabelAndText}>
      <span className={styles.scheduleLabel}>HORAIRE D'OUVERTURE</span>
      <span className={styles.scheduleText}>
        LUN - VEN : 7:30-15:00 en continue
      </span>
    </div>
  </div>
);
