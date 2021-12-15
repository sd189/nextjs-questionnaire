const initialState = {
  list: [],
  fetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_QUESTIONS':
      return {
        ...state,
        fetching: true
      }
    case 'GET_QUESTIONS':
      return {
        ...state,
        list: action.payload.list,
        fetching: false
      }
    case 'FETCHING_QUESTIONS_DONE':
      return {
        ...state,
        fetching: false
      }
    case 'RESET_QUESTIONS_STATE':
      return initialState
    default:
      return state
  }
}
