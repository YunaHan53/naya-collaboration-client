import React from 'react'

class DimensionsInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.initialState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.autocomplete = null
  }

  initialState () {
    return {
      length: '',
      width: '',
      height: ''
    }
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    // this.props.dispatch(addAddress(this.state))
    this.clearForm()
  }

  render () {
    return (
      <div className="address-input">
        <form onSubmit={this.handleSubmit}>
          <input
            name={'length'}
            value={this.state.length}
            placeholder={'Length'}
            onChange={this.handleChange}
          />
          <input
            name={'width'}
            value={this.state.width}
            placeholder={'Width'}
            onChange={this.handleChange}
          />
          <input
            name={'height'}
            value={this.state.height}
            placeholder={'Height'}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default DimensionsInput
