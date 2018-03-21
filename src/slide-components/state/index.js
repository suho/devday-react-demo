import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ seconds: this.state.seconds + 2 })
    }, 2000)
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }

  jsxEx() {
    return (
      <MyButton color="blue" shadowSize={2}>
        Click Me
      </MyButton>
    );
  }
}

export default Timer;