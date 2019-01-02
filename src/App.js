import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

class App extends Component {
    render() {
        const socket = new WebSocket('ws://localhost:8000');    
        return (
            <Switch>
                <Route exact path="/" render={() => <MainPage />} />
                <Route path="/login" render={() => <LoginPage socket={socket} />} />
                <Route path="/register" render={() => <RegisterPage socket={socket} />} />
            </Switch>
        );
    }
}

export default App;