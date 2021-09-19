import { Card } from '../../components/Card/Card';
import { LOREM,LOREM_SHORT } from '../constant';
import about from '../../assets/pancarte.png';

import styles from './Home.module.scss';
import { SOCIÉTÉ, CATALOGUE, SERVICES } from '../../components/Nav/constants';
import { COMPANY_TEXT } from '../Company/constants';

interface HomeInt {
  onClick?: (arg0: string) => void;
}

export const Home = ({ onClick }: HomeInt) => {
  const image = {
    url: about,
    alt: 'pancarte',
  };
  const readMore = `EN SAVOIR PLUS  >`;
  const cards = [
    { header: SOCIÉTÉ, text: COMPANY_TEXT, image, readMore },
    { header: CATALOGUE, text: LOREM, image, readMore },
    { header: SERVICES, text: LOREM_SHORT, image, readMore },
  ];

  return (
    <div className={styles.cards}>
      {cards.map(({ header, text, image, readMore }) => (
        <Card
          header={header}
          text={text}
          image={image}
          readMore={readMore}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
