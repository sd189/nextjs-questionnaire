import axios from 'axios'

export const getQuestions = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_QUESTIONS' })
    axios.get('data/questions.json')
      .then((response) => {
        const responseData = response.data
        dispatch({
          type: 'GET_QUESTIONS',
          payload: {
            list: responseData.questions
          }
        })
      }).finally(() => {
        dispatch({ type: 'FETCHING_QUESTIONS_DONE' })
      })
  }
}
