import React from 'react';
import { Svg } from './Svg';

export const CloseIcon = ({
  primaryColor = '#fff',
  secondaryColor = '#388dc5',
  ...props
}) => {
  return (
    <Svg optimizationId='iconClose' viewBox='0 0 32 32' {...props}>
      <path
        fill={primaryColor}
        d='M15.9 14.4858l8.1929-8.193c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L17.3142 15.9l8.393 8.3929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0L15.9 17.3142l-8.3929 8.393c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143L14.4858 15.9l-8.193-8.1929c-.3904-.3905-.3904-1.0237 0-1.4142.3906-.3905 1.0238-.3905 1.4143 0L15.9 14.4858z'
      />
    </Svg>
  );
};
CloseIcon.displayName = 'CloseIcon';

export default CloseIcon;
