import { COMPANY_TEXT } from './constants';
import { ElectricMotorIcon } from '../../components/Icons/ElectricMotorIcon';

import styles from './Company.module.scss';

export const Company = () => {
  return (
    <section className={styles.company}>
      <ElectricMotorIcon />
      <h2>BOBINAGE BELVILUS</h2>

      <p>{COMPANY_TEXT}</p>
      <p>
        Dotée d'équipements de haute technologie, la société BOBINAGE BELVILUS
        répond à tous les besoins de réparations de moteurs électriques,
        bobinage industriel, réparations de pompes et groupes électrogènes.
      </p>
      <span className={styles.divider}/>
      <p>Notre excellence à votre service</p>
    </section>
  );
};
