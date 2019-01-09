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
                            {friendItem.isOnline == 1 && <div className="dot"></div>}
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
        <h3>People you may know</h3>
        <div className="ui middle aligned list">
            {
                props.requestedFriends.map((friendItem, i) => {
                    return (
                        <div className="item" key={i}>
                          <div className="right floated content">
                            <button className="ui positive basic button" onClick={() => props.handleAccept(friendItem.username)}>Accept</button>
                          </div>
                          <img className="ui avatar image" src="https://api.adorable.io/avatars/285/asiojdioasd" />
                          <div className="content">
                            <a className="header">{friendItem.username}</a>
                          </div>
                        </div>
                    )
                })
            }{
                props.potentialFriends.map((friendItem, i) => {
                    return (
                        <div className="item" key={i}>
                          <div className="right floated content">
                            <button className="ui basic button" onClick={() => props.handleRequest(friendItem.username)}> <i className="icon user" />Add</button>
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
        <div className="ui modal">
          <i className="close icon"></i>
          <div className="header">
            Profile Picture
          </div>
          <div className="image content">
            <div className="ui medium image">
              <img src={"https://api.adorable.io/avatars/285/" + props.user.username} />
            </div>
            <div className="description">
              <div className="ui header">We've auto-chosen a profile image for you.</div>
              <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </div>
          </div>
          <div className="actions">
            <div className="ui black deny button">
              Nope
            </div>
            <div className="ui positive right labeled icon button">
              Yep, that's me
              <i className="checkmark icon"></i>
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
            requestedFriends: [
                {
                    username: "Bristle back",
                    avatar: "",
                },
                {
                    username: "Sniper",
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
            },
            modalData: {
                username: "Lina",
                avatar: ""
            }
        };
    }
    
    componentDidMount() {
        this.socket = this.props.socket;
        
        var msgKnownFriends = {  
            Method: "GET",  
            URL: "friend",
            Authorization: sessionStorage.getItem('authentication'),
        }; 
        this.socket.send(JSON.stringify(msgKnownFriends))
        
        
        
        
        var msgPotentialFriends = {  
            Method: "GET",  
            URL: "friend?isrequested=1",
            Authorization: sessionStorage.getItem('authentication'),
        }; 
        console.log(msgPotentialFriends);
        this.socket.send(JSON.stringify(msgPotentialFriends))
        
        
        
        
        
        var msgRequestedFriends = {  
            Method: "GET",  
            URL: "friend?isrequested=2",
            Authorization: sessionStorage.getItem('authentication'),
        }; 
        console.log(msgRequestedFriends);
        this.socket.send(JSON.stringify(msgRequestedFriends))
        
        
        
        
        
        
        var findIndex = (array, attr, value) => {
            console.log(array);
            console.log("value: " + value);
            for(var i = 0; i < array.length; i += 1) {
                console.log("item: " + array[i].username); 
                if(array[i].username == value) {
                    return i;
                }
            }
            return -1;
        }
        var test = findIndex(this.state.requestedFriends, "username", "vinhloc2");
        console.log("test: " + test);
        this.socket.onmessage = (e) => { 
            console.log(e.data);
            let objs = JSON.parse(e.data);
            console.log(objs);
            // get friend list
            if(objs.status === 200 && objs.method === 'GET' && objs.url === 'friend') { 
                this.setState({
                  knownFriends: [...this.state.knownFriends, ...objs.data]  
                });
            }
            // get unknown people
            else if(objs.status === 200 && objs.method === 'GET' && objs.url === 'friend?isrequested=2') {
                this.setState({
                  potentialFriends: [...this.state.potentialFriends, ...objs.data]  
                });
                console.log("unknown: " + this.state.potentialFriends);
            }
            // get requested people
            else if(objs.status === 200 && objs.method === 'GET' && objs.url === 'friend?isrequested=1') {
                this.setState({
                  requestedFriends: [...this.state.requestedFriends, ...objs.data]  
                });
                console.log("requested: " + this.state.requestedFriends);
            }
            // accept requested friend
            else if(objs.status === 200 && objs.method === 'POST' && objs.url === 'friend/accept') {
                var arrayRequested = [...this.state.requestedFriends]; 
                console.log(arrayRequested);
                var index = findIndex(arrayRequested, "username", objs.data.username);
                console.log(index);
                if (index !== -1) {
                    var user = arrayRequested[index];
                    arrayRequested.splice(index, 1);
                    user.isOnline = objs.data.isOnline;
                    
                    var arrayFriend = [...this.state.knownFriends]; 
                    arrayFriend.push(user);
                    this.setState({requestedFriends: arrayRequested, knownFriends: arrayFriend});
                }   
            }
            else if(objs.status === 200 && objs.method === 'POST' && objs.url === 'friend/add') {
                var arrayPotential = [...this.state.potentialFriends]; 
                console.log(arrayPotential);
                var index = findIndex(arrayPotential, "username", objs.data.username);
                console.log(index);
                if (index !== -1) {
                    var user = arrayPotential[index];
                    arrayPotential.splice(index, 1);
                    
                    var arrayRequested = [...this.state.requestedFriends]; 
                    arrayRequested.push(user);
                    this.setState({potentialFriends: arrayPotential, requestedFriends: arrayRequested});
                }   
            }
        };  
    };
    
    openProfile = userId => {
        window.openModalProfile();
    };
    
    handleAccept = target => {
        var msgAccept = {  
            Method: "POST",  
            URL: "friend/accept",
            Authorization: sessionStorage.getItem('authentication'),
            DATA: {
                username: target,
            }
        }; 
        console.log(msgAccept);
        this.socket.send(JSON.stringify(msgAccept))
    };
    
    handleRequest = target => {
        var msgAccept = {  
            Method: "POST",  
            URL: "friend/add",
            Authorization: sessionStorage.getItem('authentication'),
            DATA: {
                username: target,
            }
        }; 
        console.log(msgAccept);
        this.socket.send(JSON.stringify(msgAccept))
    };
    
    render() {
        return (
            <div className="ui grid">
                <div className="four wide column">
                    <FriendsList
                        knownFriends={this.state.knownFriends}
                        potentialFriends={this.state.potentialFriends}
                        requestedFriends={this.state.requestedFriends}
                        handleAccept={this.handleAccept}
                        handleRequest={this.handleRequest}
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