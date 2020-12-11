import React, { Component } from 'react'
import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import MessageField from '../MessageField/MessageField'
import './Layout.css'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChat: 1,
    }
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
          activeChat={this.props.chatList[this.state.activeChat - 1].name}
        />
        <div className="main">
          <ChatList
            chats={this.props.chatList}
            chatHandler={this.setActiveChat}
          />
          <MessageField />
        </div>
      </div>
    )
  }
}

export default Layout
