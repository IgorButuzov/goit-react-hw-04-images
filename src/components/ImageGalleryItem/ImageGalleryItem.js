import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, index, openModal }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItem__image}
        src={webformatURL}
        onClick={() => openModal(index)}
        alt=""
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
