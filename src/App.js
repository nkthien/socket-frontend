import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


const address = 'ws://192.168.1.11:65432';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //socket: new WebSocket(address),
            user: {},
        };
    }
    
    setUser = (user) => {
        this.setState({user: user});
    }
    
    render() {
        const socket = new WebSocket(address); 
        console.log("run")
        console.log(socket)
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
