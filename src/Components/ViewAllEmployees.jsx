import React, {useEffect,useState} from 'react'
import axios from 'axios'
export default function ViewAllEmployees(){

    const [employees,setEmployees]=useState([])

    useEffect(()=>
    {
        axios.get('http://localhost:8080/employee/allEmployees')
        .then(response=>{
            console.log(response.data)
            setEmployees(response.data)
        })
        .catch(error=>console.log(error))
    }, [])
    return(
    //     <body
    //     style={{
    //       backgroundImage: 
    //       "url('https://www.gablessearch.com/files/2021/01/gsg-jump2.jpg')",
    //       backgroundSize: "cover",
    //       backgroundRepeat: "no-repeat",
    //       height: "1000px",
    //     }}
    //   >
        <div className="form-wrapper">
                <div>
                    <h2 className="title">All Employees</h2>
                </div>
        
            <div className="name">
            <table className="table table-dark table-striped" width= "30%" height="30%">
              <thead className="thead-dark">
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Employee First Name</th>
                        <th scope="col">Employee Last Name</th>
                        <th scope="col">Employee DOB</th>
                        <th scope="col">Employee Email</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                      employees.map(employee=>
                        (
                            <tr key={employee.userId}>
                                <td>{employee.userId}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.dob}</td>
                                <td>{employee.email}</td>
                                </tr>
                      ))
                    }
                    

                </tbody>
            </table>
            </div>
           
        </div>
        // </body>
        
    )
}