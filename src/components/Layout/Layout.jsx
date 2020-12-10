import React, { Component } from 'react'
import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import MessageField from '../MessageField/MessageField'
import ChatInput from '../ChatInput/ChatInput'
import './Layout.css'

class Layout extends Component {
  state = {
    messages: [
      {
        text: 'Привет',
        sender: 'me',
      },
    ],
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
  }

  componentDidUpdate() {
    this.timerBot = setTimeout(() => {
      if (
        this.state.messages[this.state.messages.length - 1].sender !== 'bot'
      ) {
        this.setState({
          messages: [
            ...this.state.messages,
            { text: 'Я робот!', sender: 'bot' },
          ],
        })
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timerBot)
  }

  sendHandler = (msg, sender) => {
    this.setState({
      messages: [...this.state.messages, { text: msg, sender: sender }],
    })
  }

  render() {
    return (
      <div className="Layout">
        <Header />
        <div className="main">
          <ChatList chats={this.state.chatList} />
          <div className="chatField">
            <MessageField messages={this.state.messages} />
            <ChatInput onClickHandler={this.sendHandler} />
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
