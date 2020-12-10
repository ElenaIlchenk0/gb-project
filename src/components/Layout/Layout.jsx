import React, { Component } from 'react'
import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import MessageField from '../MessageField/MessageField'
import './Layout.css'

class Layout extends Component {
  state = {
    chatList: [
      {
        name: 'Chat1',
        id: 1,
      },
      {
        name: 'Chat2',
        id: 2,
      },
      {
        name: 'Chat3',
        id: 3,
      },
    ],
    activeChat: 1,
  }

  setActiveChat = (i) => {
    this.setState({
      activeChat: i,
    })
  }

  render() {
    return (
      <div className="Layout">
        <Header
          activeChat={this.state.chatList[this.state.activeChat - 1].name}
        />
        <div className="main">
          <ChatList
            chats={this.state.chatList}
            chatHandler={this.setActiveChat}
          />
          <MessageField />
        </div>
      </div>
    )
  }
}

export default Layout
