import React from "react";
import "./Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="container fs-6 d-flex justify-content-between">
          {/* navbar brand */}
          <Navbar.Brand className="fs-2" to="/home">
            iSpeak
          </Navbar.Brand>

          {/* navigation menu */}
          <Nav className=" navigation-div me-auto">
            <Nav.Link>
              <NavLink
                className="navigation"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
                to="/home"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="navigation"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
                to="/services"
              >
                Courses
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="navigation"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
                to="/blogs"
              >
                Blogs
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="navigation"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
                to="/about"
              >
                About{" "}
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
