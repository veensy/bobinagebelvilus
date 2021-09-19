import { useState } from 'react';
import cn from 'classnames';
import { NavList } from './components/NavList';
import { ACCUEIL, NavOptionsInt } from './constants';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { useStickNav } from './utils/stickNav';
import { NavListSmallViewport } from './components/NavListSmallViewport';

import styles from './Nav.module.scss';

interface PageToDisplay {
  pageToDisplay: (string: NavOptionsInt) => void;
  selectedPage: NavOptionsInt;
}

export const Nav = ({ pageToDisplay, selectedPage }: PageToDisplay) => {
  const [currentPage, setCurrentPage] = useState(ACCUEIL);
  const selectOptionNav = (optionSelected: NavOptionsInt) => {
    setCurrentPage(optionSelected);
    pageToDisplay(optionSelected);
  };

  const { stick } = useStickNav();

  if (selectedPage !== currentPage) {
    setCurrentPage(selectedPage);
  }
  const isSmallViewport = useMatchMedia('(max-width: 426px)');

  if (isSmallViewport) {
    return (
      <NavListSmallViewport
        selectOptionNav={selectOptionNav}
        currentPage={currentPage}
      />
    );
  }
  return (
    <nav
      className={cn(styles.nav, stick ? styles.sticky : '', 'nav')}
      id='myNav'
    >
      <NavList selectOptionNav={selectOptionNav} currentPage={currentPage} />
    </nav>
  );
};
