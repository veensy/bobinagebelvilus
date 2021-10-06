import { EXPERTISE_TEXT, STEP_LISTING } from './constants';
import { ElectricMotorIcon } from '../../components/Icons/ElectricMotorIcon';

import styles from './Expertise.module.scss';

export const Expertise = () => {
  return (
    <section className={styles.expertise}>
      <ElectricMotorIcon />
      <h2>BOBINAGE BELVILUS</h2>

      <p>{EXPERTISE_TEXT}</p>
      <h4>Notre expertise comprend :</h4>
      <ul className={styles.list}>
        <li>Le contrôle visuel, électrique et mécanique du moteur.</li>
        <br />
        <li>Le test électrique statique :</li>
        <br />
        <ul>
          <li>Contrôle de l'isolement</li>
          <li>Contrôle des valeurs ohmiques</li>
          <li>Contrôle de la rigidité diélectrique</li>
        </ul>
      </ul>
      <p>
        En général, les étapes de réparations sont les suivantes mais peuvent
        varier en fonction du type et de l'état du moteur :
      </p>
      <ul className={styles.list}>
        {STEP_LISTING.map((step) => (
          <li key={`step-${step}`}>{step}</li>
        ))}
      </ul>
      <span className={styles.divider} />
      <p>Notre excellence à votre service</p>
    </section>
  );
};
