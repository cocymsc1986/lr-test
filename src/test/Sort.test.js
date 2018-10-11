import React from 'react';

import Sort from '../components/Sort';

describe('Filters component', () => {
	test('Should call updateFilter prop when filter checkbox checked', () => {
		const mockFn = jest.fn()
		const wrapper = shallow(<Sort updateSort={mockFn} />);

		wrapper.find('.sort__input').first().simulate('change');

		expect(mockFn).toHaveBeenCalled();
	})
});