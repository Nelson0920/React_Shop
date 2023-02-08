/*import React, { useState } from 'react'

const Button = () => {
    const [name, setName] = useState("Hello World")
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}*/
/*import React from 'react'

const Button = () => (
        <div>
            <h1>{name}</h1>
        </div>
    )*/

/*import React from 'react'

    const Button = ({text}) => <ButtonRed text={text}/>*/



import React , { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.sate = {
            count: 0
        };
    }
    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}

import React , { Component } from 'react';

function ComponentWrapper(WrapperComponent) {
    class Wrapper extends Component {
        render () {
            return <WrapperComponent {...this.props} />;
        }
    }

    return Wrapper;
}