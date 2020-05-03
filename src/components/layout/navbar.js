import React, { Component } from 'react'
import PropTypes from 'prop-types'
import{Link} from 'react-router-dom'
class navbar extends Component {
    static defaultProps={
        title:' Github Explorer 2',
        icon:'fab fa-github'
    }
    static propTypes={
        title:PropTypes.array.isRequired,
        icon:PropTypes.string.isRequired
    }
    render() {
        return (
            <div>
            <nav className="navbar bg-primary">
            <h1><i className={this.props.icon} > </i>

        {this.props.title}</h1>

        <ul>
            <li>
                <Link to="/">Home</Link>

            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
            </nav>
            </div>
        )
    }
}

export default navbar
