import React , {useState,useEffect} from 'react'
import axios from 'axios'

    export default function ViewDepartment(){
    
        const[departid,setDepartid]=useState()
        const[idFromBtn,setIdFromBtn]=useState()
        const [departments,setDepartments]=useState([])
    
        useEffect(()=>
        {
            axios.get(`http://localhost:8080/department/${departid}`)
            .then(response=>
                {
                    console.log(response.data)
                    setDepartments(response.data)
                })
                .catch(error=>console.log(error))
        }, [idFromBtn]
        )
    
        return(
            <div className="container">
            <div className="name">
                <h3>Get Department By Id</h3>
                <hr/>
                <div className="form-group">
                    <label>Department ID</label>
                    <span className="required">*</span>
                    <input value={departid} onChange={(event)=>setDepartid(event.target.value)} className="form-control"/>
    
                </div>
                <button onClick={ ()=>setIdFromBtn(departid)} className="m-2 btn btn-primary">Search</button>
                <hr/>
                {
                   
                            departments && <div>
                            <h3>Department ID:{departid} Details</h3>
                                  <ul className="list-group">
                                      <li className="list-group-item list-group-item-success">Department id: {departments.departid}</li>
                                      <li className="list-group-item list-group-item-success">Department First Name: {departments.departname}</li>
                                      
                                  </ul>
                                  </div>
                }
                </div>
            </div>
        )
    }