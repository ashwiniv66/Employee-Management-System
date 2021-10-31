import React from 'react';
import axios from 'axios';
import LoginSuccess from './LoginSuccess';
class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            password: '',
            successMsg: '',
            failedMsg: '',
            loggedIn: false
        }
    }
    handleUserId = (event) => {
        this.setState({
            userId: event.target.value
        })
    }
    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogout = () => {
        this.setState({
            loggedIn: false
        })
    }
    handleFormSubmission = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8080/users/login', this.state)
            .then((response) => {
                console.log(response.data.msg)
                if (response.data.msg !="Invalid UserId and password") {
                    this.setState
                        ({
                            userId: '',
                            password: '',
                            successMsg: response.data.msg,
                            loggedIn: true
                        })
                }
                else {
                    this.setState({
                        userId: '',
                        password: '',
                        failedMsg: response.data.msg,
                        loggedIn: false
                    })
                }

            }).catch((error) => {
                console.log(error)
                this.setState({
                    userId: '',
                    password: '',
                    msg: ''
                })
            })
    }

    render() {
        if (!this.state.loggedIn) {
            return (
                    <React.Fragment>
                       
                        <div className="container mt-3">
                            
                            <hr />
                            
                            <form className="form-wrapper" onSubmit={this.handleFormSubmission}>
                                <div className="name">
                                <h2>Login Page</h2>
                                    <label>UserId</label>
                                    <input onChange={this.handleUserId} value={this.state.userId} className="form-control" />
                                </div>
                                <div className="name">
                                    <label>Password</label>
                                    <input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control" />
                                </div>
                                <div>
                                <button className="submit" >Login</button>
                                </div>
                            </form>
                            
                        </div>
                        <h5 className="text-danger container mt-2">{this.state.failedMsg}</h5>
                    </React.Fragment>
                    )
        }
         else{
             return(
                    <div className="container">
                        <h4 className="text-danger">{this.state.successMsg}</h4>
                        <LoginSuccess />
                        <div style={{float: 'right'}}>
                        <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                        </div>
                    </div>
                    )
            }
        }
    }
export default Login;