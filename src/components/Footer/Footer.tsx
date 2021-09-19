import { ElectricMotorIcon } from '../Icons/ElectricMotorIcon';
import { Partners } from './Partners/Partners';
import { Customers } from './Customers/Customers';
import { COMPANY_TEXT } from '../../pages/Company/constants';
import { Location } from '../../components/Contacts/components/Location/Location';
import { PhoneNumber } from '../../components/Contacts/components/PhoneNumber/PhoneNumber';
import { Schedule } from '../../components/Contacts/components/Schedule/Schedule';
import { Mail } from '../Contacts/components/Mail/Mail';
import { NavList } from '../Nav/components/NavList';
import { NavOptionsInt } from '../Nav/constants';

import styles from './Footer.module.scss';

const WHITE = '#fff';

interface PageToDisplay {
  pageToDisplay: (string: NavOptionsInt) => void;
  selectedPage: NavOptionsInt;
}

export const Footer = ({ pageToDisplay, selectedPage }: PageToDisplay) => (
  <footer className={styles.footerContainer}>
    <Partners />
    <Customers />
    <section className={styles.footer}>
      <div className={styles.brand}>
        <h2>NOTRE ENTREPRISE</h2>
        <div className={styles.brandContainer}>
        <ElectricMotorIcon primaryColor={WHITE} width='60px' height='54px' />
        <div className={styles.brandWrapper}>
          <span className={styles.brandText}>BOBINAGE BELVILUS</span>
          <span className={styles.brandSubText}>
            Notre excellence à votre service
          </span>
        </div>
        </div>
        <p>{COMPANY_TEXT}</p>
      </div>
      <div className={styles.nav}>
        <h2>CATEGORIES</h2>
        <div className={styles.categories}>
          <NavList selectOptionNav={pageToDisplay} currentPage={selectedPage} />
        </div>
      </div>
      <div className={styles.contact}>
        <h2>CONTACT</h2>
        <div className={styles.infos}>
          <Location primaryColor={WHITE} secondaryColor={WHITE} />
          <PhoneNumber primaryColor={WHITE} secondaryColor={WHITE} />
          <Mail primaryColor={WHITE} secondaryColor={WHITE} />
          <Schedule primaryColor={WHITE} secondaryColor={WHITE} />
        </div>
      </div>
    </section>

    <p className={styles.policy}>
        © {new Date().getFullYear()} BOBINAGE BELVILUS. Tous droits réservés
      </p>
  </footer>
);
