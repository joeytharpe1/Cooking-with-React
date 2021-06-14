import React, { Component } from 'react';
import {ThemeContext} from './App';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count: props.initialCount //state from count component in App.js
        }
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        {/* (-1) and (+1) is the (amount) in the eventhandler function */}
                        <button style={style} onClick={()=> this.changeCount(-1)}>-</button> 
                        {/* initialCount passed down as state(this.state.count) from constructor */}
                        <span>{this.state.count}</span>
                        <button style={style} onClick={()=> this.changeCount(1)}>+</button>
                    </div>
                )}
            </ThemeContext.Consumer>

        )
    }

    changeCount(amount) {
        this.setState(prevState => { //prevState uses current previous state 
            return {count: prevState.count + amount}
        })
    }
}
