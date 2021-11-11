import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ViewAllCompliances() {
  const [compliance, setCompliance] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/compliance/getAll")
      .then((response) => {
        console.log(response.data);
        setCompliance(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    // <body
    //     style={{
    //       backgroundImage: 
    //       "url('https://dome9.com/wp-content/uploads/2018/05/shutterstock_739270402.jpg')",
    //       backgroundSize: "cover",
    //       backgroundRepeat: "no-repeat",
    //       height: "1000px",
    //     }}
    //   >
    <div>
             <center>
                    <h2 className="text-info">All Compliances</h2>
              </center>
        <div className="name">       
      <table className="table table-dark table-striped">
              <thead className="thead-dark">
          <tr>
            <th scope="col">ComplianceID</th>
            <th scope="col">RlType</th>
            <th scope="col">Details</th>
            <th scope="col">Date</th>
            <th scope="col">EmpCount</th>
            <th scope="col">StsCount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {compliance.map((compliance) => (
            <tr key={compliance.compliancedId}>
              <td>{compliance.compliancedId}</td>
              <td>{compliance.rlType}</td>
              <td>{compliance.details}</td>
              <td>{compliance.createDate}</td>
              <td>{compliance.empCount}</td>
              <td>{compliance.stsCount}</td>
              <td>{compliance.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
   
  );
}

