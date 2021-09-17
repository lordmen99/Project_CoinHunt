import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import "./addCoin.css";
import { connect } from "react-redux";

function AddCoin({ currentUser }) {
  return (
    <div className="addCoinWrapper">
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

      <div className="loginButtons" style={{textAlign: 'center'}}>
        {!currentUser && (
          <div>
            <p
              style={{
                marginTop: "10px",
                fontWeight: "bold",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              Please sign in to add your coin.
            </p>
            <button className="btnRegister">
              <Link style={{ color: "#fff", fontSize: "16px" }} to="/login">
                Login
              </Link>
            </button>
          </div>
        )}
        {currentUser && (
          <a onClick={(e) => (window.location.href = "/AddCoinForm")}>
            Form View
          </a>
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
