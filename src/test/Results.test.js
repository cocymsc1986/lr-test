import React from 'react';

import Results from '../components/results';

const data = [
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
];

it('renders', () => {
  const wrapper = shallow(<Results results={data} />);

  expect(wrapper).toMatchSnapshot();
});