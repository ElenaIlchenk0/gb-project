import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import MessageField from '../MessageField/MessageField'
import './Layout.css'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChat:
        this.props.match && this.props.match.params
          ? this.props.match.params.id
          : {},
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // this.timerBot = setTimeout(() => {
    //   if (
    //     Object.keys(prevProps.msgs).length <
    //       Object.keys(this.props.msgs).length &&
    //     Object.values(this.props.msgs)[
    //       Object.values(this.props.msgs).length - 1
    //     ].sender !== 'bot'
    //   ) {
    //     this.sendHandler('Я бот!', 'bot')
    //   }
    // }, 1000)
  }

  componentWillUnmount() {
    // clearTimeout(this.timerBot)
  }

  setActiveChat = (i) => {
    this.setState({
      activeChat: i,
    })
  }

  setActiveChatName = () => {
    const { activeChat } = this.state
    const { chats } = this.props

    if (Object.keys(chats).length >= activeChat) {
      return Object.values(chats)[activeChat - 1].name
    } else if (Object.keys(chats).length < activeChat) {
      return 'Нет такого чата'
    } else return 'Welcome'
  }

  render() {
    return (
      <div className="Layout">
        <Header
          chatName={this.setActiveChatName()}
          profile={this.props.isProfile}
        />
        <div className="main">
          <ChatList
            chatHandler={this.setActiveChat}
            activeChat={this.state.activeChat}
          />
          {!!this.state.activeChat &&
          Object.keys(this.props.chats).length >= this.state.activeChat ? (
            <MessageField activeChat={this.state.activeChat} />
          ) : (
            <h2 style={{ color: '#065032' }}>Выберите чат из списка</h2>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ chatReducer, msgReducer }) => ({
  chats: chatReducer.chatList,
})

export default connect(mapStateToProps)(Layout)
