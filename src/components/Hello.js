import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hi, there Elizabeth.</h1>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h1', null, 'Hi, there Elizabeth.'))
}

export default Hello