import { Button } from '../../Button/Button';
import { BUTTON_TYPE } from '../../Button/constants';
import { NavOptionsInt } from '../constants';
import { NAV_OPTIONS } from '../constants';

import styles from '../Nav.module.scss';

interface NavOptions {
  selectOptionNav: (option: NavOptionsInt) => void;
  currentPage: NavOptionsInt;
}

export const NavList = ({ selectOptionNav, currentPage }: NavOptions) => {
  return (
    <>
      {NAV_OPTIONS.map((option) => {
        return (
          <Button
            onClick={() => selectOptionNav(option)}
            type={BUTTON_TYPE.LINK}
            key={`${option}-id`}
            className={option === currentPage ? styles.active : ''}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
};
