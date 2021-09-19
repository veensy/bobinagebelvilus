import styles from './Partners.module.scss';
import { LeroySomer } from './logos/LeroySomer';
import { SewUsocome } from './logos/SewUsocome';
import { Abb } from './logos/Abb';
import {BartecVarnost} from './logos/BartecVarnost';

export const Partners = () => (
  <section className={styles.partners}>
    <h2 className={styles.title}>NOS PARTENAIRES</h2>
    <div className={styles.logos}>
      <LeroySomer width='172px' height='48px' />
      <SewUsocome width='172px' height='48px' />
      <Abb width='172px' height='48px' />
      <BartecVarnost width='372px' height='48px' />
    </div>
  </section>
);
