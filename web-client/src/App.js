import React, { Component } from "react";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hands: "",
      result: ""
    };
  }

  handleInputChange = e => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      hands: value
    });
  };

  submit = () => {
    axios.post("http://localhost:5000/", {
      hands: this.state.hands
    })
      .then((response) => {
        console.log({data: response.data})
        this.setState({
          ...this.state,
          result: response.data.result
        })
      })
  }

  render() {
    return (
      <div>
        <label>Input</label>
        <br></br>
        <textarea value={this.state.hands} onChange={this.handleInputChange}>{this.state.hands}</textarea>
        <br></br>
        <button onClick={this.submit} >Submit</button>

        <br></br>
        <br></br>

        <label>Result</label>
        <br></br>
        <div style={{whiteSpace: "pre-line"}}>{this.state.result}</div>
      </div>
    );
  }
}

export default App;
