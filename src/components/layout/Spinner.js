import React, { Component } from 'react'
import spinner from './spinner.gif'
export class Spinner extends Component {
    render() {
        return (
            <Fragment>
                <img src={spinner} alt='Loading...' style={{width:'200px',margin:'auto'}}/>
            </Fragment>
        )
    }
}

export default Spinner
