import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'

export default class Router extends React.Component {
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
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Layout chatList={this.state.chatList} />}
        />

        {this.state.chatList.map((chat, i) => {
          return (
            <Route
              exact
              path={`/chat/${chat.id}/`}
              render={() => <Layout chatList={this.state.chatList} />}
              //   key={chat.id}
              //   key={i}
              // setActiveChat func stop working correctly if key attribute is here
            />
          )
        })}
      </Switch>
    )
  }
}
