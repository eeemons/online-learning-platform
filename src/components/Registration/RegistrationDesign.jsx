import { Link } from "react-router-dom";
import "../Login/loginDesign.css";
const RegistrationDesign = () => {
  return (
    <div className="login-design">
      <div id="login-form-wrap">
        <form id="login-form">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Registration
            </h2>
          </div>
          <p className="login-design__p">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Name"
              required=""
            />
          </p>
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
              placeholder="Password"
              required=""
            />
          </p>
          <p className="login-design__p">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Confirm Password"
              required=""
            />
          </p>
          <p className="login-design__p">
            <input type="submit" id="login" defaultValue="Login" />
          </p>
        </form>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default RegistrationDesign;
