import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import "./addCoin.css";
import { connect } from "react-redux";
import Coinform from "../AddCoin Form/AddCoin_Form"

function AddCoin({ currentUser }) {
  return (
    <div className="addCoinWrapper">
      

      <div className="loginButtons" style={{textAlign: 'center'}}>
        {!currentUser && (
          <div>
            <div className="createBtn">
            <Button
          type="default"
          onClick={(e) =>
            window.open(
              "https://www.createmytoken.com/?f=0x5c0829ef8Ae6348E2ac0E9c96078BDEE6105a881"
            )
          }
        >
          Create your Coin
        </Button>
             </div>
            <p
              style={{
                marginTop: "10px",
                fontWeight: "bold",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              Please Log in to add your coin.
            </p>
            
            <button className="btnRegister">
              <Link style={{ color: "#fff", fontSize: "16px" }} to="/login">
                Login
              </Link>
            </button>
            
          </div>
        )}
        {currentUser && (
          <Coinform/>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ authUser }) => {
  const { currentUser } = authUser;
  return { currentUser };
};

export default connect(mapStateToProps, null)(AddCoin);
