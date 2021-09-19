export const BUTTON_TYPE = { LINK: 'link', BUTTON: 'button', ICON: 'icon' };
export type ButtonTypeInt =
  | typeof BUTTON_TYPE.BUTTON
  | typeof BUTTON_TYPE.LINK
  | typeof BUTTON_TYPE.ICON;

export const LEFT: string = 'left';
export const CENTER: string = 'center';
export const RIGHT: string = 'right';

export type IconPositionInt = typeof LEFT | typeof CENTER | typeof RIGHT;
