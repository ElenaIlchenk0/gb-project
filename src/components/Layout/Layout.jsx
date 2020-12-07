import React, { Component } from 'react';
import MessageField from '../MessageField/MessageField';
import Button from '../Button/Button';
import './Layout.css';

class Layout extends Component {
  state = {
    messages: [
      {
        text: 'Привет',
        sender: 'me',
      },
    ],
  };

  componentDidUpdate() {
    setTimeout(() =>
      {
        if (this.state.messages[this.state.messages.length-1].sender !== 'bot') {
          this.setState(
              { messages: [ ...this.state.messages, {text:'Я робот!', sender:'bot'} ] })
        }
      }, 1000
    );
  }

  sendHandler = (msg, sender) => {
    this.setState({
      messages: [...this.state.messages, {text:msg, sender:sender}],
    });
  };

  render() {
    return (
      <div className="Layout">
        <MessageField messages={this.state.messages} />
        <Button text="Отправить" onClickHandler={this.sendHandler} />
      </div>
    );
  }
}

export default Layout;
