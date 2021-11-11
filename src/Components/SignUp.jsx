import React,{Component} from "react";
import  SignUpService  from "./Service/SignUpService";
export default class SignUp extends Component
{
    constructor(props){
        super(props)
        this.state =
        {
            userId:'',
            firstName:'',
            lastName:'',
            dob:'',
            email:''
        }
    }

    handleuserId=(event)=>
    {
        this.setState(
            {
                userId:event.target.value
            }
        )
    }

    handlefirstName=(event)=>
    {
        this.setState(
            {
                firstName:event.target.value
            }
        )
    }

    handlelastName=(event)=>
    {
        this.setState(
            {
                lastName:event.target.value
            }
        )
    }

    handledob=(event)=>
    {
        this.setState(
            {
                dob:event.target.value
            }
        )
    }

    handleemail=(event)=>
    {
        this.setState(
            {
                email:event.target.value
            }
        )
    }

    handleForSubmission=(event)=>
    {
        event.preventDefault()
        this.saveEmployee(this.state)
    }

    saveEmployee(employee)
    {
        SignUpService.saveEmployee(employee).then(response=>
            {
                console.log(response)
                alert(" You have Signed In Successfully");
            }).catch(error=>console.log(error))
    }

    render()
    {
        return (
            <div className="container">
            <form className="form-wrapper" onSubmit={this.handleForSubmission}>
                <div className="name">
                <h2 className="title">Create Account</h2>
                <hr/>
                    <label>User Id</label>
                    <input onChange={this.handleuserId} value={this.state.userId} className="form-control"/>
                </div>

                <div className="name">
                    <label>First Name</label>
                    <input onChange={this.handlefirstName} value={this.state.firstName} className="form-control"/>
                </div>

                <div className="name">
                    <label>Last Name</label>
                    <input onChange={this.handlelastName} value={this.state.lastName} className="form-control"/>
                </div>

                <div className="name">
                    <label>DOB</label>
                    <input onChange={this.handledob} value={this.state.dob} className="form-control"/>
                </div>

                <div className="name">
                    <label>Email ID</label>
                    <input onChange={this.handleemail} value={this.state.email} className="form-control"/>
                </div>
                <button className="submit">Sign Up</button>
               
            </form>
            </div>
            
        )
    }
}