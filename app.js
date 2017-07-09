import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import List from './pages/list'
import Form from './pages/form'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={List} />
        <Route path="/new" component={Form} />
      </div>
    </BrowserRouter>
  )
}

export default App