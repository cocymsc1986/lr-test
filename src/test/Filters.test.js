import React from 'react';

import Filters from '../components/Filters';

describe('Filters component', () => {
	test('Should call updateFilter prop when filter checkbox checked', () => {
		const mockFn = jest.fn();
		const wrapper = shallow(<Filters updateFilters={() => mockFn()} />);

		wrapper.find('.filters__option').first().simulate('change');

		expect(mockFn).toHaveBeenCalled();
	})
});
