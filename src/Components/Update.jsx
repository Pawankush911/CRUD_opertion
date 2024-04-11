import React, { useState,useEffect } from 'react'
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";

const Update = () => {
    const[id,setID]=useState(0);
    const[name,setName] =useState("");
    const[email,setEmail]=useState("");
    const[role,setRole]=useState("");
    const navigate=useNavigate()

    useEffect(() =>{
        setID(localStorage.getItem("ID"));
        setName(localStorage.getItem("NAME"));
        setEmail(localStorage.getItem("EMAIL"));
        setRole(localStorage.getItem("ROLE"));
    },[]);
    

    const handleUpdate=(e) => {
        e.preventDefault();
        axios.put(`https://6444d17f914c816083c04c17.mockapi.io/crud-youtube/${id}`,{
            name: name,
            email: email,
            role:role
        }).then(()=>{
        navigate('/Read')
        })
    };


  return (
    <>
    <div>
    <center style={{textDecoration: "underline", textShadow: "2px 2px #ff0000"}}>
   <h1>UPDATE USER DATA</h1> 
    </center>
    <hr/>
    </div>
    <div style={{ width: "30%", margin: "auto" }}>
          <form>
            <div className="mb-3">
                <label  className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              <label  className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label">
                Role
              </label>
              <input
                type="role"
                className="form-control"
                id="exampleInputEmail1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Submit
            </button>
            <Link to="/Read"><button className='btn btn-primary mx-2'>Back</button></Link>
          </form>
        </div>
    

      
    </>
  )
}

export default Update;
