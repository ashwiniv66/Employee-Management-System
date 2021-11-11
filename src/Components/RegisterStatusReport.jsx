import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StatusService from "./Service/StatusService";

export default class RegisterStatusReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: "",
      details: "",
      createDate: "",
      userId: "",
      compilanceId: "",
      msg: "",
      error: "",
    };
  }

  handleComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleDetails = (event) => {
    this.setState({
      details: event.target.value,
    });
  };

  handleCreateDate = (event) => {
    this.setState({
      createDate: event.target.value,
    });
  };

  handleUserId = (event) => {
    this.setState({
      userId: event.target.value,
    });
  };

  handleCompilanceId = (event) => {
    this.setState({
      compilanceId: event.target.value,
    });
  };

  handleForSubmission = (event) => {
    event.preventDefault();
    this.saveStatus(this.state);
  };

  saveStatus(Status) {
    StatusService.addStatus(Status)
      .then((response) => {
        console.log(response);
        alert("Status Reported")
        this.setState({
          comments: "",
          details: "",
          createDate: "",
          userId: "",
          compilanceId: "",
          msg: response.data,
          error: "",
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <div className="name">
        <h2 className="text-info">Register Status</h2>
        <hr />
        <form onSubmit={this.handleForSubmission}>
          <div >   
          </div>
          <div className="form-group">
            <label>Comments</label>
            <span className="required">*</span>
            <input
              onChange={this.handleComments}
              value={this.state.comments}
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
            <label>CreateDate</label>
            <input
              onChange={this.handleCreateDate}
              value={this.state.createDate}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>UserId</label>
            <span className="required">*</span>
            <input
              onChange={this.handleUserId}
              value={this.state.userId}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>CompilanceId</label>
            <span className="required">*</span>
            <input
              onChange={this.handleCompilanceId}
              value={this.state.compilanceId}
              className="form-control"
            />
          </div>
          <button className="submit">Register</button>
        </form>

        {this.state.msg && (
          <h5 className="alert alert-success mt-2">{this.state.msg}</h5>
        )}
      </div>
      </div>
    );
  }
}

// export default Status;
