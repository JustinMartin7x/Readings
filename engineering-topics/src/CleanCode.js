import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/CleanCode.css'

export default class CleanCode extends Component {
    render() {
        return (
            <div className='clean'>
                <h1>Clean Code</h1>
                <p>
                    Why write clean code? As my foundations instructor told us "write code so that the next person who works on it can read it".
                    the idea is simple. When you write your code you want to make it so that anyone can read your intentions. Easy naming structures for your variables and functions that declare precisely what you are doing.
                    </p>
                <div className='quote'>
                    I like my code to be elegant and efficient. The
                    logic should be straightforward to make it hard
                    for bugs to hide, the dependencies minimal to
                    ease maintenance, error handling complete
                    according to an articulated strategy, and performance close to optimal so as not to tempt
                    people to make the code messy with unprincipled optimizations. Clean code does one thing
                    well. -Bjarne Stroustump
                        </div>
                <p>
                    When we write code we should think of it as an extension of ourself. Everyone codes different and it is almost like a signature, we are using the same letters and numbers as everyone else but no one codes exactly like yourself. Therefor when someone reads your code what do you want their impression of you to be? Sloppy, redundant, wet? Writing clean precise code will be the first impression you give to someone.
                </p>
                <Link to='/'><button>Home</button></Link>


            </div>
        )
    }
}
