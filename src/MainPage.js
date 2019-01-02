import React, {Component} from 'react';
import invo from './images/avatar/invo.jpg';

const ChatBox = () =>
{
    return (
        <div id="ChatBox">
            <div id="ChatWindow">
                <div className="ui segment" id="history">
                    <div className="ui comments">
                      <div className="comment">
                        <a className="avatar">
                          <img src={invo}></img>
                        </a>
                        <div className="content">
                          <a className="author">Invoker</a>
                          <div className="metadata">
                            <div className="date">69:96 PM</div>
                          </div>
                          <div className="text">
                            Whosoever stands against me, stands briefly.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ui comments">
                      <div className="comment">
                        <a className="avatar">
                          <img src={invo}></img>
                        </a>
                        <div className="content">
                          <a className="author">Invoker</a>
                          <div className="metadata">
                            <div className="date">69:96 PM</div>
                          </div>
                          <div className="text">
                            Whosoever stands against me, stands briefly.
                          </div>
                        </div>
                      </div>
                    </div>
                </div>  
                <div id="status"> someone is typing...</div>
            </div>
            <div id="ChatInput">
                <input id="message" type="text" placeholder="Message" />
                <button id="send">Send</button>
            </div>
        </div>
    );
}

class MainPage extends Component {
    render() {
        return (
            <ChatBox />
        );
    }
}
export default MainPage;