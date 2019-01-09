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
                                      <img src={messageItem.avatar}></img>
                                    </a>
                                    <div className="content">
                                      <a className="author" onClick={() => props.openProfile(messageItem.username)}>{messageItem.username}</a>
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
                    {props.isTyping && <div id="status"> someone is typing...</div>}
                </div> 
            </div>
            <div id="inputChatBox" className="ui icon input">
              <i className="telegram plane icon"></i>
              <input type="text" placeholder="Type a message..." />
            </div>
        </div>
    );
};

const FriendsList = props => {
    return (
    <div id="friendsList">
      <div className="ui segment ">
        <div id="inputFriendsList" className="ui icon input">
          <i className="search icon"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <h3>Friends</h3>
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
                            <a className="header">{friendItem.username}</a>
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
                            <a className="header">{friendItem.username}</a>
                          </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
    )
};

const NewsFeed = props => {
    return (
      <div id="newsFeed">
        <div className="ui feed segment">
          <div className="event">
            <div className="label">
              <img src="https://api.adorable.io/avatars/285/ajhgfdsioasd" />
            </div>
            <div className="content">
              <div className="ui form">
                <textarea rows="3" placeholder="What's on your mind..."></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="ui feed segment">
        {
            props.feedData.map((feedItem, i) => {
                return (
                  <div className="event" key={i}>
                    <div className="label">
                      <img src="https://api.adorable.io/avatars/285/aasdioasd" />
                    </div>
                    <div className="content">
                      <div className="summary">
                        <a>{feedItem.username}</a> posted on his page
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
};

const Profile = props => {
    return (
        <div class="ui modal">
          <i class="close icon"></i>
          <div class="header">
            Profile Picture
          </div>
          <div class="image content">
            <div class="ui medium image">
              <img src={"https://api.adorable.io/avatars/285/" + props.user.username} />
            </div>
            <div class="description">
              <div class="ui header">We've auto-chosen a profile image for you.</div>
              <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </div>
          </div>
          <div class="actions">
            <div class="ui black deny button">
              Nope
            </div>
            <div class="ui positive right labeled icon button">
              Yep, that's me
              <i class="checkmark icon"></i>
            </div>
          </div>
        </div>
    );
};

class MainPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        messageData: [
            {
                username: "Invoker",
                avatar: "https://api.adorable.io/avatars/285/Invoker",
                date: "123:123 AM",
                message: "this is a test",
            },
            {
                username: "Invoker",
                avatar: "https://api.adorable.io/avatars/285/Invoker",
                date: "123:123 AM",
                message: "this is the second test",
            },
        ],
        isTyping: true,
        knownFriends: [
            {
                username: "Windrunner",
                avatar: "",
                isOnline: true,
                pastMessage: "A wind of change is blowing.",
            },
            {
                username: "Crystal Maiden",
                avatar: "",
                isOnline: false,
                pastMessage: "Who calls the Crystal Maiden?",
            },
        ],
        potentialFriends: [
            {
                username: "Troll Warlord",
                avatar: "",
            },
            {
                username: "Huskar",
                avatar: "",
            },
        ],
        feedData: [
            {
                username: "Ursa",
                avatar: "",
                message: "Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.",
            },
            {
                username: "Monkey King",
                avatar: "",
                message: "After Supper the Master dismissed all except Sun Wukong, Zhu Bajie and Sha the Monk. He took them out with him and said, \"Look at that wonderful moolight. It makes me long for the time when I can return home.",
            },
        ],
        user: {
            username: "Spirit Breaker",
            avatar: "",
        }
        };
    }
    
    
    componentDidMount() {
        this.socket = this.props.socket;
        
        this.socket.onmessage = (e) => { 
            console.log(e.data);
        };
        
        setInterval( _ =>{
            this.socket.send( Math.random() )
        }, 2000 )
    };
    
    openProfile = userId => {
        window.openModalProfile();
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
                        openProfile={this.openProfile}
                        messageData={this.state.messageData}
                        isTyping={this.state.isTyping}
                    />
                </div>
                <div className="six wide column">
                    <NewsFeed 
                        feedData={this.state.feedData}
                    />
                </div>
                <Profile 
                    user={this.state.user} 
                />
            </div>   
        );
    }
}
export default MainPage;