import React from 'react'
import { connect } from 'react-redux'

const App = props => {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    title: state.app.title
  }
}

const connector = connect(mapStateToProps)

export default connector(App)