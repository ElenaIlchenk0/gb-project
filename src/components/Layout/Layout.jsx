import React, { Component } from 'react'
import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import MessageField from '../MessageField/MessageField'
import './Layout.css'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msgs: {
        1: { text: 'Привет!', sender: 'bot' },
        2: { text: 'Здравствуйте!', sender: 'bot' },
        3: { text: 'Hi!', sender: 'bot' },
      },
      chatList: {
        1: { name: 'Чат 1', messageList: [1] },
        2: { name: 'Чат 2', messageList: [2] },
        3: { name: 'Чат 3', messageList: [3] },
      },
      contactList: ['Alexandra', 'Den', 'Filipp'],
      activeChat:
        this.props.match && this.props.match.params
          ? this.props.match.params.id
          : {},
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.timerBot = setTimeout(() => {
      if (
        Object.keys(prevState.msgs).length <
          Object.keys(this.state.msgs).length &&
        Object.values(this.state.msgs)[
          Object.values(this.state.msgs).length - 1
        ].sender !== 'bot'
      ) {
        this.sendHandler('Я бот!', 'bot')
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timerBot)
  }

  sendHandler = (text, sender) => {
    const { msgs, chatList, activeChat } = this.state

    const messageId = Object.keys(msgs).length + 1

    this.setState({
      msgs: { ...msgs, [messageId]: { text, sender } },
      chatList: {
        ...chatList,
        [activeChat]: {
          ...chatList[activeChat],
          messageList: [...chatList[activeChat]['messageList'], messageId],
        },
      },
    })
  }

  setActiveChat = (i) => {
    this.setState({
      activeChat: i,
    })
  }

  setActiveChatName = () => {
    const { chatList, activeChat } = this.state

    if (Object.keys(chatList).length >= activeChat) {
      return Object.values(chatList)[activeChat - 1].name
    } else if (Object.keys(chatList).length < activeChat) {
      return 'Нет такого чата'
    } else return 'Welcome'
  }

  addChat = (title) => {
    const { chatList } = this.state

    this.setState({
      chatList: {
        ...chatList,
        [Object.keys(chatList).length + 1]: { name: title, messageList: [] },
      },
    })
  }

  render() {
    return (
      <div className="Layout">
        <Header
          chatName={this.setActiveChatName()}
          profile={this.props.isProfile}
          activeChat={this.state.activeChat}
        />
        <div className="main">
          <ChatList
            chats={this.state.chatList}
            contacts={this.state.contactList}
            chatHandler={this.setActiveChat}
            activeChat={this.state.activeChat}
            addChat={this.addChat}
          />
          {!!this.state.activeChat &&
          Object.keys(this.state.chatList).length >= this.state.activeChat ? (
            <MessageField
              msgs={this.state.msgs}
              chats={this.state.chatList}
              activeChat={this.state.activeChat}
              send={this.sendHandler}
            />
          ) : (
            <h2 style={{ color: '#065032' }}>Выберите чат из списка</h2>
          )}
        </div>
      </div>
    )
  }
}

export default Layout
