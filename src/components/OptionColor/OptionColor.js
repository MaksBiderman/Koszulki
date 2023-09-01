import PropTypes from 'prop-types';
import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = ({ colorOption, currentColor, setCurrentColor, prepareColorClassName }) => {

  return (
    <li key={colorOption}>
      <button
        type="button"
        className={clsx(
          styles.choice,
          prepareColorClassName(colorOption),
          { [styles.active]: colorOption === currentColor }
        )}
        onClick={() => {
          setCurrentColor(colorOption);
          console.log(colorOption, currentColor);
        }} />
    </li>
  );
};

OptionColor.propTypes = {
  colorOption: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
};

export default OptionColor;