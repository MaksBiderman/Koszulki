import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductOptions.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductOptions = ({ sizes, colors, currentSize, currentColor, setCurrentSize, setCurrentColor, getPrice }) => {
  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map((sizeOption) => (
            <OptionSize
              key={sizeOption.name}
              sizeOption={sizeOption}
              currentSize={currentSize}
              setCurrentSize={setCurrentSize}
            />
          ))}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map((colorOption) => (
            <OptionColor
              key={colorOption}
              colorOption={colorOption}
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
              prepareColorClassName={prepareColorClassName}
            />
          ))}
        </ul>
      </div>
    </form>
  );
};

ProductOptions.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default ProductOptions;