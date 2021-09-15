import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import './login.css'
import { getCurrentUser } from '../../helpers/utils'
import { Redirect } from 'react-router'
import { loginUser, logoutUser } from '../../redux/auth/actions'

function Login({history, loading, success, error, logoutUserAction}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitForm(e) {
        e.preventDefault();
        logoutUserAction(history, {email, password})
        setEmail("");
        setPassword("");
    }


const isLogin = getCurrentUser()
    return (
        <div className="addCoinWrapper">
            {isLogin && <Redirect to={'/notfound'} />}
            <div className="signup">

                <div className="container">

                    <div className="signup-content">

                        <h2 className="form-title">Log In</h2>
                        <p className="create-text">
                            To vote and add coins
                        </p>

                        <form action="" className="register-form" onSubmit={submitForm}>

                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />

                            </div>

                            <div className="form-group">

                                <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="off"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />

                            </div>

                            <button className="btnRegister" >

                                <span onClick={submitForm} style={{ color: "#fff", fontSize: "16px" }}>
                                    Login
                                </span>

                            </button>

                            <a className="memberBtn" onClick={e => window.location.href = "/Signup"}>Sign up</a>



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




        </div >
    )
}

const mapStateToProps = ({ authUser }) => {
    const { loading, error, success } = authUser;
    return { loading, error, success };
  };
  
  export default connect(mapStateToProps, {
    loginUserAction: loginUser,
    logoutUserAction: logoutUser
  })(Login);
  