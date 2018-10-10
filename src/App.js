import React, { Component } from 'react';
import { connect } from 'react-redux';

import resultsActions from './actions/results';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      filteredResults: [],
      filters: [],
    }
  }

  async componentWillMount() {
    await this.props.getResults();
    const { results } = this.props.results;

    this.setState({
      results
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Search Results
        </header>
        {this.state.results.map((result, i) => {
          return (
            <div key={i}>{result.name}</div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state
});

export default connect(
  mapStateToProps,
  resultsActions
)(App);
