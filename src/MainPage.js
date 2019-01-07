import React, {Component} from 'react';
import invo from './images/avatar/invo.jpg';

const ChatBox = props => {
    return (
        <div id="ChatBox">
            <div id="ChatWindow">
                <div className="ui segment" id="history">
                    {
                        props.messageData.map((messageItem, i) => {
                            return (
                                <div className="ui comments">
                                  <div className="comment">
                                    <a className="avatar">
                                      <img src={invo}></img>
                                    </a>
                                    <div className="content">
                                      <a className="author">{messageItem.name}</a>
                                      <div className="metadata">
                                        <div className="date">{messageItem.date}</div>
                                      </div>
                                      <div className="text">{messageItem.message}</div>
                                    </div>
                                  </div>
                                </div>
                            )
                        })
                    }
                </div> 
                {props.isTyping && <div id="status"> someone is typing...</div>}
            </div>
            <div id="ChatInput">
                <input id="message" type="text" placeholder="Message" />
                <button id="send">Send</button>
            </div>
        </div>
    );
}

class MainPage extends Component {
    state = {
        messageData: [
            {
                name: "Invoker",
                date: "123:123 AM",
                message: "this is a test",
            },
            {
                name: "Invoker",
                date: "123:123 AM",
                message: "this is the second test",
            },
        ],
        isTyping: true,
        
    };
    render() {
        return (
            <div className="ui grid">
                <div className="four wide column">
                    <h1>Friends list</h1>
                </div>
                <div className="six wide column">          
                    <ChatBox 
                        messageData={this.state.messageData}
                        isTyping={this.state.isTyping}
                    />
                </div>
                <div className="six wide column">
                    <h1>News feed</h1>
                </div>
            </div>
            
        );
    }
}
export default MainPage;