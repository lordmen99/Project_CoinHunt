import React from 'react'
import './promote.css'
import promoteImage from '../../Images/promote.svg'

function Promote() {
    return (
        <div className="main">

            <div className='promotePage'>

                <div className='picture'>
                    <img src={promoteImage} alt="image" className='topimage' />
                </div>
                <div className='topbar'>
                    <b style={{ background: 'white' }}>Promote your coin</b>
                    <div className='tagline'>
                       <strong>Get the visibility you need</strong>
                    </div >
                </div>
                <div className='thirdrow'>
                    <div className='mainthirdrow'>
                        <div className='thirdrow1'>
                            <strong>Average daily users</strong>
                            <div><strong>100 000</strong></div>
                        </div>
                        
                        <div className='thirdrow2'>
                            <strong>Twitter followers</strong>
                            <div><strong>36 000</strong></div>
                        </div>
                        <div className='thirdrow3'>
                            <strong>Newsletter Subscribers</strong>
                            <strong><div>7 000</div></strong>
                        </div>
                    </div>

                </div>
                <div className='fourthrow'>
                    <div className='mainfourthrow'>
                        <strong>Official Alexa rank by Amazon</strong>
                        <div>
                        <a href="https://www.alexa.com/siteinfo/coinhunt.cc" target="_Blank"><strong>coinhunt.cc Competitive Analysis, Marketing Mix and Traffic - Alexa</strong></a>
                        </div>
                    </div>

                </div>
                <div className='fifthrow'>
                    <div style={{fontSize:"18px"}}>
                    <strong>To promote your coin</strong>
                    </div>
                    <div style={{fontSize:"18px"}}>
                    <a href="mailto:coderatory@gmail.com"><strong>Mail to: contact@coinhunt.cc</strong></a>
                    </div>
                    <div><strong>Do never pay anyone for a promotion on our platform, unless you have received a confirmation email</strong></div>
                </div>

            </div>
            

        </div>
    )
}

export default Promote
