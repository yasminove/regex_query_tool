import React, { Component, Fragment } from 'react'; 

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'; 
import store from '../store.js'
import UserList from './UserList'
import AddUser from './AddUser'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Alerts from './layouts/Alerts.js'
import { Provider as AlertProvider } from 'react-alert'; 
import AlertTemplate from 'react-alert-template-basic';
import AddRegex from './AddRegex';

const alertOptions = {
    timeout: 3000, 
    position: 'top center'
};

class App extends Component {
   
    render(){
       console.log(this.state, 'this.state');
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                    <Switch>
                        <Fragment>
                            <Alerts />
                            <AddRegex />
                            <Route path="/add-user"> 
                                <AddUser />
                            </Route>
                            <Route path="/user-list"> 
                                <UserList />
                            </Route> 
                        </Fragment>
                    </Switch>
                    </Router>
                </AlertProvider>
            </Provider> 
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))