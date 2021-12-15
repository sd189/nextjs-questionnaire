import questionReducer from './questionReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  question: questionReducer
})

export default rootReducer
