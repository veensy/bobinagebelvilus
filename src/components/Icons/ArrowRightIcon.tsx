import React from 'react';
import { Svg } from './Svg';

export const ArrowRightIcon = ({ primaryColor = '#937278', ...props }) => {
  return (
    <Svg optimizationId='iconArrowRight' viewBox='0 0 20 20' {...props}>
      <path fill={primaryColor} d='M11 16.5V13H3V7h8V3.5l6.5 6.5-6.5 6.5z' />
    </Svg>
  );
};
ArrowRightIcon.displayName = 'ArrowRightIcon';

export default ArrowRightIcon;
