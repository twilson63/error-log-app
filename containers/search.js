import { connect } from 'react-redux'
import Search from '../components/search'
import { SET_CRITERIA } from '../constants'

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Search)

function mapStateToProps (state) {
  return {
    criteria: state.criteria
  }
}

function mapActionsToProps (dispatch) {
  return {
    handleCriteriaChange: e => {
      dispatch({type: SET_CRITERIA, payload: e.target.value })
    }
  }
}