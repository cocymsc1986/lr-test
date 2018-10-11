import React, { Component } from 'react';
import { connect } from 'react-redux';

import resultsActions from './actions/results';

import Filters from './components/Filters';
import Sort from './components/Sort';
import './App.css';


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      filteredResults: [],
      filters: [],
      sort: 'descending'
    }
  }

  async componentWillMount() {
    await this.props.getResults();

    const { results } = this.props.results;

    this.setState({
      results,
      filteredResults: results
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
    }, () => {
      this.updateFilteredResults();
    });
  }

  updateFilteredResults() {
    const { results, filters } = this.state;

    const filteredResults = results.filter(result => filters.every(filter => result.facilities.includes(filter)));
;
    this.setState({
      filteredResults
    });
  }

  updateSort(e) {
    this.setState({ sort: e.target.value }, () => {
      this.sortResults()
    })
  }

  sortResults() {
    const { filteredResults, sort } = this.state;

    const sortedResults = filteredResults.sort((a, b) => {
      return sort === 'ascending' ? a.starRating - b.starRating : b.starRating - a.starRating
    });

    this.setState({
      filteredResults: sortedResults
    })
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
        <div>
          <Sort updateSort={(e) => this.updateSort(e)} />
        </div>
        {this.state.filteredResults.map((result, i) => {
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
