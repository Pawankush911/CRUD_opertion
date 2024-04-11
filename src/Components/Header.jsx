import React, { useState } from "react";
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";

const Header = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const header = { "Access-Control-Allow-Origin": "*" };
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post("https://6444d17f914c816083c04c17.mockapi.io/crud-youtube", {
      name: name,
      email: email,
      role: role,
      header,
    }).then(() =>{
        navigate("/Read")
    })
    setName("");
    setEmail("");
    setRole("");
    
  };

  return (
    <>
      <div>
        <div className=" m-3" style={{ textDecoration: "underline", textShadow: "2px 2px #ff0000" }}>
          <header style={{ fontSize: "40px", textAlign: "center" }}>
            ADD DATA
          </header>
          <hr />
        </div>
        <div>
        <Link to="/Read" style={{ textDecoration: "none",color:"green"}}>SHOW All USER DATA</Link>
        </div>
        <div style={{ width: "30%", margin: "auto" }}>
          <form>
            <div className="mb-3">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Role
              </label>
              <input
                type="Role"
                className="form-control"
                id="exampleInputEmail1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
