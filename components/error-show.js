import React from 'react'
import { Button } from 'jrs-react-components@2.0.x'
import { Link } from 'react-router-dom'

class ErrorShow extends React.Component {
  componentDidMount() {
    const { id, loadDoc, removeDoc } = this.props
    loadDoc(id)
  }
  render() {
    const { doc, removeDoc, closeDoc } = this.props
    return (
      <div className="ph2">
        <h1 className="tc">{doc.name}</h1>
        <hr />
        <h3>Description</h3>
        <div className="w-100 ba br3 pa4">
          <pre>{doc.description}</pre>
        </div>
        <h3>Solution</h3>
        <div className="w-100 ba br3 pa4">
          <pre>{doc.solution}</pre>
        </div>
        <hr />
        <div className="tc center bg-light-gray pa1 pt2">
          <Link to={`/${doc._id}/edit`}><Button>Edit</Button></Link>
          <Button onClick={e => removeDoc(this.props.history, doc._id, doc._rev)}>Remove</Button>
          <Button onClick={e => closeDoc(this.props.history)}>Return</Button>
        </div>
      </div>
    )
  }
}

export default ErrorShow