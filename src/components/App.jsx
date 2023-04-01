import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [option, setOption] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = e => {
    const name = e.target.name;
    setOption(prevState => ({
      ...prevState,
      [name]: option[name] + 1,
    }));
  };

  const { good, neutral, bad } = option;

  const options = ['good', 'neutral', 'bad'];
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const feedback = (good / (good + neutral + bad)) * 100;
    if (good === 0) {
      return 0;
    } else {
      return Number(feedback.toFixed(0));
    }
  };

  return (
    <div className="box">
      <div className="box1">
        <Section title="Please leave feedback :)">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>
      </div>
      <div className="box2">
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    </div>
  );
};

export default App;
