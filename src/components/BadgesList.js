import React, { Component } from 'react'
import './styles/BadgesList.css';

class BadgesList extends Component {
  render () {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          { this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                { badge.firstName }
                { badge.lastName }
              </li>
            )
          }) }
        </ul>
      </div>
    )
  }
}

export default BadgesList
