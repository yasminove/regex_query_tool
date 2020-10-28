import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {getUsers, deleteUser} from '../actions/users'
import { GET_USERS } from '../reducers/users'
class UserList extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired, 
        getUsers: PropTypes.func.isRequired, 
        deleteUser: PropTypes.func.isRequired
    }
    componentDidMount(){
        this.props.getUsers()
    }
    render() {
        return (
          <Fragment>
            <h2>Users</h2>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                    <th></th>
                </thead>
                <tbody>
                    { this.props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={this.props.deleteUser.bind(this, user.id)}className="btn btn-sm btn-danger">Delete</button></td>
                        </tr>
                    )) }
                </tbody>

            </table>
          </Fragment>
        );
    }
}



const mapStateToProps = state => ({
    users: state.users.users
})

export default connect(mapStateToProps, { getUsers, deleteUser })(UserList);



