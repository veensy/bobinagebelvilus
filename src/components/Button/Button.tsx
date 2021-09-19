import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';
import { ButtonTypeInt, IconPositionInt, LEFT } from './constants';

interface ButtonInt {
  type: ButtonTypeInt;
  className?: string;
  onClick: () => void;
  position?: IconPositionInt;
}
export const Button: FC<ButtonInt> = ({
  type,
  children,
  className,
  onClick,
  position = LEFT,
  ...restProps
}) => (
  <button
    onClick={onClick}
    {...restProps}
    className={cn(
      styles[type],
      styles[position],
      styles.commonButtonType,
      className
    )}
  >
    {children}
  </button>
);
