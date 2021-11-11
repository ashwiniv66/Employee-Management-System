import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetByStatusId() {
  const [statusId, setStatusId] = useState();
  const [StatusdIdFromBtn, setStatusIdFromBtn] = useState();
  const [Status, setStatus] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/status/statusreport/${statusId}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        setStatus(response.data);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [StatusdIdFromBtn]);

  return (
    <div className="container">
      <div className="name">
      <h2 className="text-primary"> Get Status Details </h2>
      <hr />
      <div className="form-group">
        <label>Status Id</label>
        <span className="required">*</span>
        <input
          value={statusId}
          onChange={(event) => setStatusId(event.target.value)}
          className="form-control"
        />
      </div>
      <button
        onClick={() => setStatusIdFromBtn(statusId)}
        className="btn btn-primary mt-3"
      >
        Search
      </button>
      <hr />
      {error ? (<h5 className="text-danger">Status Is Not Available</h5>) : (
        <div>
          <h4>Status Id:{statusId} Details</h4>
          <ul className="list-group">
            <li className="list-group-item list-group-item-success">
            StatusId  : {Status.statusId}
            </li>
            <li className="list-group-item list-group-item-success">
            Comments  : {Status.comments}
            </li>
            <li className="list-group-item list-group-item-success">
            Details    : {Status.details}
            </li>
            <li className="list-group-item list-group-item-success">
            CreateDate : {Status.createDate}
            </li>
            <li className="list-group-item list-group-item-success">
            UserId : {Status.userId}
            </li>
            <li className="list-group-item list-group-item-success">
            ComplianceId  : {Status.complianceId}
            </li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}

