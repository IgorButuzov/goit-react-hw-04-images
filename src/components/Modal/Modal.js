import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ toggleModal, largeImage }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      e.code === 'Escape' && toggleModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    e.currentTarget === e.target && toggleModal();
  };

    return (
      <div className={s.Overlay} onClick={handleBackdropClick}>
        <div className={s.Modal}>
          <img src={largeImage} alt="" />
        </div>
      </div>
    );
  }


export default Modal;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};