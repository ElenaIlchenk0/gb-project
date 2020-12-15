import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/profile" render={() => <Layout isProfile />} />
        <Route exact path="/chat/:id/" component={Layout} />
      </Switch>
    )
  }
}
