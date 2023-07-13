import React from 'react';

// function Greet() {
//     return <h1>Hello Elizabeth</h1>
// }

const Greet = (props) => {
    // console.log(props)
    const { name, surname } = props
    return (
        <h1>Hello {name} {surname}</h1>
    )
}

export default Greet;