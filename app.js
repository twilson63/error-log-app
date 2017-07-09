import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import List from './pages/list'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={List} />
      </div>
    </BrowserRouter>
  )
}

export default App