const defaultState = {
	results: [],
	error: null,
	loading: true
}

export default (state = defaultState, { type, results, error }) => {
  switch (type) {
		case 'GET_RESULTS_REQUEST':
      return state = {
				...state,
				loading: true
			}
		case 'GET_RESULTS_SUCCESS':
		console.log('REDUCER')
			return state = { 
				...state,
				results,
				loading: false
			}
		case 'GET_RESULTS_ERROR':
      return state = {
				...state,
				error,
				loading: false
			}
    default:
      return state
  }
}