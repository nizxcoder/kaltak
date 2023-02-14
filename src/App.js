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
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
    
    state ={
        progress: 0,
    };
    setProgress = (prg)=>{
        this.setState({
            progress: prg
        });
    }
    render() {
        let query = window.location.search && window.location.search.split('q')[1].split('=')[1];
        return (
            <Router>
                <div>
                    <LoadingBar
                        color='red'
                        progress={this.state.progress}
                    />
                    <Navbar />
                    <Routes>
                        <Route path={'/'} element={<News setProgress={this.setProgress} key={query} category={query || "general"} />}></Route>
                        <Route exact path='/sports' element={<News setProgress={this.setProgress} key='/sports' category="sports" />} />
                        <Route exact path='/politics' element={<News setProgress={this.setProgress} key='/politics' category="politics" />} />
                        <Route exact path='/business' element={<News setProgress={this.setProgress} key='/business' category="business" />} />
                        <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key='/entertainment' category="entertainment" />} />
                        <Route exact path='/science' element={<News setProgress={this.setProgress} key='/science' category="science" />} />
                        <Route exact path='/technology' element={<News setProgress={this.setProgress} key='/technology' category="technology" />} />
                        <Route exact path='/health' element={<News setProgress={this.setProgress} key='/health' category="health" />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}
