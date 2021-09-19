import { useState } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { Button } from '../../Button/Button';
import { BUTTON_TYPE, RIGHT } from '../../Button/constants';
import { BurgerIcon } from '../../Icons/BurgerIcon';
import { CloseIcon } from '../../Icons/CloseIcon';
import { NavList } from './NavList';
import { NavOptionsInt } from '../constants';

import styles from '../Nav.module.scss';

interface NavOptions {
  selectOptionNav: (option: NavOptionsInt) => void;
  currentPage: NavOptionsInt;
}

export const NavListSmallViewport = ({
  selectOptionNav,
  currentPage,
}: NavOptions) => {
  const [showNavList, setShowNavList] = useState(false);
  const [closeNav, setCloseNav] = useState(false);
  const container = document.getElementById('root');

  const optionSelect = (option: NavOptionsInt) => {
    closeNavList();
    selectOptionNav(option);
  };

  const closeNavList = () => {
    setCloseNav(true);
    setTimeout(() => {
      setShowNavList(false);
      setCloseNav(false);
    }, 2500);
  };

  const navlist = () => {
    if (container && showNavList)
      return ReactDOM.createPortal(
        <div
          className={cn(
            styles.nav,
            showNavList ? styles.open : '',
            closeNav ? styles.close : ''
          )}
        >
          <Button
            className={styles.closeButton}
            onClick={() => closeNavList()}
            type={BUTTON_TYPE.ICON}
            position={RIGHT}
          >
            <CloseIcon />
          </Button>
          <NavList selectOptionNav={optionSelect} currentPage={currentPage} />
        </div>,
        document.body
      );
  };
  return (
    <nav>
      <Button
        className={styles.burgerButton}
        onClick={() => setShowNavList(true)}
        type={BUTTON_TYPE.ICON}
      >
        <BurgerIcon />
      </Button>
      {navlist()}
    </nav>
  );
};
