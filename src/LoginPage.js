import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            username: '',
            password: '',
            loginFailed: false, 
        };
        this.state = this.initialState;
        this.state.socket = props.socket;
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }
    handleSubmit = () => {
        const {username, password} = this.state;
        const {socket, history, setUser} = this.props;
        let msg = {  
            Method: "POST",  
            URL: "users/login",
            DATA: {
                username: username,
                password: password,
            }  
        }; 
        socket.send(JSON.stringify(msg))
        socket.onmessage = function(event) {
            let data = event.data;
            let obj = JSON.parse(data);
            // ============ DEBUG ===============
            sessionStorage.setItem('authentication', data);
            let user = {
                username: "me", 
            }
            sessionStorage.setItem('user', JSON.stringify(user));
            history.push("/");
            // ==================================
            if (obj.status === 200) {
                sessionStorage.setItem('authentication', obj.data.token);
                sessionStorage.setItem('user', JSON.stringify(obj.data.user));
                setUser(obj.data.user);
                history.push("/");
            }
            else {
                // handle fail
            }
        };
    }
    render() {
        const {username, password, loginFailed} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <label>Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={this.handleChange} />
                    <label>Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        value={password} 
                        onChange={this.handleChange}/>
                    <input 
                        type="button" 
                        value="Submit" 
                        onClick={this.handleSubmit} />
                </form>
                {loginFailed && <h3>Login not successful, please try again</h3>}
                <Link to='/register'>Don't have account? Create one!</Link>
            </div>
        );
    }
}
export default withRouter(Login);