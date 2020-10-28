import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withAlert } from 'react-alert'; 

class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired, 
        message: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProp){
        const { error, alert, message } = this.props;
        if(error !== prevProp.error){
            // alert.error('There is an error')
            if(error.msg.name) alert.error(`Name: ${error.msg.name.join()}`)
            if(error.msg.email) alert.error(`Email: ${error.msg.email.join()}`)
        }

        if(message !== prevProp.message){
            if(message.addUser) alert.success(message.addUser)
            if(message.deleteUser) alert.success(message.deleteUser)
        }
    }
    render(){
        return <Fragment />
    }

}
const mapStateToProps = state => ({
    error : state.errors, 
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts))