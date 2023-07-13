import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome me</div>
        } else {
            message = <div>Welcome guest</div>
        }
        return <div>{message}</div>
        // if (this.state.isLoggedIn ) {
        //     return (
        //         <div>Welcome, me</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome, Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome, me</div>
        //         <div>Welcome, Guest</div>
        //     </div>
        // )
    }
}
export default UserGreeting;