import React, { Component } from 'react';
import { addUser } from '../actions/users'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AddUser extends Component {
    state = {
        name: '',
        email: ''
    }

    static propTypes = {
        addUser: PropTypes.func.isRequired
    }

    onChange = e => this.setState({[e.target.name] : e.target.value})
    onSubmit = e => {
        e.preventDefault();
        const { name, email } = this.state;
        const user = { name, email }
        console.log(user, 'user');
        this.props.addUser(user)
        this.setState({
            name: "", 
            email: ""
        })
    }
    render(){
        const { name, email } = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add User</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                          className="form-control"
                          type="text"
                          name="name"
                          onChange={this.onChange}
                          value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={this.onChange}
                          value={email}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {addUser})(AddUser);