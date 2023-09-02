import styles from './Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  const { colors, sizes } = props;

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const price = useMemo (() =>{
    const selectedSize = sizes.find((size) => size.name === currentSize);
    if (selectedSize) {
      return props.basePrice + selectedSize.additionalPrice;
    }
    else {
      return props.basePrice;
    }
  },[currentSize, props.basePrice, sizes])



  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductOptions
          sizes={sizes}
          colors={colors}
          currentSize={currentSize}
          currentColor={currentColor}
          setCurrentSize={setCurrentSize}
          setCurrentColor={setCurrentColor}
          price={price}
        />
        <Button className={styles.button} onClick={e => {
          e.preventDefault();
          console.log('Summary');
          console.log('-----------------------------');
          console.log('Name: ' + props.name);
          console.log('Size: ' + currentSize);
          console.log('Price: ' + price);
          console.log('Color: ' + currentColor);
        }}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </div>
    </article>
  )
};
Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Product;