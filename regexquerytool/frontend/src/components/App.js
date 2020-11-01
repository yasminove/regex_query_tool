import React, { Component, Fragment } from 'react'; 
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'; 
import store from '../store.js'

import UserList from './UserList'
import AddUser from './AddUser'
import Alerts from './layouts/Alerts.js'
import AddRegex from './AddRegex';
import Dashboard from './Dashboard'
import Register from './accounts/Register'
import Login from './accounts/Login'
import Header from './layouts/Header'
import PrivateRoute from './common/PrivateRoute'

import { loadUser } from '../actions/auth'

import { Provider as AlertProvider } from 'react-alert'; 
import AlertTemplate from 'react-alert-template-basic';

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const alertOptions = {
    timeout: 3000, 
    position: 'top center'
};

class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser())
    }
   
    render(){
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header /> 
                            <Alerts />
                            <Switch>
                                <PrivateRoute path='/' exact component={AddRegex}  />
                                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />    
                            </Switch>
                      
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider> 
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))