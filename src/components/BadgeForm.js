import React, { Component } from 'react'

class BadgeForm extends Component {
  // state = {
  // }
  // handleChanche = e => {
  //   // console.log({ 
  //   //   value: e.target.value,
  //   //   name: e.target.name
  //   // })
  //   this.setState({
  //     // firstName: e.target.value
  //     [e.target.name] : e.target.value
  //   })
  // }

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
            <input onChange={ this.props.onChange } type="text" name="firstName" value={ this.props.formValues.firstName } className="form-control" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input onChange={ this.props.onChange } type="text" name="lastName" value={ this.props.formValues.lastName } className="form-control" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input onChange={ this.props.onChange } type="email" name="email" value={ this.props.formValues.email } className="form-control" />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input onChange={ this.props.onChange } type="text" name="jobTitle" value={ this.props.formValues.jobTitle } className="form-control" />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input onChange={ this.props.onChange } type="text" name="twitter" value={ this.props.formValues.twitter } className="form-control" />
          </div>
          <button type="submit" onClick={ this.handleClick } className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
