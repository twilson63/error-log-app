import { connect } from 'react-redux'
import { 
  SAVING_FORM, 
  CLEAR_ERROR, 
  ERROR_SET_NAME, 
  ERROR_SET_DESCRIPTION, 
  ERROR_SET_SOLUTION,
  SET_ERROR_DOC
} from '../constants'

import ErrorForm from '../components/error-form'

import PouchDB from 'pouchdb'
const db = PouchDB('error-log')

const addError = (dispatch, getState) => {
  dispatch({type: 'SAVING_FORM'})
  const doc = getState().error
  return db.post(doc)
    .then(res => dispatch({type: 'CLEAR_ERROR'}))
    .catch(err => console.log(err))
}

const getDoc = id => (dispatch) => {
  db.get(id).then(doc => dispatch({
    type: SET_ERROR_DOC,
    payload: doc
  }))
}


const mapStateToProps = state => {
  return {
    name: state.error.name,
    description: state.error.description || '',
    solution: state.error.solution || '',
    saving: state.app.saving || false
  }
}

const mapActionsToProps = dispatch => {
  return {
    handleNameChange: e => {
      dispatch({type: ERROR_SET_NAME, payload: e.target.value})
    },
    handleDescription: e => {
      dispatch({ type: ERROR_SET_DESCRIPTION, payload: e.target.value })
    },
    handleSolution: e => {
      dispatch({ type: ERROR_SET_SOLUTION, payload: e.target.value })
    },
    submitError: history => e => {
      e.preventDefault()
      dispatch(addError)
        .then(res => history.push('/'))
    },
    loadDoc: id => {
      dispatch(getDoc(id))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ErrorForm)