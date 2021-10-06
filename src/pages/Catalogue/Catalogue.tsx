import { CATALOGUE_TEXT } from './constants';
import { ElectricMotorIcon } from '../../components/Icons/ElectricMotorIcon';
import { CATALOGUE_IMG } from '../../assets/catalogue/index';

import styles from './Catalogue.module.scss';

export const Catalogue = () => {
  const zoom = (path: string) => {
    const modal = document.getElementById('myModal') as HTMLElement;
    const modalImg = document.getElementById('img01') as HTMLImageElement;
    if (modalImg && modal) {
      modal.style.display = 'block';
      modalImg.src = path;
    }
  };
  const closeModal = () => {
    const modal = document.getElementById('myModal') as HTMLElement;
    modal.style.display = 'none';
  };
  return (
    <section className={styles.catalogue}>
      <ElectricMotorIcon />
      <h2>BOBINAGE BELVILUS</h2>

      <p>{CATALOGUE_TEXT}</p>
      <div className={styles.catalogueImg}>
        {CATALOGUE_IMG.map(({ name, path }) => (
          <button
            key={`btn-${name}`}
            className={styles.imgContainer}
            onClick={() => zoom(path)}
          >
            <img
              src={path}
              alt={name}
              className={styles.img}
              id='imgCatalogue'
            />
            <ElectricMotorIcon className={styles.small} />
          </button>
        ))}
      </div>
      <div id='myModal' className={styles.modal}>
        <span className={styles.close} onClick={closeModal}>
          x
        </span>
        <div className={styles.modal_content}>
          <img id='img01' alt='img01' />
          <ElectricMotorIcon className={styles.smallZoom} />
        </div>
      </div>
      <span className={styles.divider} />
      <p>Notre excellence à votre service</p>
    </section>
  );
};
