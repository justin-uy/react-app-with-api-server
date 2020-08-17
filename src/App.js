import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentQuestion: null,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/next-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          currentQuestion: data,
        });
      });
  }
  render() {
    const { currentQuestion } = this.state;
    if (!currentQuestion) {
      return null;
    }

    return (
      <div className="App">
        <div style={{ fontWeight: "bold" }}>{currentQuestion.question}</div>
        {
          currentQuestion.answers.map(
            (answer, idx) =>
              <div key={'answer-option-' + idx}>
                <input type="radio" /> {answer}
              </div>
          )
        }
      </div>
    );
  }
}

export default App;
