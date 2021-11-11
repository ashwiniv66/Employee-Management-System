import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <section id="main">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <Link className="navbar-brand" href="#">Employee Management System</Link>
                <button className="navbar-toggler" type ="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
                <li class ="nav-item dropdown">
                <a class ="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Employee
                </a>
                <ul class ="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                <li><Link class ="dropdown-item" to="/view-all-employee" >View All Employee</Link></li>
                <li><Link class ="dropdown-item" to="/view-employee">View Single Employee</Link></li>
                <li><Link class ="dropdown-item" to="/Delete-Employee">Delete Employee</Link></li>
                <li><Link class ="dropdown-item" to="/updateEmployee">Update Employee</Link></li>
           


                </ul>
                </li>

                {/* <li className="nav-item">
                <Link className="nav-link" to="/department">Department</Link>
                </li> */}
                <li class ="nav-item dropdown">
                <Link class ="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Department
                </Link>
                <ul class ="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/DepartmentDetails">Department Details</Link></li>
                <li><Link class ="dropdown-item" to="/view-all-department" >View All Department</Link></li>
                <li><Link class ="dropdown-item" to="/view-department">ViewDepartment</Link></li>

                <li><Link class ="dropdown-item" to="/Delete-Department">Delete Department</Link></li>
                </ul>
                </li> 


                <li className="nav-item dropdown">
                <Link class ="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Compliance
                </Link>
                <ul class ="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/RegisterCompliance">Register Compliance </Link></li>
                <li><Link class ="dropdown-item" to="/ViewAllCompliances" >View All Compliances</Link></li>
              

                <li><Link class ="dropdown-item" to="/GetByComplianceId">GetByComplianceId</Link></li>
                </ul>
                </li> 

               
                <li className="nav-item dropdown">
                <Link class ="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Status
                </Link>
                <ul class ="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/RegisterStatusReport">Register StarusReport </Link></li>
                <li><Link class ="dropdown-item" to="/GetByStatusId" >GetByStatusId</Link></li>
                
                </ul>
                </li> 
                </ul>
                </div>
                </div>
                <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
                </li>
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/SignUp">SignUp</Link>
                </li>
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
                </li>
                </ul>
                {/* <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/log1">Login1</Link>
                </li>
                </ul> */}
            </nav>
            <div className="social">
                <footer>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </footer>
            </div>
        </section>

    )
}
