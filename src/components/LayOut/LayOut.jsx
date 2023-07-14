import { NavLink, Outlet } from 'react-router-dom';
import s from './layOut.module.css';

const doActive = ({ isActive }) =>
  isActive ? `${s.link} ${s.active}` : `${s.link}`;

const LayOut = () => {
  return (
    <>
      <ul className={s.nav}>
        <li className={s.item}>
          <NavLink to="/" className={doActive}>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/movies" className={doActive}>
            Movies
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default LayOut;
