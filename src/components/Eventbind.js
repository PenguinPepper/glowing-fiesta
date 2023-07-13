import React, { Component } from "react";

class EventBind extends Component {
    constructor() {
        super()
        this.state = {
            message: 'hello'
        }

        // this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage() {
    //     this.setState({
    //         message: "Goodbye!"
    //     })
    //     console.log(this)
    // }

    changeMessage = () => {
        this.setState({
            message: "Goodbye!"
        })
        console.log(this)
    }

    render() {
        return (

            <div>
                <div>
                    {this.state.message}
                </div>
                {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.changeMessage()}>Click</button> */}
                <button onClick={this.changeMessage}>Click</button>
            </div>
        )
    }
}

export default EventBind;