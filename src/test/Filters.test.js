import React from 'react';

import Filters from '../components/Filters';

describe('Filters component', () => {
	test('Should call updateFilter prop when filter checkbox checked', () => {
		const mockFn = jest.fn()
		const wrapper = shallow(<Filters updateFilter={mockFn} />);

		wrapper.find('.filters__option').onChange();

		expect(mockFn).toHaveBeenCalled();
	})
});
