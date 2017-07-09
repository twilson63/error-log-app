import React from 'react'
import Header from '../components/header'
import ErrorForm from '../containers/error-form'

const Form = props => {
  return (
    <div>
      <Header title="Add New Error" />
      <main>
        <ErrorForm history={props.history} />
      </main>
    </div>
  )
}

export default Form