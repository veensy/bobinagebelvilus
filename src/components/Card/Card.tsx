import { Button } from '../Button/Button';
import { BUTTON_TYPE } from '../Button/constants';

import styles from './Card.module.scss';

interface CardInt {
  header: string;
  image?: { url: string; alt: string };
  text: string;
  readMore?: string;
  onClick?: (arg0: string) => void;
}
export const Card = ({ header, image, text, readMore, onClick }: CardInt) => (
  <div className={styles.card}>
    {image?.url && <img src={image.url} alt={image.alt} />}
    {header && (
      <>
        <h2>{header}</h2>
        <span className={styles.divider} />
      </>
    )}
    <p className={styles.text}>{text}</p>
    {readMore && onClick && (
      <Button
        onClick={() => onClick(header)}
        type={BUTTON_TYPE.BUTTON}
        className={styles.button}
      >
        {readMore}
      </Button>
    )}
  </div>
);
