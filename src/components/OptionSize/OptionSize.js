import PropTypes from 'prop-types';
import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = ({ sizeOption, currentSize, setCurrentSize }) => {
  return (
    <li key={sizeOption.name}>
      <button
        type='button'
        className={clsx(styles.choice, { [styles.active]: sizeOption.name === currentSize })}
        onClick={() => setCurrentSize(sizeOption.name)}>
        {sizeOption.name}
      </button>
    </li>
  );
};

OptionSize.propTypes = {
  sizeOption: PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number.isRequired,
  }).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;