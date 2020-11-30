import React, { Component } from 'react'
import image from './styles/tdd.webp'

export default class RedGreen extends Component {
    render() {
        return (
            <div>
                <h1>TDD: Test Driven Development </h1>
                <p>
                    Test Driven Development: is a process of building your code by writing a test first, then using that test design your software.
                </p>
                <h2>Red, Green, Refactor</h2>
                <ul>
                    <li>red: What are you developing.</li>
                    <li>green: How to pass your test.</li>
                    <li>refactor: improve your code.</li>
                </ul>
                <img src={image} alt="TDD"></img>
                <p>
                    Red: in this process you are naming your function and preparing to write a function that will solve the test.
                    Green: in this process we are writing code that passes our test.
                    refactor: in the final state we are re-building out code to look clean and dry.

                </p>

            </div>
        )
    }
}
