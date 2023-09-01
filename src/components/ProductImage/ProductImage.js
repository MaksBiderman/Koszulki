import PropTypes from 'prop-types';
import styles from './ProductImage.module.scss';


const ProductImage = ({name, currentColor}) => {

  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} alt={name} src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}/>
    </div>
  );

};

ProductImage.propTypes = {
  name: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};
export default ProductImage;