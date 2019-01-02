import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            username: '',
            password: ''
        };
        this.state = this.initialState;
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }
    handleSubmit = () => {
        const {username, password} = this.state;
        const {socket} = this.props;  
        var msg = {  
            method: "POST",  
            url: "API/register",
            authorization: "",  
            data: {
                username: username,
                password: password
            }  
        }; 
        socket.send(JSON.stringify(msg))
        socket.onmessage = function(event) {
            var message = event.data;
            console.log("Hello your account has been created!");
        };
    }
    render() {
        const {username, password} = this.state;
        return (
            <div>
                <h1>Register</h1>
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
                <Link to='/login'>Back to login!</Link>
            </div>
        );
    }
}
export default Register;