import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const isLoggedIn = () => {
    return sessionStorage.getItem('authentication');
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: new WebSocket('ws://172.16.22.23:65432'),
            //socket: new WebSocket('ws://localhost:8000'),
        };
        console.log("runasdsadsa");
    }
    
    render() {
        const socket = this.state.socket; 
        console.log(socket);
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    isLoggedIn() ? (<MainPage socket={socket} />) : (<Redirect to="/login" />)
                )} />
                <Route path="/login" render={() => <LoginPage socket={socket} />} />
                <Route path="/register" render={() => <RegisterPage socket={socket} />} />
            </Switch>
        );
    }
}

export default App;