import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    increment() {
        // this.setState({
        //     counter: this.state.counter + 1
        // }, () => { console.log('Callback value', this.state.counter) })

        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
        console.log(this.state.counter)
    }

    incrementSeven() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <div>
                    Count - {this.state.counter}
                </div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementSeven()}>Plus seven</button>
            </div>
        )
    }
}

export default Counter;