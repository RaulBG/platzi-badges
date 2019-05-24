import React, { Component } from 'react'

class BadgeForm extends Component {
  handleChanche = e => {
    console.log({ 
      value: e.target.value,
      name: e.target.name
     })
  }

  handleClick = e => {
    console.log("button has clicked")
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted')
  }

  render () {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={ this.handleChanche } type="text" name="firstName" className="form-control" />
          </div>
          <button type="submit" onClick={ this.handleClick } className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
