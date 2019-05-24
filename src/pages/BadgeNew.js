import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import header from '../images/badge-header.svg'
import BadgeForm from '../components/BadgeForm'
import './styles/BadgeNew.css'

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} className="img-fluid" alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge firstname="Raúl" lastName="Gómez" twitter="raulfbgomez" jobTitle="Frontend Engineer" avatarUrl="http://es.gravatar.com/matt#photo-6" />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew
