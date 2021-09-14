import React from 'react'

function Contactus() {
    return (
        <>

            <div className="addCoinWrapper">

                <div className="signup">

                    <div className="container">
                        <div className="signup-content">

                            <h2 className="form-title">Contact Us</h2>
                            <p className="create-text">
                                How can we help you?
                            </p>

                            <form action="" className="register-form" id="registration-form">

                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account"></i></label>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message"><i className="zmdi zmdi-comments"></i></label>
                                    <input type="textarea" name="message" id="message" autoComplete="off" placeholder="Message" />
                                </div>

                                <button className="btnRegister" >

                                    <span className="btntext" style={{ color: "#fff", fontSize: "16px" }}>
                                        Submit
                                    </span>

                                </button>


                            </form>

                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Contactus
