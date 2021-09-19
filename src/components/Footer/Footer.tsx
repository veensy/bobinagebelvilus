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
      <div className={styles.iframe}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.6349760652756!2d-61.567548685139315!3d16.23919498877611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c13450891cdffcf%3A0x73c6b108ff55c964!2sBobinage%20Belvilus!5e0!3m2!1sfr!2sfr!4v1632083742370!5m2!1sfr!2sfr'
          
          height='300'
          allowFullScreen
          loading='lazy'
          title='bobinage belvilus location'
        />
      </div>
    </section>

    <p className={styles.policy}>
      © {new Date().getFullYear()} BOBINAGE BELVILUS. Tous droits réservés
    </p>
  </footer>
);
