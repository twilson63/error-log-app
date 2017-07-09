import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import R from 'ramda'
const { pluck, merge }  = R

import { 
  SAVING_FORM, 
  CLEAR_ERROR, 
  ERROR_SET_NAME, 
  ERROR_SET_DESCRIPTION, 
  ERROR_SET_SOLUTION,
  SET_ERROR_DOC
} from './constants'

import PouchDB from 'pouchdb'
const SET_LOG = 'SET_LOG'
const db = PouchDB('error-log')

const store = createStore(
  combineReducers({
    app,
    log,
    error
  }),
  applyMiddleware(thunk)
)

export default store

function error (state={name: ''}, action) {
  switch (action.type) {
    case SET_ERROR_DOC: 
      return action.payload
    case ERROR_SET_NAME:
      return merge(state, {name: action.payload })
    case ERROR_SET_DESCRIPTION:
      return merge(state, {description: action.payload })
    case ERROR_SET_SOLUTION:
      return merge(state, {solution: action.payload })
    case CLEAR_ERROR: 
      return {name: ''}
    default:
      return state
  }
}

function app (state={title: 'Error Log'}, action) {
  switch (action.type) {
    case SAVING_FORM:
      return merge(state, { saving: true })
    case CLEAR_ERROR:
      return merge(state, { saving: false })
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

db.changes({live: true, since: 'now'})
  .on('change', chg => {
    db.allDocs({include_docs: true})
      .then(res => {
        store.dispatch({ type: SET_LOG, payload: pluck('doc', res.rows) })
      })
  })

// test pouch
//window.db = db