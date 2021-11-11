import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ComplianceService from "./Service/ComplianceService";

export default class Compliance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rlType: "",
      details: "",
      createDate: "",
      empCount: "",
      stsCount: "",
      status: "",
      msg: "",
      error: "",
    };
  }

  handleRlType = (event) => {
    this.setState({
      rlType: event.target.value,
    });
  };

  handleDetails = (event) => {
    this.setState({
      details: event.target.value,
    });
  };

  handleDate = (event) => {
    this.setState({
      createDate: event.target.value,
    });
  };

  handleEmpCount = (event) => {
    this.setState({
      empCount: event.target.value,
    });
  };

  handleStsCount = (event) => {
    this.setState({
      stsCount: event.target.value,
    });
  };

  handleStatus = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  handleForSubmission = (event) => {
    event.preventDefault();
    this.saveCompliance(this.state);
  };

  saveCompliance(Compliance) {
    ComplianceService.addCompliance(Compliance)
      .then((response) => {
        console.log(response);
        this.setState({
          rlType: "",
          details: "",
          createDate: "",
          empCount: "",
          stsCount: "",
          status: "",
          msg: response.data,
          error: "",
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-info">Register Compliance</h2>
        <hr />
        <form onSubmit={this.handleForSubmission}>
          <div className=" form-group">
            <label>RlType</label>
            <input
              onChange={this.handleRlType}
              value={this.state.rlType}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Details</label>
            <input
              onChange={this.handleDetails}
              value={this.state.details}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              onChange={this.handleDate}
              value={this.state.createDate}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>EmployeeCount</label>
            <input
              onChange={this.handleEmpCount}
              value={this.state.empCount}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>StatusCount</label>
            <input
              onChange={this.handleStsCount}
              value={this.state.stsCount}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input
              onChange={this.handleStatus}
              value={this.state.status}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary mt-2">Register</button>
        </form>

        {this.state.msg && (
          <h5 className="alert alert-success mt-2">{this.state.msg}</h5>
        )}
      </div>
    );
  }
}

// export default Compliance;
