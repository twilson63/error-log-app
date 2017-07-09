import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import R from 'ramda'
import { List, SimpleListItem, Button } from 'jrs-react-components@2.0.x'
import Header from '../components/header'
import Search from '../containers/search'

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
  const hasCriteria = docs => props.criteria.length > 0
  const filterDocs = R.filter(doc => R.test(RegExp(`^${props.criteria}`), doc.name))

  return (
    <div>
      <Header title={props.title} />
      <main className="pa4">
        <Search />
        <List className="list">
          {R.compose(
            R.map(li),
            R.ifElse(
              hasCriteria,
              filterDocs,
              R.identity
            )
          )(props.log)}
        </List>
      </main>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    title: state.app.title,
    log: state.log,
    criteria: state.criteria
  }
}
    
const connector = connect(mapStateToProps)
  
export default connector(Component)