import React, {Component} from 'react';

const ChatBox = props => {
    return (
        <div id="ChatBox">
            <div id="ChatWindow">
                <div className="ui segment" id="history">
                    {
                        props.messageData.map((messageItem, i) => {
                            return (
                                <div className="ui comments" key={i}>
                                  <div className="comment">
                                    <a className="avatar">
                                      <img src="https://api.adorable.io/avatars/285/invoker"></img>
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

const FriendsList = props => {
    return (
      <div className="ui segment ">
        <h3>Friends you know</h3>
        <div className="ui middle aligned animated list">
            {
                props.knownFriends.map((friendItem, i) => {
                    return (
                        <div className="item" key={i}>
                          <div className="right floated content">
                            {friendItem.isOnline && <div className="dot"></div>}
                          </div>
                          <img className="ui avatar image" src="https://api.adorable.io/avatars/285/asiojdioasd" />
                          <div className="content">
                            <a className="header">{friendItem.name}</a>
                            <div className="description">{friendItem.pastMessage}</div>
                          </div>
                        </div>
                    )
                })
            }
        </div>
        <h3>People you may know</h3>
        <div className="ui middle aligned list">
            {
                props.potentialFriends.map((friendItem, i) => {
                    return (
                        <div className="item" key={i}>
                          <div className="right floated content">
                            <div className="ui button">Add</div>
                          </div>
                          <img className="ui avatar image" src="https://api.adorable.io/avatars/285/asiojdioasd" />
                          <div className="content">
                            <a className="header">{friendItem.name}</a>
                          </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
}

class MainPage extends Component {
    state = {
        messageData: [
            {
                name: "Invoker",
                avatar: "",
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
        knownFriends: [
            {
                name: "Windrunner",
                avatar: "",
                isOnline: true,
                pastMessage: "A wind of change is blowing.",
            },
            {
                name: "Crystal Maiden",
                avatar: "",
                isOnline: false,
                pastMessage: "Who calls the Crystal Maiden?",
            },
        ],
        potentialFriends: [
            {
                name: "Troll Warlord",
                avatar: "",
            },
            {
                name: "Huskar",
                avatar: "",
            },
        ],   
    };
    render() {
        return (
            <div className="ui grid">
                <div className="four wide column">
                    <FriendsList
                        knownFriends={this.state.knownFriends}
                        potentialFriends={this.state.potentialFriends}
                    />
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