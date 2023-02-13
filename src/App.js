// import './App.css';


// export default function App(){
//     return(
//         <div>
//             Hello World;
//         </div>
//     )

// }
import React, { Component } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';



export default class App extends Component {
    render() {
        let query = window.location.search && window.location.search.split('q')[1].split('=')[1];
        return (
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path={'/'} element={<News key= {query} category={query || "general"}/>}></Route>
                        <Route exact path='/sports' element={<News key= '/sports' category="sports" />} />
                        <Route exact path='/politics' element={<News key='/politics' category="politics" />} />
                        <Route exact path='/business' element={<News key= '/business' category="business" />} />
                        <Route exact path='/entertainment' element={<News key= '/entertainment' category="entertainment" />} />
                        <Route exact path='/science' element={<News key= '/science' category="science" />} />
                        <Route exact path='/technology' element={<News key= '/technology' category="technology" />} />
                        <Route exact path='/health' element={<News key= '/health' category="health" />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}
