import React, { Component } from "react";
import { Knob } from "react-rotary-knob";

class Dial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      startVal: 0,
      stopVal: 0
    };
  }

  render() {
    console.log(this.state.startVal)
    console.log("val: " + this.props.value)

    let { value, onDialChange } = this.props;

    return (
      <Knob
        min={0}
        max={1000}
        onStart={() => this.setState({ startVal: value })}
        onStop={() => onDialChange(this.state.startVal - value)}
        style={{ display: "inline-block", width: "200", height: "200" }}
        width={200}
        height={200}
        unlockDistance={0}
        preciseMode={false}
      />
      
    );
  }
}

export default Dial;