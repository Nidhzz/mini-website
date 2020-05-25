import React, { Component } from 'react';
import axios from 'axios'
import data from './data/webapp.json'
import InputElement from './Component/InputElement/InputElement'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      score: {
        country: "",
        average_score: 0
      },
      selectedOption: "test_data"
    }
  }

  server_data = []
  componentDidMount() {
    axios.get(`http://www2.rsphinx.com/static/misc/cric_scores.json`)
      .then(res => {
        const data = res.data;
      })

    // fetch('http://www2.rsphinx.com/static/misc/cric_scores.json')
    //   .then((response) => response.json())
    //   .then((findresponse) => {
    //     console.log("res ", findresponse)
    //   })

    this.server_data = [
      ["England", 23],
      ["England", 127],
      ["Sri Lanka", 99],
      ["Sri Lanka", 99],
      ["New Zealand", 31],
      ["Sri Lanka", 101],
      ["New Zealand", 81],
      ["Pakistan", 23],
      ["Pakistan", 127],
      ["India", 3],
      ["India", 71],
      ["Australia", 31],
      ["India", 22],
      ["Pakistan", 81]]

  }
  test_data = data.test_data
  onChangeHandler = (event) => {
    let average_score = 0
    let tempScore = { ...this.state.score };
    tempScore['country'] = event.target.value;
    if (this.state.selectedOption === "test_data") {

      average_score = this.test_data.filter(function (data) {
        return data.country === event.target.value
      }).reduce(function (total, currentValue) {
        return total + currentValue.score;
      }, 0);
    }
    else {
      average_score = this.server_data.filter(function (data) {
        return data[0] === event.target.value
      }).reduce(function (total, currentValue) {
        return total + currentValue[1];
      }, 0);
    }

    tempScore['average_score'] = average_score / 3
    this.setState({ score: tempScore });
  }

  optionChangeHandler = (e) => {
    this.setState({
      selectedOption: e.currentTarget.value
    })
  }

  render() {

    return (
      <React.Fragment>
        <InputElement score={this.state.score} selectedOption={this.state.selectedOption} optionChange={this.optionChangeHandler} onchanged={event => this.onChangeHandler(event)}></InputElement>
      </React.Fragment >
    );
  }
}

export default App;
