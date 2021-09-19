import { Brand } from '../Brand/Brand';
import { Contacts } from '../Contacts/Contacts';
import { NavOptionsInt } from '../Nav/constants';
import { Nav } from '../Nav/Nav';

import styles from './Header.module.scss';

interface PageToDisplay {
  pageToDisplay: (string: NavOptionsInt) => void;
  selectedPage:NavOptionsInt
}

export const Header = ({ pageToDisplay, selectedPage }: PageToDisplay) => {
  return (
    <header>
      <div className={styles.preHeader}>
        <Brand />
        <Contacts />
      </div>
      <Nav pageToDisplay={pageToDisplay} selectedPage={selectedPage} />
    </header>
  );
};
