import React,{Component} from "react";
import  EmployeeService11  from "./Service/EmployeeService11";
export default class UpdateEmployee extends Component
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
        this.updateEmployee(this.state)
    }
    updateEmployee(employee)
    {
        EmployeeService11.updateEmployee(employee).then(response=>
            {
                console.log(response)
            }).catch(error=>console.log(error))
    }
    render()
    {
        return (
            <div className="container">
            <div className="name">
                <center>
            <h2 className="text-info">Update Employee</h2>
            </center>
            <hr/>
            <form onSubmit={this.handleForSubmission}>
                <div className="form-group">
                    <label>User Id</label>
                    <input onChange={this.handleuserId} value={this.state.userId} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={this.handlefirstName} value={this.state.firstName} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={this.handlelastName} value={this.state.lastName} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>DOB</label>
                    <input onChange={this.handledob} value={this.state.dob} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Email ID</label>
                    <input onChange={this.handleemail} value={this.state.email} className="form-control"/>
                </div>
                <button className="btn btn-primary mt-2 ">Update</button>
                {/* <button onClick={() => alert.show('Update Successfully')}></button> */}
            </form>
            </div>
            </div>
        )
    }
}