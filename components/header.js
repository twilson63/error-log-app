import React from 'react'
import { Button } from 'jrs-react-components@2.0.x'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <header className="georgia bg-purple white pv2 ph3">
      <div className="cf">
        <div className="fr pt3">
          <Link to="/new"><Button>Add New</Button></Link>
        </div>
        <h1>{props.title}</h1>
      </div>       
    </header>
  )
}

export default Header