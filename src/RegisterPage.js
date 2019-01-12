import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

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
        const {socket, history, setUser} = this.props;
        var msg = {  
            Method: "POST",  
            URL: "users/signup",
            DATA: {
                username: username,
                password: password,
            }  
        }; 
        socket.send(JSON.stringify(msg));
        socket.onmessage = function(event) {
            let data = event.data;
            let obj = JSON.parse(data);
            if (obj.status === 200) {
                sessionStorage.setItem('authentication', obj.data.token);
                sessionStorage.setItem('user', JSON.stringify(obj.data.user));
                setUser(obj.data.user);
                history.push("/");
            }
            else {
                alert(obj.message);
            }
        };
    }
    render() {
        const {username, password} = this.state;
        return (
            <div className="ui middle aligned center aligned grid" style={{height: "100%"}}>
            <div className="column" style={{width: "500px"}}>
                <h1 className="ui teal image header">
                  <div className="content">
                    Create new account
                  </div>
                </h1>
                <form className="ui large form">
                  <div className="ui stacked segment">
                    <div className="field">
                      <div className="ui left icon input">
                        <i className="user icon"></i>
                   
                   
                   
                    <input 
                        placeholder="Username"
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={this.handleChange} />
                       
                      </div>
                    </div>
                    
                    <div className="field">
                      <div className="ui left icon input">
                        <i className="lock icon"></i>
                   
                    <input 
                        placeholder="Password"
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={this.handleChange}/>
                         
                      </div>
                    </div>
      
                    
                    <input className="ui fluid large teal submit button"
                        type="button" 
                        value="Register" 
                        onClick={this.handleSubmit} />
                  </div>      
                </form>
                <div className="ui message">
                  <Link to='/login'>Already have account? Back to login!</Link>
                </div>
            </div>
        </div>
        );
    }
}
export default withRouter(Register);