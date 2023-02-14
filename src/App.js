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
    apiKey = process.env.REACT_APP_NEWS_API;
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
                    height={2.5}
                        color='red'
                        progress={this.state.progress}
                    />
                    <Navbar />
                    <Routes>
                        <Route path={'/'} element={<News setProgress={this.setProgress} key='general' apiKey={this.apiKey} query={query} category={"general"} />}></Route>
                        <Route exact path='/sports' element={<News setProgress={this.setProgress} query={query} apiKey={this.apiKey} key='/sports' category="sports" />} />
                        <Route exact path='/politics' element={<News setProgress={this.setProgress} query={query} apiKey={this.apiKey} key='/politics' category="politics" />} />
                        <Route exact path='/business' element={<News setProgress={this.setProgress} query={query} apiKey={this.apiKey} key='/business' category="business" />} query={query} />
                        <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} query={query} key='/entertainment' category="entertainment" />} />
                        <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} query={query} key='/science' category="science" />} />
                        <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} query={query} key='/technology' category="technology" />} />
                        <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} query={query} key='/health' category="health" />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}
