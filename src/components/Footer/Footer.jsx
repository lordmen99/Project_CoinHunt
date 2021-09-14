import React from 'react'
import { Telegram, Twitter } from '@material-ui/icons';

import './footer.css'

function Footer() {
    return (
        <div className='footer'>

            <div className="footerMenu">

                <ul>
                    <li>
                    <a onClick={e => window.location.href ='/Disclaimer'}>Disclaimer</a>
                    </li>
                    <li>
                        <a onClick={e => window.location.href ='/PrivacyPolicy'}>Privacy Policy</a>
                    </li>
                    <li>
                    <a onClick={e => window.location.href ='/TermsandCondition'}>Terms & conditions</a>
                    </li>
                    <li>
                    <a onClick={e => window.location.href ='/CoinIndex'}>Coin Index</a>
                    </li>
                </ul>
                
            </div>

            <div className="footerIcons">
                <div className="twitter">
                    <a href="www.twitter.com"><Twitter style={{ color: "#62b1f6" }} /></a>
                </div>
                <div className="fb">
                    <a href="www.telegram.com"><Telegram style={{ color: "#007bff" }} /> </a>
                </div>

            </div>

            <div className="copyRight">
                <p>Copyright &copy; 2021 Contact@coinhunt.cc</p>
            </div>


        </div>

    )
}

export default Footer
