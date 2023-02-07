import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaKey,
} from "react-icons/fa";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";

const LoginDemo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [passwordValue, setPasswordvale] = useState("");

  const handleSubmmit = () => {
    if (user === "admin@gmail.com" && passwordValue === "admin") {
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <React.Fragment>
      <Container className="container-view">
        <div className="myCard">
          <Row>
            <Col md="6">
              <div>
                <h3 className="c-style">Sign In</h3>
              </div>
              <div>
                <span className="span-style">
                  New User ? <a style={{ color: "blue" }}>Create an account</a>{" "}
                </span>
              </div>

              <div className="myLeftCtn">
                <form className="myForm text-center">
                  <div className="form-group">
                    <input
                      className="myInput"
                      type="text"
                      placeholder="Username or emailid"
                      id="username"
                      value={user}
                      onChange={(e) => {
                        setUser(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="myInput"
                      type="password"
                      placeholder="password"
                      id="password"
                      value={passwordValue}
                      onChange={(e) => {
                        setPasswordvale(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="check-style">
                    <input id="check1" name="check1" type="checkbox"></input>
                    <span className="mx-2">Keep me signed in</span>
                  </div>
                  <Row>
                      <Col md="12" sm="12" xs="12" xl="12">
                      <div>
                    {" "}
                    <Button
                      variant="dark"
                      className="button-style"
                      type="submit"
                      onClick={handleSubmmit}
                    >
                      Sign in
                    </Button>
                  </div>
                      </Col>

                      <Col md="12" sm="12" xs="12" xl="12">
                      <div className="my-4">
                      <h6 className="line">or sign in with</h6>
                    </div>
                      </Col>
                  </Row>
                  
                  
                 
                  <Row>
                    <Col md="3" sm="6" xs="12">
                      <span className="mx-2 my-2 ">
                        <FaGoogle className="mx-2 " size={30} />
                      </span>
                    </Col>
                    <Col md="3" sm="6" xs="12">
                      {" "}
                      <span className="mx-2 my-2 ">
                        <FaFacebook size={30} />
                      </span>
                    </Col >
                    <Col md="3" sm="6" xs="12">
                      {" "}
                      <span className="mx-2 my-2 ">
                        <FaLinkedin size={30} />
                      </span>
                    </Col>
                    <Col md="3" sm="6" xs="12">
                      {" "}
                      <span className="mx-2 my-2 ">
                        <FaTwitter className="mx-2" size={30} />
                      </span>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>

            <Col md="6">
              <div className="myRightCtn">
                <FaKey size={100} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default LoginDemo;
