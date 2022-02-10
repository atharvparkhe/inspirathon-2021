import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const BaseUrl = "https://inspiration-2021-backend.herokuapp.com/api/seller-verify/"
const BaseUrl_resend = "https://inspiration-2021-backend.herokuapp.com/api/resend/seller-verify/"

export default function Verify() {
    const history = useHistory();
    const handleresend = () =>{
        const email = localStorage.getItem('email')
        console.log(email);
        axios.post(BaseUrl_resend,{
            "email": email
        }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err.response)})
    }
    const [opt,setopt] = useState()
    const handleopt = ()=>{
        axios.post(BaseUrl,{
            "otp":opt
        }).then((res)=>{
          toast.success(res.data.message)
            history.push("/")
        }).catch((err)=>{toast.warning(err.response.data.message)})
    }
    return (
        <>
        {localStorage.getItem('email') ? 
            
            (<Container>
                <Input_container>
                <Input type="number" onChange={(e)=>{setopt(e.target.value)}} placeholder="Enter the otp"/>
                </Input_container>
                <Button_container>
                <Button onClick={handleopt}>Submit</Button>
                {/* <Button onClick={handleresend} >Resend opt</Button> */}
                </Button_container>
            </Container>
            ):history.push('/')}
        </>
    )
}

const Button = styled.button`
background: linear-gradient(to right, #14163c 0%, #03217b 79%);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 65%;
height: 3rem;
border: none;
color: white;
border-radius: 2rem;
cursor: pointer;
margin: 20px;
`;

const Input = styled.input`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    margin: 15px;
    width: 80%;
    height: 3rem;
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
    margin: 50px;
    
`;

const Input_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    margin: 90px;
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
  height: 70vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 70vh;
}
    
`;
