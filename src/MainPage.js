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

const NewsFeed = props => {
    return (
      <div className="ui segment">
        <div className="ui feed">
        {
            props.feedData.map((feedItem, i) => {
                return (
                  <div className="event" key={i}>
                    <div className="label">
                      <img src="https://api.adorable.io/avatars/285/aasdioasd" />
                    </div>
                    <div className="content">
                      <div className="summary">
                        <a>{feedItem.name}</a> posted on his page
                        <div className="date">
                          3 days ago
                        </div>
                      </div>
                      <div className="extra text">
                        {feedItem.message}
                      </div>
                      <div className="meta">
                        <a className="like">
                          <i className="like icon"></i> 5 Likes
                        </a>
                      </div>
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
        feedData: [
            {
                name: "Ursa",
                avatar: "",
                message: "Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.",
            },
            {
                name: "Monkey King",
                avatar: "",
                message: "After Supper the Master dismissed all except Sun Wukong, Zhu Bajie and Sha the Monk. He took them out with him and said, \"Look at that wonderful moolight. It makes me long for the time when I can return home.",
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
                    <NewsFeed 
                        feedData={this.state.feedData}
                    />
                </div>
            </div>   
        );
    }
}
export default MainPage;