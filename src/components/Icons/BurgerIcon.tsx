import React from 'react';
import { Svg } from './Svg';

export const BurgerIcon = ({ primaryColor = '#FFF', ...props }) => {
  return (
    <Svg optimizationId='iconBurger' viewBox='0 0 32 32' {...props}>
      <path
        fill={primaryColor}
        d='M30.6 7.7h-29C.6 7.7 0 6.9 0 6.1v-.8c0-.9.8-1.5 1.5-1.5h28.9c.9 0 1.5.8 1.5 1.5V6c.2.9-.6 1.7-1.3 1.7zm0 10.2h-29c-.9 0-1.5-.8-1.5-1.5v-.6c0-.9.8-1.5 1.5-1.5h28.9c.9 0 1.5.8 1.5 1.5v.6c.1.8-.7 1.5-1.4 1.5zm0 10.3h-29c-.9 0-1.5-.8-1.5-1.5V26c0-.9.8-1.5 1.5-1.5h28.9c.9 0 1.5.8 1.5 1.5v.6c.1.8-.7 1.6-1.4 1.6z'
      />
    </Svg>
  );
};
BurgerIcon.displayName = 'BurgerIcon';

export default BurgerIcon;
