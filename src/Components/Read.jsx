import React, { useEffect, useState } from "react";
import axios from "axios";
import{Link} from "react-router-dom";

const Read = () => {
  const [user, setUser] = useState([]);
  const[tabledark,setTableDark] = useState("");

  function getData() {
    axios
      .get("https://6444d17f914c816083c04c17.mockapi.io/crud-youtube")
      .then((response) => setUser(response.data));
  }
  const updateUser =(id,name,email,role)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("NAME",name);
    localStorage.setItem("EMAIL",email);
    localStorage.setItem("ROLE",role);
  }

  useEffect(() => {
    getData();
  }, []);

 const handleDelete=(id)=>{
    axios.delete(`https://6444d17f914c816083c04c17.mockapi.io/crud-youtube/${id}`).then(()=>{
      getData();
    })
 }
 const handleMode=()=>{
  if(tabledark==="table-dark"){
    setTableDark("")
  }else{
    setTableDark("table-dark")
  }

 }

  return (
    <>
      <div
        style={{ textDecoration: "underline", textShadow: "2px 2px #ff0000" }}
      >
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" onClick={()=>handleMode()}/>
      
    </div>
        <center>
          <h1>USER DETAILS</h1>
        </center>
        <hr />
      </div>
      <Link to="/"><button  className="btn btn-danger" >Create new data</button></Link>
      <table className={`table ${tabledark}`} style={{ width: "70%", margin: "auto" }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">Email</th>
            <th scope="col">ROLE</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {user && user.map((item,index) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                  <Link to="/Update">
                  <button className="btn btn-success" onClick={()=>{updateUser(item.id,item.name,item.email,item.role)}}>Edit</button>
                  </Link>
                    
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>{handleDelete(item.id)}}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
