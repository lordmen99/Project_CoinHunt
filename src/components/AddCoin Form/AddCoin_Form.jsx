import React from 'react'
import { Button } from 'antd'
import binanceIcon from '../../Images/binance.svg'
import Ethereum from '../../Images/ethereum.png'
import Solana from '../../Images/solana.png'
import Polygon from '../../Images/Polygon.png'
import web from '../../Images/website.png'
import telegram from '../../Images/telegram.png'
import twittercolor from '../../Images/twittercolor.png'

function AddCoin_Form() {
    return (
        <>

            <div className='ContactUs_Container'>

                <div className="topFields">

                    <div>
                        <h1 style={{ fontWeight: "bold", fontSize: '1.8rem', letterSpacing: "-2px" }}>Coin listing request</h1>
                    </div>


                    <div className="btnCreate">

                        <Button type="default" onClick={e => window.open('https://www.createmytoken.com/?f=0x5c0829ef8Ae6348E2ac0E9c96078BDEE6105a881')}>Create your Coin</Button>

                    </div>

                </div>



                <div className='section'>

                    <div className='form'>

                        <div className='leftsideform'>

                            <div>
                                <h2>Coin informations</h2>
                            </div>

                            <div className='nameField'>

                                <div className='label'>
                                    Name
                                    <span style={{ color: '#dc3545', fontSize: '0.6rem' }}> Required </span>
                                </div>

                                <input placeholder="Ex: Bitcoin" required="" maxlength="50" id="formName" className="form-control"></input>

                            </div>


                            <div className='symbolField'>

                                <div className='label'>Symbol
                                    <span style={{ color: '#dc3545', fontSize: '0.6rem' }}> Required </span>
                                </div>
                                <input placeholder="Ex: BTC" required="" id="formName" className="form-control" />

                            </div>

                            <div className='descriptionField'>

                                <div className='label'>Description</div>
                                <div className='infoField'>
                                    <textarea style={{ height: "80px" }} placeholder="Ex: Bitcoin is a decentralized digital currency" className="form-control" />
                                </div>

                            </div>

                            <div className='logoField'>

                                <div className='label'>Logo</div>
                                <input placeholder="Ex: https://i.ibb.co/logo.png" required="" id="formName" className="form-control" />

                            </div>

                            <div className='priceField'>

                                <div className='label'>Price</div>
                                <input placeholder="$ Ex:0.006" required="" id="formName" className="form-control" />

                            </div>

                            <div className='capField'>

                                <div className='label'>Market cap</div>
                                <input placeholder="Ex: 150000" required="" id="formName" className="form-control" />

                            </div>

                            <div className='dateField'>

                                <div className='label'>Date</div>
                                <input type="datetime-local" placeholder="$ Ex:0.006" required="" id="formName" className="form-control" />

                            </div>

                        </div>


                        <div className='rightside'>
                            <div>
                                <h2>Coin Contracts</h2>
                            </div>

                            <div className='binanceField'>

                                <div className='label'>Binance Smart Chain</div>
                                <div className="input-group">
                                    <div className="input-icon">
                                        <img src={binanceIcon} alt="/binanceIcon" />
                                        <input style={{marginLeft:"5px"}} placeholder="Ex:0x0000000000" className="form-control"/>
                                    </div>


                                </div>


                            </div>

                            <div className='ethereumField'>

                                <div className='label'>Ethereum</div>
                                <div className="input-group">
                                    <div className="input-icon">
                                        <img src={Ethereum} alt="/binanceIcon" style={{width:"18px",height:"18px"}} />
                                        <input style={{marginLeft:"5px"}} placeholder="Ex:0x0000000000" className="form-control"/>
                                    </div>

                                </div>

                            </div>

                            <div className='SolanaField'>

                                <div className='label'>Solana</div>
                                <div className="input-group">
                                    <div className="input-icon">
                                        <img src={Solana} alt="/binanceIcon" style={{width:"15px",height:"15px"}} />
                                        <input style={{marginLeft:"5px"}} placeholder="Ex:0x0000000000" className="form-control"/>
                                    </div>

                                </div>

                            </div>

                            <div className='polygonField'>

                                <div className='label'>Polygon</div>
                                <div className="input-group">
                                    <div className="input-icon">
                                        <img src={Polygon} alt="/binanceIcon" style={{width:"15px",height:"15px"}} />
                                        <input style={{marginLeft:"5px"}} placeholder="Ex:0x0000000000" className="form-control"/>
                                    </div>
                                </div>

                            </div>

                            <div>
                                <h2>Coin Links</h2>
                            </div>

                            <div className='webField'>

                                <div className='label'>Website
                                    <span style={{ color: '#dc3545', fontSize: '0.6rem' }}> Required </span>
                                </div>
                                <div className="input-group">
                                    <div className="input-icon">
                                        <img src={web} alt="/binanceIcon" style={{width:"15px",height:"15px"}} />
                                        <input style={{marginLeft:"5px"}} placeholder="Ex:https://www.bitcoin.com" className="form-control"/>
                                    </div>
                                </div>

                            </div>

                            <div className='twitterField'>

                                <div className='label'>Twitter</div>
                                <div className="input-group">
                                    <div className="input-icon">
                                        <img src={twittercolor} alt="/binanceIcon" style={{width:"15px",height:"15px"}} />
                                        <input style={{marginLeft:"5px"}} placeholder="Ex:https://t.me/bitcoin.com" className="form-control"/>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='telegramField'>

                                <div className='label'>Telegram
                                </div>
                                <div className="input-group">
                                    <div className="input-icon">
                                        <img src={telegram} alt="/binanceIcon" style={{width:"15px",height:"15px"}} />
                                        <input style={{marginLeft:"5px"}} placeholder="Ex:https://twitter.com/profilename" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2>Additional informations</h2>
                            </div>

                            <div className='infoField'>

                                <textarea style={{ height: "80px" }} placeholder="Other links, other blockchain contracts or anything else you would like to add to your coin request" className="form-control" />

                            </div>

                        </div>

                    </div>

                    <div className="searchField">

                        <button className="btnSearch" >

                            <span style={{ color: "#fff", fontSize: "16px" }}>
                                Submit
                            </span>

                        </button>

                    </div>



                    <div className='listingrequirements'>

                        <div>
                            <h2>Listing requirements</h2>
                        </div>
                        <ul>
                            <li>Valid contract address</li>
                            <li>Working website where we can check the contract address</li>
                            <li>Locked liquidity</li>
                            <li>Reasonable holding of supply</li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AddCoin_Form
