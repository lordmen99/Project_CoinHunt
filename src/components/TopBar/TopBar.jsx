import React from "react";
import logo from "../../Images/logo.png";
import { Input, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  AvTimer,
  Add,
  ShowChart,
  ContactSupportOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./topBar.css";
import { connect } from "react-redux";

const { Search } = Input;
const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<AvTimer style={{ fontSize: "medium" }} />}>
      <a onClick={(e) => (window.location.href = "/Account_Watchlist")}>
        Account Watchlist
      </a>
    </Menu.Item>
    <Menu.Item key="2" icon={<Add style={{ fontSize: "medium" }} />}>
      <a onClick={(e) => (window.location.href = "/AddCoin")}>Add coin</a>
    </Menu.Item>
    <Menu.Item key="3" icon={<ShowChart style={{ fontSize: "medium" }} />}>
      <a onClick={(e) => (window.location.href = "/Promote")}>Promote</a>
    </Menu.Item>
    <Menu.Item
      key="4"
      icon={<ContactSupportOutlined style={{ fontSize: "medium" }} />}
    >
      <a onClick={(e) => (window.location.href = "/ContactUs")}>Contact Us</a>
    </Menu.Item>

    <SubMenu title="Header Tabs">
      <Menu.Item>Promoted</Menu.Item>
      <Menu.Item>Audited</Menu.Item>
      <Menu.Item>Today</Menu.Item>
      <Menu.Item>All-Time</Menu.Item>
      <Menu.Item>Upcoming Launch</Menu.Item>
    </SubMenu>
  </Menu>
);

function TopBar({ currentUser }) {
  return (
    <div className="topBar">
      <div className="leftContainer">
        <div className="logoContainer">
          <a onClick={(e) => (window.location.href = "/")}>
            <img src={logo} alt="coinhunt.png" className="main_logo" />
          </a>
        </div>
      </div>

      <div className="rightContainer">
        <div className="menuContainer">
          <ul>
            <li>
              <Search placeholder="Search" allowClear size="medium" />
            </li>
            <li>
              <Dropdown overlay={menu}>
                <Button
                  style={{
                    backgroundColor: "green",
                    border: "none",
                    color: "white",
                  }}
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Main Menu
                  <DownOutlined />
                </Button>
              </Dropdown>
            </li>
            {}
            {/* <li><Dropdown.Button overlay={menu} style={{ backgroundColor: "black" }}>Menu</Dropdown.Button></li> */}
            {/* <li><Button type="default">Menu</Button></li> */}
            {currentUser && (
              <>
                <li className="signupBtn">
                  <Link to={"/Signup"}>Signup</Link>
                </li>
                <li className="loginBtn">
                  <Link to={"/login"}>Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authUser }) => {
  const { currentUser } = authUser;
  return { currentUser };
};

export default connect(mapStateToProps, {})(TopBar);
