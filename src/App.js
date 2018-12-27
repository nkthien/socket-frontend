import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';

class App extends Component {
    render() {
        const socket = new WebSocket('ws://localhost:8000');    
        return (
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route path="/login" render={() => <Login socket={socket} />} />
                <Route path="/register" render={() => <Register socket={socket} />} />
            </Switch>
        );
    }
}

export default App;