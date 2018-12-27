import React, { Component } from 'react';
import Login from './Login';

class App extends Component {
    
    render() {
        const socket = new WebSocket('ws://localhost:8000');    
        return (
            <div className='container'>
                <Login socket={socket} />
            </div>
        );
    }
}

export default App;
