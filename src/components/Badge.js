import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

class Badge extends React.Component {
    render () {
        const {
            firstName,
            lastName,
            jobTitle,
            twitter
        } = this.props
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="logo" />
                </div>
                <div className="Badge__section-name">
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="avatar" className="Badge__avatar" />
                    <h1>{ firstName } <br /> { lastName }</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{ jobTitle }</h3>
                    <div>@{ twitter }</div>
                </div>
                <div className="Badge__footer">
                    #PlatziConf
                </div>
            </div>
        )
    }
} 

export default Badge
