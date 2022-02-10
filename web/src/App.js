import './App.css';
import Login from './Seller/Login';
import SignUp from './Seller/SignUp';
import React,{Component} from 'react';
import SignUpNext from './Seller/SignUpNext';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Verify from './Seller/Verify';
import styled from 'styled-components';
import Forget from './Seller/Forget';
import Fverify from './Seller/Fverify';
import Dashboard from './Dashboard/Dashboard';
import PreviousOrder from './Seller/PreviousOrder';

function App() {
  // Location 

  // const getLocation=() =>{
  //  if (navigator.geolocation) {
  //    navigator.geolocation.getCurrentPosition(showposition)
  //   } else {
  //     alert("Sorry Not available!");
  //   }
  // }
  // const showposition = (position) =>{
  //   console.log(position.coords.latitude)
  // }
  const token = localStorage.getItem('token')

  console.log(token)
  return (
   <>
      <Container>
   {token == null ? <Login/>:(
        <Router>
          <Switch>
            <Route exact path="/signnext"><SignUpNext/></Route>
            {/* <Route exact path="/previousorders"><PreviousOrder/></Route> */}
            <Route exact path="/"><Login/></Route>
            <Route exact path="/dashboard"><Dashboard/></Route>
            <Route exact path="/signup"><SignUp/></Route>
            <Route exact path="/verify"><Verify/></Route>
            <Route exact path="/forget"><Forget/></Route>
            <Route exact path="/fverify"><Fverify/></Route>
          </Switch>
        </Router>)
}
      </Container>
  </>

    
  );
}

export default App;

const Container = styled.div`
opacity:0.8;
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:1000;
`;
