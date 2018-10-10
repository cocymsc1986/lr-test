import {
	GET_RESULTS_REQUEST,
	GET_RESULTS_SUCCESS,
	GET_RESULTS_ERROR
} from '../constants';

import searchData from '../helpers/search-data';

export const getResultsRequest = () => ({
	type: GET_RESULTS_REQUEST
});

export const getResultsSuccess = results => ({
	type: GET_RESULTS_SUCCESS,
	results
});

export const getResultsError = error => ({
	type: GET_RESULTS_ERROR,
	error
});

// Normally pass in service to enable mocking in test, no real service for this case
export const actionCreator = () => {
	const getResults = () => async dispatch => {
		dispatch(getResultsRequest);

		try {
			const response = searchData;
			dispatch(getResultsSuccess(response));
		} catch (err) {
			dispatch(getResultsError(err))
		}
	}

	return {
		getResults
	}
}

export default actionCreator();
