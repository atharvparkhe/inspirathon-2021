import React,{useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';
import { browserHistory } from 'react-router'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const BaseUrl = "https://inspiration-2021-backend.herokuapp.com/api/seller-login/"
const checkUrl = "https://inspiration-2021-backend.herokuapp.com/api/check-restaurant/"

const secondary = "#f9fbf2";
export default function Login() {

    const history = useHistory()
		// const history = useNavigate() 
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [info, setinfo] = useState(null)
    const handlelogin = ()=>{
    
      axios.post(BaseUrl,{
        "email":email,
        "password": password
      }).then((res)=>{
        toast.success(res.data.message);
				console.log("Login info")
        console.log(res.data);
        // localStorage.setItem('res_id',res.data.restaurant_id)
        localStorage.setItem('token',res.data.token)
        if(res.data.restaurant_id != undefined){
					localStorage.setItem('res_id',res.data.restaurant_id)
          history.push('/dashboard')
          
        }
        else{
          history.push('/signnext')
        }
        
      }).catch((err)=>{
        console.log(err.response.data.message)
        toast.warning(err.response.data.message)
        
        localStorage.setItem('token',null)
      })
    }
    return (
    <Container>
            <h1 >Login</h1>
                <Input_container>
                    <Input type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
                    <Input type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
                </Input_container>
                <Button_container>
                    <Button type="submit" onClick={handlelogin}>Submit</Button>
                    <Button_text onClick={()=>{history.push('/forget')}}>Forget Password ?</Button_text>
                     <Button_text onClick={()=>{history.push('/signup')}}>Sign Up</Button_text>
                </Button_container>
        </Container>

    )
}

const Button_text = styled.p`
		padding-top: 20px;
    font-size: 11px;
    color: black;
    cursor: pointer;
    color: ${secondary};
`;
const Button = styled.button`
// background: linear-gradient(to right, #14163c 0%, #03217b 79%);
background: ${secondary};
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 65%;
height: 3rem;
border: none;
color: #191a19;
border-radius: 2rem;
cursor: pointer;
margin: 20px;
`;

const Input = styled.input`
    // background: rgba(255, 255, 255, 0.15);
    background:  #191a19;
    font-color: ${secondary};
    // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    box-shadow: 0 2px 0 0 ${secondary};
    border-radius: 2rem;
    margin: 15px;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
    // color: #3c354e;
    color: ${secondary};
    font-size: 1rem;
    font-weight: bold;
    &:focus {
    display: inline-block;
    // box-shadow: 0 0 0 0.2rem #b9abe0;
    box-shadow: 0 0 0 0.2rem ${secondary};
    // backdrop-filter: blur(12rem);
    border-radius: 2rem;
    }
    &::placeholder {
    // color: #b9abe099;
    color: ${secondary};
    font-weight: 100;
    font-size: 1rem;
    }
`;
const Button_container = styled.div`
		padding-top: 10px;
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
		padding-top: 30px;
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
flex: 1;
align-items: center;
flex-direction: column;
margin-left: auto;
margin-right: auto;
margin-bottom: auto;
padding:30px;
// height: 80vh;
// width: 30vw;
background: #191a19;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.4rem;

h1 {
    color: ${secondary};
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
  height: 80vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 70vh;
}
    
`;
