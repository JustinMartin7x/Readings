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
                    <li>Clean Code: Chapter 1</li>
                    <li>TDD Red-Green-Refactor</li>
                    <li>Cycles of TDD</li>
                </ul>

            </div>
        )
    }
}
