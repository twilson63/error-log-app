import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import List from './pages/list'
import Form from './pages/form'
import Show from './pages/show'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/new" component={Form} />
          <Route path="/:id/edit" component={Form} />
          <Route path="/:id" component={Show} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App