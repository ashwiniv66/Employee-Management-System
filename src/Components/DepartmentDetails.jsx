import React, {Component} from "react";
import DepartmentService from "./Service/DepartmentService";
export default class DepartmentDetails extends Component{
    constructor(props)
    {
        super(props)

        this.state={
            departid:' ',
            departname:' ',
           
            msg:' ',
            error:' '
        }
    }

    handleDepartName=(event)=>
    {
        this.setState({
            departname:event.target.value
        })
    }
    handleDepartId=(event)=>
    {
        this.setState({
            departid:event.target.value
        })
    }
    handleFormSubmission=(event)=>
    {
        event.preventDefault();
        this.saveDepartment(this.state)
    }

    saveDepartment(department)
    {
        DepartmentService.addDepartment(department).then(response=>
            {
                console.log(response) 
                this.setState({
                        departid:' ',
                        departname:' ',
                        
                        msg:response.data,
                        error:' '
                   
                })
                
            })
            .catch(error=>console.log(error))
    }
    render(){
        return(
        //     <body
        //     style={{
        //       backgroundImage: 
        //       "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dXNlcixjb21wYW55fHx8fHx8MTYzNTc2NzIzNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600')",
        //       backgroundSize: "cover",
        //       backgroundRepeat: "no-repeat",
        //       height: "1000px",
        //     }}
        //   >
        <div className="container">
            <div classname="name">
        <center>
            <h2 className="text-info"> Department Details</h2>
        </center>
            <hr/>
            <form onSubmit={this.handleFormSubmission}>
            <div className="form-group">
                    <label>DepartId</label>
                    <span className="required">*</span>
                    <input onChange={this.handleDepartId} value={this.state.departid} className="form-control"/>
                </div>
                <br/>
                <div className="form-group">
                    <label>DepartName</label>
                    <input onChange={this.handleDepartName} value={this.state.departname} className="form-control"/>
                </div>
                <br/>
                
                    <button className="submit">Send Enquiry</button>
                
                   
                 {
                 this.state.msg && <h5 className="alert alert-success">{this.state.msg}</h5>
                 }
                  </form>
        </div>
        </div>
        // </body>
        )

    }
}

