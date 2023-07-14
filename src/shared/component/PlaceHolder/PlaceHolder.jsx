import PropTypes from 'prop-types';
import s from './placeHolder.module.css';

function PlaceHolder({ text }) {
  return (
    <div className={s.box}>
      <h2 className={s.title}>{text}</h2>
      <img
        src="https://as1.ftcdn.net/v2/jpg/03/56/19/18/1000_F_356191845_Uf1HSScTIHcxXeK1UXuEn0rdAzMvTfxo.jpg"
        alt="something goes wrong"
        className={s.img}
      />
    </div>
  );
}

PlaceHolder.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PlaceHolder;
