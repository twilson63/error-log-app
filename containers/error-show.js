import ErrorShow from '../components/error-show'
import { connect } from 'react-redux'
import { SET_ERROR_DOC, CLEAR_ERROR } from '../constants'
import PouchDB from 'pouchdb'
const db = PouchDB('error-log')

const getDoc = id => (dispatch) => {
  db.get(id).then(doc => dispatch({
    type: SET_ERROR_DOC,
    payload: doc
  }))
}

const rmDoc = (history, id, rev) => (dispatch) => {
  console.log(id, rev)
  db.remove(id,rev).then(res => dispatch({
    type: CLEAR_ERROR
  })).then(res => history.push('/'))
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ErrorShow)

function mapStateToProps (state) {
  return {
    doc: state.error
  }
}

function mapActionsToProps (dispatch) {
  return {
    removeDoc: (history, id, rev) => {
      dispatch(rmDoc(history, id, rev))
    },
    loadDoc: id => {
      dispatch(getDoc(id))
    },
    closeDoc: history => {
      dispatch({ type: CLEAR_ERROR })
      history.push('/')
    }
  }
}

