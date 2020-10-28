import React, { Component, Fragment } from 'react'; 
import axios from 'axios';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'; 
import store from '../store.js'
import UserList from './UserList'
import AddUser from './AddUser'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Alerts from './layouts/Alerts.js'
import { Provider as AlertProvider } from 'react-alert'; 
import AlertTemplate from 'react-alert-template-basic';

const alertOptions = {
    timeout: 3000, 
    position: 'top center'
};

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            regex: '',
            text: '',
            msg: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
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
        axios.post('api/test/', regex)
            .then(res => {
                console.log(res, 'res');
            })
            .catch(err => {
                console.log(err, 'err');
            })

        axios.get('myview/')
            .then(res => {
                console.log(res, 'res');
                this.setState({
                    msg: res.data
                })
            })
            .catch(err => {
                console.log(err, 'err');
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
       console.log(this.state, 'this.state');
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                    <Switch>
                        <Fragment>
                            <h1>{this.state.msg}</h1>
                            <Alerts />
                            <form action="" encType="multipart/form-data" className="card card-body mt-4 mb-4">
                                <h2 style={{marginBottom: '17px'}}>Regex Query Tool</h2>
                                <div className="form-group">
                                    <label>Add Regex</label>
                                    <input type="text" name="regex" onChange={this.handleChange} className="form-control"/><br/>
                                    <label>Add text</label>
                                    <textarea type="text" name="text" onChange={this.handleChange} className="form-control"/><br/>
                                    <button onClick={this.handleClick.bind(this)} className="btn btn-primary">click</button>
                                </div>
                            </form>
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