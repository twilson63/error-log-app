import React from 'react'

import Header from '../components/header'
import ShowError from '../containers/error-show'

const Show = props => {
  return (
    <div>
      <Header title="View Error Log" />
      <main>
        <ShowError id={props.match.params.id} history={props.history} />
      </main>
    </div>
  )
}

export default Show