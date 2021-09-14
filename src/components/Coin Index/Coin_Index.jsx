import React from 'react'
import './coinIndex.css'

function Coin_Index() {
    return (

        <div className="indexBtn">

            <ul>

                <li><a onClick={e => window.location.href='/'}>Home</a></li>

                <ul>
                    <li><a onClick={e => window.location.href="/AddCoin"}>Submit your coin for a listing on CoinHunt</a></li>
                    <li><a onClick={e => window.location.href="/Promote"}>Advertising on CoinHunt</a></li>
                    <li><a onClick={e => window.location.href="/login"}>Login to CoinHunt</a></li>
                    <li><a onClick={e => window.location.href ='/Disclaimer'}>CoinHunt Important Disclaimer</a></li>
                    <li><a onClick={e => window.location.href ='/PrivacyPolicy'}>CoinHunt Privacy Policy</a></li>
                    <li><a onClick={e => window.location.href ='/TermsandCondition'}>CoinHunt Terms and Conditions</a></li>

                    <ul>
                        <li><a onClick={e=>window.location.href='/Coin/HashPanda'}>Hashpanda</a></li>
                        <li><a href="#">BSC Army</a></li>
                        <li><a href="#">Catgirl</a></li>
                        <li><a href="#">BoxerInu</a></li>
                        <li><a href="#">TODAMOON</a></li>
                        <li><a href="#">Decentralized Community Investment Protocol</a></li>
                        <li><a href="#">SaveYourAssets</a></li>
                        <li><a href="#">Pepemoon</a></li>
                        <li><a href="#">TravelCake</a></li>
                        <li><a href="#">Micro-Gaming Protocol</a></li>
                        <li><a href="#">Cumblast</a></li>
                        <li><a href="#">GEM Protocol</a></li>
                        <li><a href="#">GHOSTFACE</a></li>
                        <li><a href="#">SafeBull</a></li>
                        <li><a href="#">BabyBossFinance</a></li>
                    </ul>

                </ul>



            </ul>


        </div>
    )
}

export default Coin_Index
