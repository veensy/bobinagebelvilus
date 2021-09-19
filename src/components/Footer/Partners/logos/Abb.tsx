import React from 'react';
import { Svg } from '../../../Icons/Svg';

export const Abb = ({ primaryColor = '#FF000F', ...props }) => {
  return (
    <Svg optimizationId='iconAbb' viewBox='0 0 86.2 33' {...props}>
      <path
        fill={primaryColor}
        d='M47,33h2l0,0c6-0.3,10.2-5,10.2-10.6c0-1.9-0.4-3.8-1.3-5.3H47V33z'
      />
      <rect x='36' y='17' fill={primaryColor} width='10' height='16' />
      <path
        fill={primaryColor}
        d='M57.3,16c-1-1.4-2.4-2.5-3.9-3.3c1.8-1.3,3-3.4,3-5.7c0-3.9-3.1-7-7-7H47v16H57.3z'
      />
      <rect x='36' fill={primaryColor} width='10' height='16' />
      <path
        fill={primaryColor}
        d='M74,33h2l0,0c6-0.3,10.2-5,10.2-10.6c0-1.9-0.4-3.8-1.3-5.3H74V33z'
      />
      <rect x='63' y='17' fill={primaryColor} width='10' height='16' />
      <path
        fill={primaryColor}
        d='M84.3,16c-1-1.4-2.4-2.5-3.9-3.3c1.8-1.3,3-3.4,3-5.7c0-3.9-3.1-7-7-7H74v16H84.3z'
      />
      <rect x='63' fill={primaryColor} width='10' height='16' />
      <polygon
        fill={primaryColor}
        points='5.7,17 0,33 8.3,33 10.7,26 16,26 16,17 	'
      />
      <polygon fill={primaryColor} points='16,0 11.7,0 6,16 16,16 	' />
      <polygon
        fill={primaryColor}
        points='17,26 22.3,26 24.7,33 33,33 27.3,17 17,17 	'
      />
      <polygon fill={primaryColor} points='27,16 21.3,0 17,0 17,16 	' />
    </Svg>
  );
};
Abb.displayName = 'Abb';

export default Abb;
