import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../pages/Navbar/Navbar";
import "./regc.css";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserdata = async (e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = inpval;

    if (fname === "") {
      toast.warning("fname is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else if (cpassword === "") {
      toast.error("cpassword is required!", {
        position: "top-center",
      });
    } else if (cpassword.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center",
      });
    } else if (password !== cpassword) {
      toast.error("pass and Cpass are not matching!", {
        position: "top-center",
      });
    } else {
      // console.log("user registration succesfully done");

      const data = await fetch("https://sea-lion-app-6nyh2.ondigitalocean.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          password,
          cpassword,
        }),
      });

      const res = await data.json();
      // console.log(res.status);

      if (res.status === 201) {
        toast.success("Registration Successfully done ????!", {
          position: "top-center",
        });
        setInpval({
          ...inpval,
          fname: "",
          email: "",
          password: "",
          cpassword: "",
        });
      }
    }
  };

  return (
    <>
    <Navbar />
    {/* <div className="divform1">
    <section className="sectionab reg">
      
      <div className="form_data logiiin">
        <div className="form_heading">
          <h1 className="topformm">Sign Up</h1>
          <p style={{ textAlign: "center" }}>
            We are glad that you will be using HawkersHut to manage <br />
            your tasks! We hope that you will get like it.
          </p>
        </div>
        
        <form>
          <div className="form_input">
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              onChange={setVal}
              value={inpval.fname}
              name="fname"
              id="fname"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={setVal}
              value={inpval.email}
              name="email"
              id="email"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="form_input">
            <label htmlFor="password">Password</label>
            <div className="two">
              <input
                type={!passShow ? "password" : "text"}
                value={inpval.password}
                onChange={setVal}
                name="password"
                id="password"
                placeholder="Enter Your password"
              />
              <div
                className="showpass"
                onClick={() => setPassShow(!passShow)}
              >
                {!passShow ? "Show" : "Hide"}
              </div>
            </div>
          </div>

          <div className="form_input">
            <label htmlFor="password">Confirm Password</label>
            <div className="two">
              <input
                type={!cpassShow ? "password" : "text"}
                value={inpval.cpassword}
                onChange={setVal}
                name="cpassword"
                id="cpassword"
                placeholder="Confirm password"
              />
              <div
                className="showpass"
                onClick={() => setCPassShow(!cpassShow)}
              >
                {!cpassShow ? "Show" : "Hide"}
              </div>
            </div>
          </div>

          <button className="btn" onClick={addUserdata}>
            Sign Up
          </button>
          <p>
            Already have an account? <NavLink to="/">Log In</NavLink>
          </p>
        </form>
        <ToastContainer />
      </div>
    </section>
    </div> */}
     
    <div className="signupOutDiv">
        <section className="signup-section">
          <div className="form-signup">
            <div className="form-heading">
              <h1>Hello,SignUp</h1>
              <p>SignUp and start using our services....</p>
            </div>
            <form className="signup-form">
            <div className="signup-form-input">
                <label className="signup-label" htmlFor="fname">Name</label>
                <input
                className="signup-input"
                  placeholder="Enter your Name..."
                  type="text"
                  value={inpval.fname}
                  onChange={setVal}
                  name="fname"
                  id="fname"
                  
                />
              </div>
              <div className="signup-form-input">
                <label className="signup-label" htmlFor="email">Email</label>
                <input
                className="signup-input"
                  placeholder="Enter your email..."
                  type="email"
                  value={inpval.email}
                  onChange={setVal}
                  name="email"
                  id="email"
                  
                />
              </div>
              <div className="signup-form-input">
              <label className="signup-label" htmlFor="password">Password</label>
                <input
                className="signup-input"
                  placeholder="Enter your password..."
                  type="password"
                  value={inpval.password}
                  onChange={setVal}
                  name="password"
                  id="password"
                />
              </div>
              <div className="signup-form-input">
              <label className="signup-label" htmlFor="cpassword">Confirm Password</label>
                <input
                className="signup-input"
                  placeholder="Confirm your password..."
                  type="password"
                  value={inpval.cpassword}
                  onChange={setVal}
                  name="cpassword"
                  id="cpassword"
                />
              </div>
              <button className="signup-btn" onClick={addUserdata}>Register</button>          
              <p className="topform123">
                  Already have an Account?{" "}
                  <NavLink  to="/login">Login</NavLink>{" "}
                </p>
            </form>
            <ToastContainer />
          </div>
        </section>
      </div>

    </>
  );
};

export default Register;
