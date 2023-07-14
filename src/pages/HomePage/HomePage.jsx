import PopularFilm from 'components/PopularFilm';

import s from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={s.container}>
      <PopularFilm />
    </div>
  );
};

export default HomePage;
