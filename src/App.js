// import './App.css';


// export default function App(){
//     return(
//         <div>
//             Hello World;
//         </div>
//     )

// }
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
    name = 'nizam';
    render() {
        return (
            <div>
                <Navbar/>
                <News/>
            </div>
        )
    }
}
