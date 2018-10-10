import React from 'react';
import App from './App';

import resultsData from '../helpers/search-data'; 

it('renders', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});

describe('updateFilter should update filteredResults state', () => {
  const wrapper = shallow(<App results={ resultsData } />);
  wrapper.instance().updateFilter('pool');
  
  expect(wrapper.state().filter).toBe(['pool']);
  expect(wrapper.state().filteredResults).toEqual([
    {
      "name": "hotelone",
      "starRating": 5,
      "facilities": ["car park", "pool"]
    }
  ]);
});

describe('sortResults with ascend should sort filteredResults ascending', () => {
  const wrapper = shallow(<App results={ resultsData } />);
  wrapper.instance().sortResults('ascend');

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
  const wrapper = shallow(<App results={ resultsData } />);
  wrapper.instance().sortResults('ascend');

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