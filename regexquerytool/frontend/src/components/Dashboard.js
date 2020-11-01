import React, { Component, Fragment } from 'react'; 

import AddUser from './AddUser'
import UserList from './UserList'

class Dashboard extends Component {
    render(){
        return (
            <Fragment>
                <AddUser />
                <UserList />
            </Fragment>
        )
    }
}

export default Dashboard;