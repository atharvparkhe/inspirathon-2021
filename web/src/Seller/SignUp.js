import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const BaseUrl = "https://inspiration-2021-backend.herokuapp.com/api/seller-signup/"
export default function SignUp() {
    const history = useHistory()
    
    
    const [gstno, setgstno] = useState()
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [confirmpassword, setconfirmpassword] = useState()
    const [phone_no, setphone_no] = useState()
    
    const handlesignup = ()=>{
      console.log(name,email,phone_no,gstno,password)
        if(password === confirmpassword){
            axios.post(BaseUrl,{
                "name": name,
                "email":email,
                "phone":phone_no,
                "aadhar":"131139",
                "gst":gstno,
                "password":password
            }).then((res)=>{
                console.log(res)
                toast.success(res.data.message)
                localStorage.setItem('email',email)
                history.push('/verify')
            }).catch((err)=>{toast.warning(err.response.data.error)})

        }
        else{
            toast.warning('Password are not same')
        }
    }

	return (
        <Container>

            <Text>Sign Up</Text>
            <Input_container>
            <Input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="Name"/>
            <Input type="text" onChange={(e)=>{setemail(e.target.value)}} placeholder="Email"/>
            <Input type="text" placeholder="Phone Number" onChange={(e)=>setphone_no(e.target.value)}></Input>
            <Input type="password" onChange={(e)=>{setpassword(e.target.value)}}placeholder="Password"/>
            <Input type="password" onChange={(e)=>{setconfirmpassword(e.target.value)}}placeholder="Confirm Password"/>
            <Input type="text" placeholder="GST No" onChange={(e)=>{setgstno(e.target.value)}}/>
            {/* <Input type="text" placeholder="Addhaar Card No" onChange={(e)=>{setgstno(e.target.value)}}/> */}
            <Button_container>
            <Button onClick={handlesignup}>SignUp</Button>
            <Button onClick={()=>{history.push("/")}}>Login</Button>
            </Button_container>
            </Input_container>
		
        </Container>

	)
            
    
}

const Text = styled.h1`
    margin-top: 10px;
    margin-bottom: 20px;
    color: black;
    padding: 20px
    margin-right: 20px;
`;


const Button = styled.button`
background: linear-gradient(to right, #14163c 0%, #03217b 79%);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 45%;
height: 3rem;
border: none;
color: white;
border-radius: 2rem;
cursor: pointer;
margin: 10px;

`;

const Input = styled.input`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    margin: 10px;
    width: 80%;
    margin-bottom: 0;
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
    // margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px,20px;
    margin-top: 30px;
    
`;

const Input_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 85%;
    width: 100%;
    
`;

const Container = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
flex-direction: column;
// background-color: red;
margin-left: auto;
margin-right: auto;
padding:0 ,20px;
height: 400px;
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
  height: 90vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 80vh;
}
    
`;
