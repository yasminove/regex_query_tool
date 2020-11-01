import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getRegexResult } from '../actions/regex'
import { addRegex } from '../actions/regex'

class AddRegex extends Component {
    static propTypes = {
        msg: PropTypes.string,
        getRegexResult: PropTypes.func.isRequired,
        addRegex: PropTypes.func.isRequired
    }

    state = {
        regex: '',
        text: '',
        msg: ''
    }
        
    
    handleChange = (e) =>  this.setState({[e.target.name] : e.target.value})

       
    componentDidUpdate(){
        console.log('upppppp');
    }
  
    handleClick(e){
        e.preventDefault();
        console.log('hii');
        // console.log(this.state.regex);
        // console.log(this.state.text);
        // axios.post(`api/test/?regex=${this.state.regex}&text=${this.state.regex}`)
        const regex = {
            text: this.state.text,
            regex: this.state.regex
        }
        
       this.props.addRegex(regex)
       if(this.state.text !== '' && this.state.regex !== ''){
            this.props.getRegexResult()
       }
       
       this.setState({
           regex : "",
           text : ""
       })

        // axios.get('api/test/')
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))    
        // console.log('hiiii');
        // const user = {
        //     name: "soso", 
        //     email: "soso@hotmail.com"
        // }
        // axios.post('api/users/', {
        //     name: "ddd", 
        //     email: "dddd@hotmail.com"
        // })
        //     .then(res => console.log(res, 'res'))
        //     .catch(err => console.log(err, 'errccccc'))

  
    }
    render(){
        console.log(this.props, 'props');
        const { regex, text } = this.state;
        return (
            <div>
            <h1>{this.props.msg}</h1>
            <form action="" encType="multipart/form-data" className="card card-body mt-4 mb-4" style={{margin: '25px'}}>
                <h2 style={{marginBottom: '17px'}}>Regex Query Tool</h2>
                    <div className="form-group">
                        <label>Add Regex</label>
                        <input type="text" name="regex" onChange={this.handleChange} className="form-control" value={regex}/><br/>
                        <label>Add text</label>
                        <textarea type="text" name="text" onChange={this.handleChange} className="form-control" value={text}/><br/>
                        <button onClick={this.handleClick.bind(this)} className="btn btn-primary">click</button>
                    </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    msg: state.regex.msg,
})

export default connect(mapStateToProps, { getRegexResult, addRegex })(AddRegex);