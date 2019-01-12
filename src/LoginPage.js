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
        
        <div className="ui middle aligned center aligned grid" style={{height: "100%"}}>
            <div className="column" style={{width: "500px"}}>
                <h1 className="ui teal image header">
                  <div className="content">
                    Log-in to your account
                  </div>
                </h1>
                <form className="ui large form">
                  <div className="ui stacked segment">
                    <div className="field">
                      <div className="ui left icon input">
                        <i className="user icon"></i>
                   
                    <input 
                        placeHolder="Username"
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
                        placeHolder="Password"
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={this.handleChange} />
                        
                      </div>
                    </div>
                    
                    
                    
                    
                    
                    <input className="ui fluid large teal submit button"
                        type="button" 
                        value="Submit" 
                        onClick={this.handleSubmit} />
                        
                    {true && <div className="ui error message"><h3>Login not successful, please try again!</h3></div>} 
                        
                   </div>
                </form>
                <div className="ui message">
                  <Link to='/register'>Don't have account? Create one!</Link>
                </div>
            </div>
        </div>  
        );
    }
}
export default withRouter(Login);