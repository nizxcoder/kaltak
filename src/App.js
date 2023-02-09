import logo from './logo.svg';
import './App.css';

// export default function App(){
//     return(
//         <div>
//             Hello World;
//         </div>
//     )

// }
import React, { Component } from 'react'

export default class App extends Component {
    name = 'nizam';
    render() {
        return (
            <div>
                <h1>This is class based component {this.name}</h1>
            </div>
        )
    }
}
