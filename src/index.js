import ReactDOM from "react-dom";
import React, { Component } from "react";

class TestSpeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runIn: 0
    };
  }
  fakeFn(message) {
    const a = message;
    return a;
  }

  testSpeed(message) {
    const startTime = Date.now();

    const MAX_LOOP = 1000000000;
    for (let ind = 0; ind < MAX_LOOP; ind++) {
      this.fakeFn(message);
    }
    const endTime = Date.now();

    return endTime - startTime;
  }

  componentDidMount() {
    this.testSpeed(this.props.msg);

    // First round. constant message first
    let totalMsgCall =
      this.testSpeed(this.props.msg) +
      this.testSpeed(this.props.msg) +
      this.testSpeed(this.props.msg) +
      this.testSpeed(this.props.msg) +
      this.testSpeed(this.props.msg) +
      this.testSpeed(this.props.msg) +
      this.testSpeed(this.props.msg) +
      this.testSpeed(this.props.msg) +
      this.testSpeed(this.props.msg) +
      this.testSpeed(this.props.msg);
    console.log("Avagrage:", totalMsgCall / 10);
  }

  render() {
    return <div>{this.state.runIn}</div>;
  }
}

class Todo extends Component {
  render() {
    return (
      <div>
        <TestSpeed msg={"hello world"} />
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
