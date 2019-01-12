import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


const address = 'wss://myprojectsocket.serveo.net:65432';
//const address = 'ws://localhost:8000';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
    }
    
    setUser = (user) => {
        this.setState({user: user});
    }
    
    render() {
        const socket = new WebSocket(address); 
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    !isLoggedIn() ? (<MainPage 
                                        socket={socket} 
                                        user={this.state.user}
                                        address={address}
                                    />) : (<Redirect to="/login" />))} />
                <Route path="/login" render={() => (
                    isLoggedIn() ? (<LoginPage 
                                        socket={socket}
                                        setUser={this.setUser}
                                    />) : (<Redirect to="/" />))} />
                <Route path="/register" render={() => (
                    isLoggedIn() ? (<RegisterPage 
                                        socket={socket}
                                        setUser={this.setUser}
                                    />) : (<Redirect to="/" />))} />
            </Switch>
        );
    }
}

export default App;

// ============================== Helper functions
const isLoggedIn = () => {
    return !sessionStorage.getItem('authentication');
};
