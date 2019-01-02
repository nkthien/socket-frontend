import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const isLoggedIn = () => {
    return sessionStorage.getItem('authentication');
};

class App extends Component {
    render() {
        const socket = new WebSocket('ws://localhost:8000');    
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    isLoggedIn() ? (<MainPage />) : (<Redirect to="/login" />)
                )} />
                <Route path="/login" render={() => <LoginPage socket={socket} />} />
                <Route path="/register" render={() => <RegisterPage socket={socket} />} />
            </Switch>
        );
    }
}

export default App;