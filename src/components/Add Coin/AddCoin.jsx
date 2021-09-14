import React from 'react'
import { Button } from 'antd'

import './addCoin.css'

function AddCoin() {
    return (
        <div className="addCoinWrapper">


            <div className="createBtn">

                <Button type="default" onClick={e => window.open('https://www.createmytoken.com/?f=0x5c0829ef8Ae6348E2ac0E9c96078BDEE6105a881')}>Create your Coin</Button>

            </div>

            <p style={{ marginTop: "10px", fontWeight: "bold", fontSize: "18px", display: "flex", justifyContent: "center" }}>Please sign in to add your coin.</p>


            <div className="loginButtons">

                <div>

                    <button className="btnRegister" onClick={e => window.location.href = "/login"}>

                        <span style={{ color: "#fff", fontSize: "16px", }}>
                            Login
                        </span>

                    </button>
                    <a onClick={e=> window.location.href='/AddCoinForm'}>Form View</a>

                </div>

                <div>

                </div>

            </div>












        </div>
    )
}

export default AddCoin
