import React, { Component } from 'react'
import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import MessageField from '../MessageField/MessageField'
import './Layout.css'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      activeChat: +this.props.match.params.id,
    }
  }

  setActiveChat = (i) => {
    this.setState({
      activeChat: i,
    })
  }

  setActiveChatName = () => {
    if (this.state.chatList.length >= this.state.activeChat) {
      return this.state.chatList[this.state.activeChat - 1].name
    } else if (this.state.chatList.length < this.state.activeChat) {
      return 'Нет такого чата'
    } else return 'Welcome'
  }

  render() {
    return (
      <div className="Layout">
        <Header chatName={this.setActiveChatName()} />
        <div className="main">
          <ChatList
            chats={this.state.chatList}
            chatHandler={this.setActiveChat}
            activeChat={this.state.activeChat}
          />
          {!!this.state.activeChat &&
          this.state.chatList.length >= this.state.activeChat ? (
            <MessageField />
          ) : (
            <h2 style={{ color: '#065032' }}>Выберите чат из списка</h2>
          )}
        </div>
      </div>
    )
  }
}

export default Layout
