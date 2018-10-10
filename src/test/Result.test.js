import React from 'react';

import Result from '../components/result';

const data = {
	"name": "hotelone",
	"starRating": 5,
	"facilities": ["car park", "pool"]
}

it('renders', () => {
  const wrapper = shallow(<Result resultData={data} />);

  expect(wrapper).toMatchSnapshot();
});