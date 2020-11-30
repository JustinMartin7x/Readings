import React, { Component } from 'react'
import './styles/HomePage.css'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div className='list'>
                Engineering Topics
                <ul>
                    <Link to='./Quantity'> <li>Quantity Trumps Quality</li></Link>
                    <Link to='./CleanCode'><li>Clean Code: Chapter 1</li></Link>
                    <Link to="./RedGreen"><li>TDD Red-Green-Refactor</li></Link>
                    <li>Cycles of TDD</li>
                </ul>

            </div>
        )
    }
}
