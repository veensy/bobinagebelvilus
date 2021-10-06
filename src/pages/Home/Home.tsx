import { Card } from '../../components/Card/Card';
import { Advertising } from '../../components/Advertising/Advertising';
import moteur from '../../assets/catalogue/img_1.jpeg';
import bobinage from '../../assets/catalogue/img_5.jpeg';

import styles from './Home.module.scss';
import { SOCIÉTÉ, CATALOGUE, EXPERTISE } from '../../components/Nav/constants';
import { COMPANY_TEXT } from '../Company/constants';
import { EXPERTISE_TEXT } from '../Expertise/constants';
import { CATALOGUE_TEXT } from '../Catalogue/constants';

interface HomeInt {
  onClick?: (arg0: string) => void;
}

export const Home = ({ onClick }: HomeInt) => {
  const catalogueImg = {
    url: moteur,
    alt: 'moteur',
  };
  const bobinageImg = {
    url: bobinage,
    alt: 'bobinage',
  };
  const readMore = `EN SAVOIR PLUS  >`;
  const cards = [
    { header: SOCIÉTÉ, text: COMPANY_TEXT, readMore, },
    { header: CATALOGUE, text: CATALOGUE_TEXT, image: catalogueImg, readMore },
    { header: EXPERTISE, text: EXPERTISE_TEXT, image: bobinageImg, readMore },
  ];

  return (
    <>
      <Advertising />
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
    </>
  );
};
