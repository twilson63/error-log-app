import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import R from 'ramda'
import { List, SimpleListItem, Button } from 'jrs-react-components@2.0.x'
import Header from '../components/header'

const li = (err) => {
  return (
    <SimpleListItem 
      key={err._id} 
      title={err.name} 
      link={<Link to={`/${err._id}`}><Button>Show</Button></Link>} 
    />
  )
}

const Component = props => {
  return (
    <div>
      <Header title={props.title} />
      <main className="pa4">
        <List className="list">
          {R.map(li, props.log)}
        </List>
      </main>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    title: state.app.title,
    log: state.log
  }
}
    
const connector = connect(mapStateToProps)
  
export default connector(Component)