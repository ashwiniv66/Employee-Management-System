import './App.css';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import Login from './Components/Login';
import Main from './Components/Main';
import SignUp from './Components/SignUp';
import Admin  from './Components/Admin';
import Login1 from "./Components/Login1.1";
import Home from "./Components/Home";
import Department from './Components/DepartmentDetails';
import ViewAllDepartment from './Components/ViewAllDepartment';
import ViewDepartment from './Components/ViewDepartment';
import DeleteDepartment from './Components/DeleteDepartment';
import DepartmentDetails from './Components/DepartmentDetails';

import Employee from './Components/Employee';
import Status from './Components/Status';
//import Particles from "react-particles-js";
//import Forms from './Components/Forms';
import ViewAllEmployees from './Components/ViewAllEmployees';
import ViewSingleEmployee from './Components/ViewSingleEmployee';
import UpdateEmployee from './Components/UpdateEmployee';


import Compliance from './Components/Compliance';
 import RegisterCompliance from './Components/RegisterCompliance';
import ViewAllCompliances from './Components/ViewAllCompliances';
import GetByComplianceId from './Components/GetByComplianceId';

// import SignUp from './Components/SignUp';
import DeleteEmployee from './Components/DeleteEmployee';

import RegisterStatusReport from './Components/RegisterStatusReport';

import GetByStatusId from './Components/GetByStatusId';



function App() {
  return (
    <div>
      <>
      <Router>
        {/* <Particles
        params={
          {
            particles:{
              number:{
                value:30,
                density:{
                  enable:true,
                  value_area:900
                }
              }
            }
          }
        }
        /> */}
      <Main />
      {/* <Forms /> */}
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
       <Route exact path="/SignUp" component={SignUp}/> 
       <Route exact path="/admin" component={Admin}/> 
       <Route exact path="/log1" component={Login1}/> 
      <Route exact path="/Employee" component={Employee}/>
      <Route exact path="/view-all-employee" component={ViewAllEmployees}/>
      <Route exact path="/view-employee" component={ViewSingleEmployee}/>
      <Route exact path="/Delete-Employee" component={DeleteEmployee}/>
      <Route exact path="/updateEmployee" component={UpdateEmployee}/>
      {/* <Route exact path="/SignUp" component={SignUp}/> */}






      <Route exact path="/Department" component={Department}/>
      {/* <Route exact path="/DepartmentService" component={DepartmentService}/> */}
      <Route exact path="/DepartmentDetails" component={DepartmentDetails}/>
      <Route exact path="/view-all-department" component={ViewAllDepartment}/>
      <Route exact path="/Delete-Department" component={DeleteDepartment}/>
      <Route exact path="/view-department" component={ViewDepartment}/>

     <Route exact path="/compliance" component={Compliance}/>
      <Route exact path="/RegisterCompliance" component={RegisterCompliance}/>
      <Route exact path="/ViewAllCompliances" component={ViewAllCompliances}/>

      <Route exact path="/GetByComplianceId" component={GetByComplianceId}/>

      <Route exact path="/Status" component={Status}/>
      <Route exact path="/RegisterStatusReport" component={RegisterStatusReport}/>
    
      <Route exact path="/GetByStatusId" component={GetByStatusId}/>
      
      </Router>
      </>
    </div>
  );
}

export default App;
