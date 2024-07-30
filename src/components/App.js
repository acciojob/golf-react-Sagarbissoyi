import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false,
      left: 0
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  buttonClickHandler = () => {
    this.setState({ showBall: true });
  };

  handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.keyCode === 39) {
      this.setState((prevState) => ({
        left: prevState.left + 5
      }));
    }
  };

  renderChoice = () => {
    if (this.state.showBall) {
      return <div className="ball" style={{ left: this.state.left + 'px' }}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  };

  render() {
    return (
      <div className="App">
        {this.renderChoice()}
      </div>
    );
  }
}

export default App;
