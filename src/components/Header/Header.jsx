import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState(true);

  const navLinks = [
    {
      display: "Home",
      url: "/",
      status: true,
    },
    {
      display: "About",
      url: "/about",
      status: true,
    },

    {
      display: "Courses",
      url: "/courses",
      status: true,
    },
    {
      display: "Login",
      url: "/login",
      status: loginStatus,
    },
    {
      display: "Blog",
      url: "/blog",
      status: true,
    },
  ];

  const menuRef = useRef();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoginStatus(false);
    }
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Learners.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) =>
                  item.status ? (
                    <li key={Math.random()} className="nav__item">
                      <Link to={item.url}>{item.display}</Link>
                    </li>
                  ) : (
                    <span key={Math.random()}></span>
                  )
                )}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                {localStorage.getItem("token") ? (
                  <Link onClick={handleLogout}>Logout</Link>
                ) : (
                  <></>
                )}
                <i className="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
