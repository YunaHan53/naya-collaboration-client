import React from 'react'

class AdditionalInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      message: ''
    }
  }

  render () {
    return (
      <div className="Info">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-light">Submit</button>
        </form>
      </div>
    )
  }

  onNameChange (event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange (event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange (event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit (event) {
  }
}

export default AdditionalInfo
