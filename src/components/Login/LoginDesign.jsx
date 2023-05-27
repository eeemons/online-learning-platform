import { Link } from "react-router-dom";
import "./loginDesign.css";
const LoginDesign = () => {
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
              placeholder="Email Address"
              required=""
            />
          </p>

          <p className="login-design__p">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              required=""
            />
          </p>

          <p className="login-design__p">
            <input type="submit" id="login" defaultValue="Login" />
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
