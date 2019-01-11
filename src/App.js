import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const isLoggedIn = () => {
    return !sessionStorage.getItem('authentication');
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: new WebSocket('ws://10.10.232.173:65432'),
            //socket: new WebSocket('ws://localhost:8000'),
            user: {},
        };
        //if(!this.state.socket)
        //    this.state.socket = new WebSocket('ws://192.168.1.18:65432');
        //console.log("state:")
        console.log(this.state.socket);
    }
    
    setUser = (user) => {
        this.setState({user: user});
    }
    
    render() {
        const socket = this.state.socket; 
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    !isLoggedIn() ? (<MainPage 
                                        socket={socket} 
                                        user={this.state.user}
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