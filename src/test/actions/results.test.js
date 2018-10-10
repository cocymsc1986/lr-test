import {
	GET_RESULTS_REQUEST,
	GET_RESULTS_SUCCESS,
	GET_RESULTS_ERROR
} from '../../constants';

import {
	getResultsRequest,
	getResultsSuccess,
	getResultsError,
	actionCreator
} from '../../actions/results';

describe('Results actions', () => {
	describe('getResultsRequest', () => {
		test('Should return the correct type', () => {
			const result = getResultsRequest();

			expect(result.type).toBe(GET_RESULTS_REQUEST);
		});
	});

	describe('getResultsSuccess', () => {
		test('Should return the correct type and payload', () => {
			const data = 'test';
			const result = getResultsSuccess(data);

			expect(result.type).toBe(GET_RESULTS_SUCCESS);
			expect(result.results).toBe('test');
		});
	});

	describe('getResultsError', () => {
		test('Should return the correct type and error payload', () => {
			const error = 'some error';
			const result = getResultsError(error);

			expect(result.type).toBe(GET_RESULTS_ERROR);
			expect(result.error).toBe('some error');
		});
	});

	describe('ActionCreator', () => {
		test('Should call request and success when data is returned', async () => {
			const dispatch = jest.fn();
			const getResults = jest.fn(() => Promise.resolve([{ name: 'Test' }]))
			const serviceCreator = jest.fn(() => ({
				getResults
			}));

			const actions = actionCreator(serviceCreator);

			await actions.getResults()(dispatch);

			expect(dispatch).toHaveBeenCalledTimes(2);
			expect(dispatch).toBeCalledWith({
				type: GET_RESULTS_SUCCESS,
				results: [{ name: 'Test' }]
			})
		});
	});
});