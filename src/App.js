import './App.css';
import TopBar from './components/TopBar/TopBar'
import HeaderTab from './components/HeaderTab/HeaderTab'
import Footer from './components/Footer/Footer.jsx'
import Disclaimer from './components/Disclaimer/Disclaimer.jsx'
import PrivacyPolicy from './components/Privacy Policy/PrivacyPolicy.jsx'
import TermsCondition from './components/Terms Condition/TermsCondition.jsx'

import Promote from './components/Promote/Promote.jsx'
import WatchList from './components/Account WatchList/Watchlist.jsx'
import AddCoin from './components/Add Coin/AddCoin.jsx'
import AddCoin_Form from './components/AddCoin Form/AddCoin_Form.jsx'
import Contact from './components/ContactUs/Contactus.jsx'

import login from './components/Login/Login.jsx'
import Signup from './components/SignUp/Signup.jsx'

import CoinIndex from './components/Coin Index/Coin_Index'
import HashPanda from './components/Hashpanda/Hashpanda.jsx'



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <Router>

      <div className="App">
        <TopBar />

        <Switch>

          <Route path="/" exact component={HeaderTab} ></Route>

          {/* Footer */}

          <Route path="/disclaimer" component={Disclaimer} ></Route>
          <Route path="/PrivacyPolicy" component={PrivacyPolicy} ></Route>
          <Route path="/TermsandCondition" component={TermsCondition}></Route>
          <Route path="/CoinIndex" component={CoinIndex}></Route>

          <Route path='/Coin/HashPanda' component={HashPanda}></Route>


          {/* Main Menu */}

          <Route path="/Account_Watchlist" component={WatchList}></Route>
          <Route path="/Promote" component={Promote}></Route>
          <Route path="/AddCoin" component={AddCoin}></Route>
          <Route path="/AddCoinForm" component={AddCoin_Form}></Route>
          <Route path="/ContactUs" component={Contact}></Route>

          {/* Login - SignUp*/}

          <Route path="/Login" component={login}></Route>
          <Route path="/Signup" component={Signup}></Route>



        </ Switch>

        <Footer />


      </div>
    </Router>
  );
}

export default App;
