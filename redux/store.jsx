import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers/rootReducer'
import thunk from 'redux-thunk'

const composeEnhancers = compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
