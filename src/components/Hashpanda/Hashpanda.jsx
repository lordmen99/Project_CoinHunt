import React from 'react'

import './hashPanda.css';
import panda from '../../Images/panda.png';
import bottomgraph from '../../Images/bottomgraph.png'

function Hashpanda() {
    return (
        <>

        <div className="hashPandaaa">

        

            <div className='cointoprow'>

                <div className='coinleftside'>
                    <div className='hashpandarow'>
                        <div className='pandaimage'>
                            <img src={panda} alt="panda" className='pandapicture' />
                        </div>

                        <div className='pandadescription'>
                            Hashpanda
                            <button className='hashbutton'>
                                22212
                            </button>
                            <div className='binance'>
                                Binance Smart Chain:0x8578Eb576e126f67913a8bC0622e0A22EBa0989A
                            </div>
                        </div>
                    </div>

                    <div className='coinarea'>
                        <div className='coindescription'>
                            <p>🐼HashPanda is a meme token with virality mechanisms and dApps for non-technical users. Its mission is to make cryptocurrencies mainstream.
                                🔥 It has allocated 40% of its supply for community distributed through rewards, airdrops, and content/creator tipping on its dApps. 💎
                                <br /><br />
                                It has over 13500 community members, over 8400 token holders on BSC and 3 dApps in development! And most importantly: it features a Panda! 🐼🎋
                            </p>
                        </div>
                        <div className='bottomimage'>
                            <img src={bottomgraph} alt="bottom" />
                        </div>
                    </div>

                </div>

                <div className='coinrightside'>
                    <div className='coindatacard'>
                        <div style={{ color: 'grey', backgroundColor: 'white' }}>Price 0.27%</div>
                        <div style={{ backgroundColor: 'white' }}>$0.000000009569870882</div>
                        <div style={{ color: 'grey', backgroundColor: 'white' }}>Market Cap</div>
                        <div style={{ backgroundColor: 'white' }}>$9,567,461</div>
                        <div style={{ color: 'grey', backgroundColor: 'white' }}>Launch Date</div>
                        <div style={{ backgroundColor: 'white' }}>May 14,2021</div>
                    </div>
                    <div className='coinlinkcard'>
                        <button className='Telegram'>Telegram</button>
                        <button className='Website'>Website</button>
                    </div>
                    <div className='coindetailcard'>
                        <div className='coindetail'>
                            Discover
                        </div>
                        <div className='coindetailslist'>
                            <div className='coindetailslist'>Kazoku Charity Token</div>
                            <div className='coindetailslist'>BUSD Swap</div>
                            <div className='coindetailslist'>Aquagon</div>
                            <div className='coindetailslist'>GamerInu</div>
                            <div className='coindetailslist'>AuntDoge</div>

                        </div>

                    </div>

                </div>
            </div>

            </div>

        </>
    )
}

export default Hashpanda
