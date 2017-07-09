import React from 'react'
import { TextField, Button } from 'jrs-react-components@2.0.x'
import TextArea from './textarea'

class ErrorForm extends React.Component {
  componentDidMount() {
    const { id, loadDoc } = this.props
    id && loadDoc(id)
  }
  render() {
    const props = this.props
    return (
      <form className="pa4" onSubmit={props.submitError(props.history)}>
        { props.saving && <div className="w-100 pa4 tc ba4 bg-pink white">Saving Doc...</div>}
        <TextField
          label="Name"
          value={props.name}
          onChange={props.handleNameChange}
          help="Describe the name of the error you encountered"
        />
        <TextArea
          label="Description"
          help="Describe your error in your words"
          value={props.description}
          onChange={props.handleDescription}
        />
        <TextArea
          label="Solution"
          optional={true}
          help="Enter solution for error"
          value={props.solution}
          onChange={props.handleSolution}
        />

        <div>
          <Button>{props.id ? 'Update' : 'Create'} Report</Button>
        </div>
      </form>
    )
  }
}

export default ErrorForm