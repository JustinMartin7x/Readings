import React, { Component } from 'react'
import './styles/Quantity.css'
import { Link } from 'react-router-dom'

export default class Quantity extends Component {
    render() {
        return (
            <div className="quantity">
                <p>
                    Quantity Trumps Quality. This comes down to what you can gain from the two. When you spend so much time on one single bit of code at the end of it might gain insight on that one part however if you spend a little bit of time on multiple types of code you set a baseline of more knowledge you can build on later. for example.
                    if i were to give you an array of   objects and i gave you a week to come up with a function to add "th" to each string in the array, you cold probably design me a beautifully refactored function. However in that time all that you have learned is a simple for loop.
                    If i were to give you a list of arrays and told you that in this week you were to write a function for each Array that does something different, at the end of the week you will have learned multiple methods.
                </p>
                <div>
                    <Link to="/"><button>Home</button></Link>

                </div>

            </div>
        )
    }
}
