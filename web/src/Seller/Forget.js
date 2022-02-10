import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const BaseUrl = "https://inspiration-2021-backend.herokuapp.com/api/seller-forgot/";
export default function Forget() {
    const [email,setemail] = useState();
    const history = useHistory()
    console.log(email)
    const handleforgotpass = () => {
        console.log(email)
        axios.post(BaseUrl,{
            "email" : email
        }).then((res)=>{
            toast.info(res.data.result)
            history.push('/fverify')
            localStorage.setItem('email',email)
        }).catch((err)=>{
          if(err.response.data.error.email){
            toast.warning(err.response.data.error.email[0])
          }
          toast.warning(err.response.data.error)
        })
    }
    return (
        <Container>
            <Input onChange={(e)=>setemail(e.target.value)} type="email"placeholder="Email"></Input>
            <Button variant="contained" disableElevation onClick={handleforgotpass}>Next</Button>
        </Container>
    )
}

const Input = styled.input`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    margin: 50px;
    width: 80%;
    height: 2.5rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
    }
    &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
    }
`;
const Button_container = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;
    
`;

const Input_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    margin: 40px;
`;

const Container = styled.div`
margin-top: 30px;
display: flex;
align-items: center;
flex-direction: column;
margin-left: auto;
margin-right: auto;
padding:30px;
height: 80vh;
width: 30vw;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.4rem;

h1 {
    color: black;
}

@media only screen and (max-width: 320px) {
  width: 80vw;
  height: 90vh;
  hr {
    margin-bottom: 0.3rem;
  }
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 360px) {
  width: 80vw;
  height: 90vh;
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 411px) {
  width: 80vw;
  height: 90vh;
}

@media only screen and (min-width: 768px) {
  width: 80vw;
  height: 80vh;
}
@media only screen and (min-width: 1024px) {
  width: 70vw;
  height: 50vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 40vh;
}
    
`;

