import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    app
  }),
  applyMiddleware(thunk)
)

export default store

function app (state={title: 'Error Log'}, action) {
  switch (action.type) {
    default:
      return state
  }
}