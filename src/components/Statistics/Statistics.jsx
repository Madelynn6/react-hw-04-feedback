import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.box}>
    <p className={css.stats}>{`Good: ${good}`}</p>
    <p className={css.stats}>{`Neutral: ${neutral}`}</p>
    <p className={css.stats}>{`Bad: ${bad}`}</p>
    <p className={css.stats}>{`Total: ${total}`}</p>
    <p className={css.stats}>{`Positive feedback: ${positivePercentage}%`}</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
