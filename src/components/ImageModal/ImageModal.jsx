import Modal from 'react-modal';
import styles from './imageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.imageModal}
      overlayClassName={styles.imageModalOverlay}
    >
      <div className={styles.imageModalContent}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
