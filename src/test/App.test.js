import React from 'react';
import { App } from '../App';

import resultsData from '../helpers/search-data'; 

it('renders', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});

describe('updateFilters should update filteredResults state', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ results: resultsData });
  wrapper.instance().updateFilters({ target: { checked: true, value: 'pool' } });
  
  expect(wrapper.state().filters).toEqual(['pool']);
  expect(wrapper.state().filteredResults).toEqual([
    {
      "name": "hotelone",
      "starRating": 5,
      "facilities": ["car park", "pool"]
    }
  ]);
});

describe('updateSort with ascend should sort filteredResults ascending', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ filteredResults: resultsData });
  wrapper.instance().updateSort({ target: { value: 'ascending' }});

  expect(wrapper.state().filteredResults).toEqual([
    {
      "name": "hoteltwo",
      "starRating": 3,
      "facilities": ["car park", "gym"]
    },
    {
      "name": "hotelthree",
      "starRating": 3,
      "facilities": []
    },
    {
      "name": "hotelone",
      "starRating": 5,
      "facilities": ["car park", "pool"]
    }
  ])
});

describe('sortResults with descend should sort filteredResults descending', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ filteredResults: resultsData });
  wrapper.instance().updateSort({ target: { value: 'descending' }});

  expect(wrapper.state().filteredResults).toEqual([
    {
      "name": "hotelone",
      "starRating": 5,
      "facilities": ["car park", "pool"]
    },
    {
      "name": "hoteltwo",
      "starRating": 3,
      "facilities": ["car park", "gym"]
    },
    {
      "name": "hotelthree",
      "starRating": 3,
      "facilities": []
    }
  ])
});