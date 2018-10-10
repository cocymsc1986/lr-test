import reducer from '../../reducers/results';

import {
	GET_RESULTS_REQUEST,
	GET_RESULTS_SUCCESS,
	GET_RESULTS_ERROR
} from '../../constants';

describe('Results reducer', () => {
	const state = {
		test: 'test-state'
	};

	test('Should return original state when no matching type', () => {
		const action = {
			type: 'invalid-action'
		};

		const newState = reducer(state, action);

		expect(newState).toEqual({
			test: 'test-state'
		});
	});

	test('Should update state for GET_RESULTS_REQUEST', () => {
		const action = {
			type: GET_RESULTS_REQUEST
		};

		const newState = reducer(state, action);

		expect(newState).toEqual({
			test: 'test-state',
			loading: true
		});
	});

	test('Should update state for GET_RESULTS_SUCCESS', () => {
		const action = {
			type: GET_RESULTS_SUCCESS,
			results: ['test']
		};

		const newState = reducer(state, action);

		expect(newState).toEqual({
			test: 'test-state',
			loading: false,
			results: ['test']
		});
	});

	test('Should update state for GET_RESULTS_ERROR', () => {
		const action = {
			type: GET_RESULTS_ERROR,
			error: 'some-error'
		};

		const newState = reducer(state, action);

		expect(newState).toEqual({
			test: 'test-state',
			loading: false,
			error: 'some-error'
		});
	});
})