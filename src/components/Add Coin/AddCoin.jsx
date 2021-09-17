import React from "react";
import { Button } from "antd";
import {Link} from 'react-router-dom'

import "./addCoin.css";
import { connect } from "react-redux";

function AddCoin() {
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

      <p
        style={{
          marginTop: "10px",
          fontWeight: "bold",
          fontSize: "18px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Please sign in to add your coin.
      </p>

      <div className="loginButtons">
        <div>
          {!currentUser ? (
            <button className="btnRegister">
              <span style={{ color: "#fff", fontSize: "16px" }}>
                <Link to="/login">Login</Link>
              </span>
            </button>
          ) : (
            <a onClick={(e) => (window.location.href = "/AddCoinForm")}>
              Form View
            </a>
          )}
        </div>

        <div></div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authUser }) => {
    const { loading, error, success, currentUser } = authUser;
    return { loading, error, success, currentUser };
  };

export default connect(mapStateToProps, null)(AddCoin);
