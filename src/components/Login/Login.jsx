import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./login.css";
import { Redirect } from "react-router";
import { loginUser } from "../../redux/auth/actions";

function Login({
  history,
  currentUser,
  loading,
  success,
  error,
  loginUserAction,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e) {
    e.preventDefault();
    loginUserAction({ email, password }, history);
    setEmail("");
    setPassword("");
  }
  console.log("error = " + error, "success = " + success);

  return (
    <div className="addCoinWrapper">
      {currentUser && <Redirect to={"/"} />}
      <div className="signup">
        <div className="container">
          <div className="signup-content">
            <h2 className="form-title">Log In</h2>
            <p className="create-text">To vote and add coins</p>
            <form className="register-form" onSubmit={submitForm}>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {!loading ? (
                <button onClick={submitForm} className="btnRegister">
                  <span style={{ color: "#fff", fontSize: "16px" }}>Login</span>
                </button>
              ) : (
                <button className="btnRegister">
                  <span style={{ color: "#fff", fontSize: "16px" }}>Loading ...</span>
                </button>
              )}
              <Link className="memberBtn" to={"/Signup"}>
                Sign up
              </Link>
            </form>
          </div>
        </div>
      </div>

      {/* <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "18px", display: "flex", justifyContent: "center", marginBottom:"0px" }}>Login with</p>

            <div style={{ display: "flex", justifyContent: "center" }}>

                <button className="btnGooglee" style={{marginRight:"10px"}}>

                    <span>
                        <img src={googleIcon} alt="google" className="gIcon" />
                    </span>

                </button>

                <button className="btnGooglee" style={{marginRight:"10px"}}>

                    <span>
                        <img src={email} alt="google" className="eIcon" />
                    </span>

                </button>

                <button className="btntwiter">

                    <span>
                        <img src={twitter} alt="google" className="tIcon" />
                    </span>

                </button>

            </div > */}
    </div>
  );
}

const mapStateToProps = ({ authUser }) => {
  const { loading, error, success, currentUser } = authUser;
  return { loading, error, success, currentUser };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);
