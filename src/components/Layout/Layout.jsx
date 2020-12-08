import React, { Component } from 'react'
import MessageField from '../MessageField/MessageField'
import ChatInput from '../ChatInput/ChatInput'
import './Layout.css'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          text: 'Привет',
          sender: 'me',
        },
      ],
    }
    this.timerBot = null
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
        <MessageField messages={this.state.messages} />
        <ChatInput text="Отправить" onClickHandler={this.sendHandler} />
      </div>
    )
  }
}

export default Layout
