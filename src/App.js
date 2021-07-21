import { Card } from 'antd';
import Login from './component/login';
import Home from './component/home';
import Regist from './component/regist';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.less';
import React from 'react';
import RequestUtil from './request';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: false,
      loading: false
    }
  }

  componentDidMount() {
    this.getAuth()
  }

  getAuth = async () => {
    this.setState({
      loading: true
    })

    let response = await RequestUtil.GET("/api/v1/auth2/auth")
    console.log("12312312312")
    this.setState({
      loading: false,
      status: response && response.status ? response.status : false
    })
  }

  render() {
    return (
      <Card loading={this.state.loading}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home status={this.state.status}/>
            </Route>
            <Route path="/regist">
              <Regist status={this.state.status}/>
            </Route>
            <Route path="/login">
              <Login status={this.state.status}/>
            </Route>
            <Route path="/">
              <Redirect to="/home"/>
            </Route>
            <Route path="*">
              <h1> not found</h1>
            </Route>
          </Switch>
        </Router>
      </Card>
      
    )
  }
}
