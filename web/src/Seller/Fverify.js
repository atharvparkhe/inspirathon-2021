import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const BaseUrl = "https://inspiration-2021-backend.herokuapp.com/api/seller-reset/"

export default function Fverify() {
    const [otp, setotp] = useState()
    const [newpassword, setnewpassword] = useState()
    const [confirmnewpassword, setconfirmnewpassword] = useState()
    const history = useHistory()
    const handle_change_password = () =>{
        if(newpassword === confirmnewpassword){
            axios.post(BaseUrl,{
                "otp":otp,
                "npw":newpassword,
                "cpw":confirmnewpassword
            }).then((res)=>{
                toast.success(res.data.message)
                history.push("/")
            }).catch((err)=>toast.warning(err.response.data.message))
        }
        else{
          toast.warning("Password not matching")
        }
    }
    const handle_resend_opt = () =>{
        axios.post("https://delta-inspiration.herokuapp.com/api/resend/seller-forgot/",{
            "email": localStorage.getItem('email')
        }).then((res)=>{console.log(res.data.result)}).catch((err)=>{console.log(err.response)})
    }
    return (
        <Container>
            <Input type="number" onChange={(e)=>{setotp(e.target.value)}} placeholder="otp"></Input>
            <Input type="password" onChange={(e)=>{setnewpassword(e.target.value)}} placeholder="New password"></Input>
            <Input type="password" onChange={(e)=>{setconfirmnewpassword(e.target.value)}}placeholder="Confirm new password"></Input>
            <Button type="submit" onClick={handle_change_password}>Submit</Button>
            {/* <Button onClick={handle_resend_opt}>Re send otp</Button> */}
        </Container>
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
  height: 70vh;
}
    
`;
