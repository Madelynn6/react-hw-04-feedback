import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const total = good + neutral + bad;
    const countTotalFeedback = () => {
      return total;
    };
    const countPositiveFeedbackPercentage = () => {
      const feedback = (good / (good + neutral + bad)) * 100;
      if (good === 0) {
        return 0;
      } else {
        return feedback.toFixed(0);
      }
    };
    return (
      <div className="box">
        <div className="box1">
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleLeaveFeedback}
            />
          </Section>
        </div>
        <div className="box2">
          <Section title="Statistics">
            {total === 0 ? (
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
  }
}

export default App;
