import React, { Component } from 'react';
import { connect } from 'react-redux';

import resultsActions from './actions/results';

import Filters from './components/Filters';
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

  updateFilters(e) {
    const filters = this.state.filters;
    const checkbox = e.target;

    if (checkbox.checked) {
      filters.push(checkbox.value);
    } else {
      const index = filters.indexOf(checkbox.value);
      filters.splice(index, 1);
    };

    this.setState({
      filters
    });
  }

  render() {
    return (
      <div className="App">
        <header className="">
          Search Results
        </header>
        <div>
          <Filters updateFilters={(e) => this.updateFilters(e)} />
        </div>
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
