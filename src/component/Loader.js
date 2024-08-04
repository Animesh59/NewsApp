import React, { Component } from 'react'
// import loader from '../search.gif'
import loader from '../spinner.gif'
export default class Loader extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loader} alt="loader" />
            </div>
        )
    }
}
