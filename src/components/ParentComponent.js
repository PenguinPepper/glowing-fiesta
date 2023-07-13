import React, { Component } from 'react';
import ChildComponent from './childCom';

class ParentComponent extends Component {
    constructor() {
        super()

        this.state = {
            parentName: 'Hurry up!'

        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello, ${childName} parent ${this.state.parentName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent;