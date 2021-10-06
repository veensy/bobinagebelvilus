import { Card } from '../../components/Card/Card';
import about from '../../assets/pancarte.png';

import styles from './Home.module.scss';
import { SOCIÉTÉ, CATALOGUE, EXPERTISE } from '../../components/Nav/constants';
import { COMPANY_TEXT } from '../Company/constants';
import { EXPERTISE_TEXT } from '../Expertise/constants'
import { CATALOGUE_TEXT } from '../Catalogue/constants'

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
    { header: CATALOGUE, text: CATALOGUE_TEXT, image, readMore },
    { header: EXPERTISE, text: EXPERTISE_TEXT, image, readMore },
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
          key={`home-${header}`}
        />
      ))}
    </div>
  );
};
