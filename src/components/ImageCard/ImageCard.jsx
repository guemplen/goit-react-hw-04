import styles from './imageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
