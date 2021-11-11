
import React, {useEffect,useState} from 'react'
import axios from 'axios'
export default function ViewAllDepartment(){

    const [departments,setDepartments]=useState([])

    useEffect(()=>
    {
        axios.get('http://localhost:8080/department/alldepartments')
        .then(response=>{
            console.log(response.data)
            setDepartments(response.data)
        })
        .catch(error=>console.log(error))
    }, [])

   

    
    return(
    //     <body
    //     style={{
    //       backgroundImage: 
    //       "url('https://st2.depositphotos.com/3441621/8570/i/950/depositphotos_85703258-stock-photo-top-view-of-office-workers.jpg')",
    //       backgroundSize: "cover",
    //       backgroundRepeat: "no-repeat",
    //       height: "1000px",
    //     }}
    //   >
    <div className="container">

    <form >

        <center>

        <h3 className="text-info">All Departments Details </h3>

        </center>

        <hr/>

        <div className="name">

        <table className="table table-dark table-striped">

          <thead className="thead-dark">



                <tr>

                    <th scope="col">Department ID</th>

                    <th scope="col">Department Name</th>

                   

                </tr>

            </thead>

            <tbody>

                {

                  departments.map(department=>

                    (

                        <tr key={department.id}>

                            <td>{department.departid}</td>

                            <td>{department.departname}</td>

                           

                            </tr>

                  ))

                }

               



            </tbody>

        </table>

        </div>

        </form>

    </div>

    )

}

       