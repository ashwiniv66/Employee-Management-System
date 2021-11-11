import React, { useEffect, useState } from "react";
import axios from "axios";
export default function GetByComplianceId() {
  const [compliancedId, setcompliancedId] = useState();
  const [compliancedIdFromBtn, setcompliancedIdFromBtn] = useState();
  const [compliance, setCompliance] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/compliance/${compliancedId}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        setCompliance(response.data);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [compliancedIdFromBtn]);
  return (
    <div className="container">
      <div className="name">
      <h2 className="text-primary"> Get Complaince Details </h2>
      <hr />
      <div className="form-group">
        <label>Complaince Id</label>
        <span className="required">*</span>
        <input
          value={compliancedId}
          onChange={(event) => setcompliancedId(event.target.value)}
          className="form-control"
        />
      </div>
      <button
        onClick={() => setcompliancedIdFromBtn(compliancedId)}
        className="btn btn-primary mt-3"
      >
        Serach
      </button>
      <hr />
      {error ? (<h5 className="text-danger">Compliance Is Not Available</h5>) : (
        <div>
          <h4>Compliance Id:{compliancedId} Details</h4>
          <ul className="list-group">
            <li className="list-group-item list-group-item-success">
              RlType   : {compliance.rlType}
            </li>
            <li className="list-group-item list-group-item-success">
              Details  : {compliance.details}
            </li>
            <li className="list-group-item list-group-item-success">
              Date     : {compliance.createDate}
            </li>
            <li className="list-group-item list-group-item-success">
              EmpCount : {compliance.empCount}
            </li>
            <li className="list-group-item list-group-item-success">
              StsCount : {compliance.stsCount}
            </li>
            <li className="list-group-item list-group-item-success">
              Status   : {compliance.status}
            </li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}
