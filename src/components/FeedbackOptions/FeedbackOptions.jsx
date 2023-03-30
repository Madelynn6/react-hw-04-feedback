import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.box}>
    {options.map(el => (
      <button
        className={`${css.btn} ${css[el]}`}
        key={el}
        type="button"
        name={el}
        onClick={onLeaveFeedback}
      >
        {el}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
