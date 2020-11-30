import React from "react";

// https://uk.reactjs.org/docs/forms.html

// https://uk.reactjs.org/docs/react-component.html#setstate

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x0: 0,
      v0: 0,
      t: 0,
      a: 0,
      x: 0
    };
    this.getData = this.getData.bind(this);
  }

  getData(e) {
    console.log(e.target.name);

    if (e.target.name === "x0") {
      this.setState(
        {
          x0: e.target.value
        },
        this.setParams
      );
    } else if (e.target.name === "v0") {
      this.setState(
        {
          v0: e.target.value
        },
        this.setParams
      );
    } else if (e.target.name === "t") {
      this.setState(
        {
          t: e.target.value
        },
        this.setParams
      );
    } else if (e.target.name === "a") {
      this.setState(
        {
          a: e.target.value
        },
        this.setParams
      );
    }

    console.log("getData");
  }

  setParams() {
    console.log(this.state.x0);

    let x_0 = Number(this.state.x0);
    let v_0 = Number(this.state.v0);
    let t = Number(this.state.t);
    let a = Number(this.state.a);

    let x_go = x_0 + v_0 * t + (a * Math.pow(t, 2)) / 2;

    // let x_go = Number(x_0) + Number(v_0*t) + Number(a*Math.pow(t, 2)/2);

    // let x_go = a*Math.pow(t, 2)/2;

    console.log("x_go " + x_go);

    this.setState({
      x: x_go
    });
  }

  render() {
    console.log("render");
    return (
      <>
        <form id="calculator-form" style={{ textAlign: "left" }}>
          <label for="x0">x0:</label>
          <br />
          <input
            type="text"
            id="x0"
            name="x0"
            value={this.state.x0}
            onChange={this.getData}
          />
          <br />
          <label for="v0">v0</label>
          <br />
          <input
            type="text"
            id="v0"
            name="v0"
            value={this.state.v0}
            onChange={this.getData}
          />
          <br />
          <label for="t">t</label>
          <br />
          <input
            type="text"
            id="t"
            name="t"
            value={this.state.t}
            onChange={this.getData}
          />
          <br />
          <label for="a">a</label>
          <br />
          <input
            type="text"
            id="a"
            name="a"
            value={this.state.a}
            onChange={this.getData}
          />
          <br />
          <br />
          <br />
          <label for="x">x</label>
          <br />
          <input type="text" id="x" name="x" value={this.state.x} />
        </form>
      </>
    );
  }
}
