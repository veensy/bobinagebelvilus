import { Header } from './components/Header/Header';
import { Company } from './pages/Company/Company';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer'
import { useState } from 'react';
import { ACCUEIL, SOCIÉTÉ, NavOptionsInt } from './components/Nav/constants';

import styles from './App.module.scss';

function App() {
  const [page, setPage] = useState(ACCUEIL);
  const pageToDisplay = (page: NavOptionsInt) => {
    setPage(page);
  };

  const selectedPage = () => {
    switch (page) {
      case ACCUEIL:
        return <Home  onClick={pageToDisplay}/>;
      case SOCIÉTÉ:
        return <Company />;

      default:
        return <Home onClick={pageToDisplay} />;
    }
  };

  return (
    <>
      <Header pageToDisplay={pageToDisplay} selectedPage={page} />
      <main id='myMain' className={styles.main}>
        {selectedPage()}
      </main>
      <Footer pageToDisplay={pageToDisplay} selectedPage={page}/>
    </>
  );
}

export default App;
