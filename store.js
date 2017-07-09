import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import R from 'ramda'
const { pluck }  = R

import PouchDB from 'pouchdb'
const SET_LOG = 'SET_LOG'
const db = PouchDB('error-log')

const store = createStore(
  combineReducers({
    app,
    log
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

function log (state=[], action) {
  switch (action.type) {
    case SET_LOG:
      return action.payload
    default:
      return state
  }
}

store.dispatch(function (dispatch) {
  db.allDocs({include_docs: true})
    .then(res => {
      dispatch({ type: SET_LOG, payload: pluck('doc', res.rows) })
    })
})

// test pouch
//window.db = db