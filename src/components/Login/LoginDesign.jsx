import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./loginDesign.css";
import { useState } from "react";
const LoginDesign = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("kminchelle");
  const [passsword, setPassword] = useState("0lelplR");

  const postData = (event) => {
    // Make a POST request
    event.preventDefault();

    axios({
      method: "post",
      url: "https://dummyjson.com/auth/login",
      data: {
        username: email,
        password: passsword,
      },
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };
  return (
    <div className="login-design">
      <div id="login-form-wrap">
        <form id="login-form">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Login
            </h2>
          </div>
          <p className="login-design__p">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Username"
              required=""
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
          </p>

          <p className="login-design__p">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required=""
              value={passsword}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </p>

          <p className="login-design__p">
            <input
              type="submit"
              id="login"
              defaultValue="Login"
              onClick={postData}
            />
          </p>
        </form>

        <div id="create-account-wrap">
          <p className="login-design__p">
            Not a member? <Link to="/registration">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDesign;
