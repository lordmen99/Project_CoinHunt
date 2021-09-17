import Reactm, { useState } from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../redux/auth/actions';
import './signup.css'


function Signup({registerUserAction, error, success, loading}) {

    const [name, setName] = useState("");
    const [disName, setDisName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitForm(e) {
        e.preventDefault();
        registerUserAction({name, displayName: disName, email, password})
        setName("");
        setDisName("");
        setEmail("");
        setPassword("");
    }

    console.log(loading, error, success)
    return (
        <>

            <div className="signup_Container">

                <div className="signup">

                    <div className="container">

                        <div className="signup-content">

                            <h2 className="form-title">Sign up</h2>
                            <p className="create-text">
                                Create your Account
                            </p>

                            <form className="register-form" id="registration-form" onSubmit={submitForm}>

                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account"></i></label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="off"
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="displayname"><i className="zmdi zmdi-account"></i></label>
                                    <input
                                        type="text"
                                        name="displayname"
                                        id="displayname"
                                        autoComplete="off"
                                        placeholder="Display Name"
                                        value={disName}
                                        onChange={e => setDisName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input
                                        type="email"
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
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="off"
                                        placeholder="Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} />
                                </div>

                                <button className="btnRegister" >

                                    <span style={{ color: "#fff", fontSize: "16px" }}>
                                        Register
                                    </span>

                                </button>

                                <a className="memberBtn" onClick={e => window.location.href = "/login"}>Already a Member</a>



                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

const mapStateToProps = ({ authUser }) => {
    const { loading, error, success } = authUser;
    return { loading, error, success };
};
  
export default connect(mapStateToProps, {
    registerUserAction: registerUser
})(Signup)
