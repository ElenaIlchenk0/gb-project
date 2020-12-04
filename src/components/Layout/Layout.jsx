import React, { Component } from 'react';
import MessageField from '../MessageField/MessageField';
import Button from '../Button/Button';
import './Layout.css';

class Layout extends Component {
  state = {
    messages: ['Привет', 'Как дела?'],
  };

  sendHandler = (msg) => {
    this.setState({
      messages: [...this.state.messages, msg],
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
