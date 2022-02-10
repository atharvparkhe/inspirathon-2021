import React from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



const BaseUrl = "https://inspiration-2021-backend.herokuapp.com/api/restaurants/"

export default function SignUpNext() {
  const [address, setaddress] = useState()
  const [pincode, setpincode] = useState()
  const [Shopname, setShopname] = useState()
  const [description, setdescription] = useState()
  const [img, setimg] = useState()
  const [latitude, setlatitude] = useState()
  const [longitude, setlongitude] = useState()
  const [town, settown] = useState()
  const [state, setstate] = useState()

  const history = useHistory();
  // Location fetching
  const getLocation=() =>{
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showposition)
    } else {
      toast.warning("Sorry Locaiton Not available!");
    }
  }
  const showposition = (position) =>{
    console.log(position.coords.latitude)
    setlatitude(position.coords.latitude)
    setlongitude(position.coords.longitude)
  }

    const FileUploader = () => {
        const hiddenFileInput = React.useRef(null);
        
        const handleClick = event => {
          hiddenFileInput.current.click();
        };
        const handleChange = event => {
          const fileUploaded = event.target.files[0];
          setimg(fileUploaded);

        };
        return (
          <>
            <Button variant="contained" onClick={handleClick}>
              Upload photo
            </Button>
            <input type="file"
                   ref={hiddenFileInput}
                   onChange={handleChange}
                   style={{display:'none'}} 
            /> 
          </>
        );
      };
    const handlesubmit=()=>{
      getLocation()
      const data = new FormData()
      data.append('name',Shopname)
      data.append('description',description)
      data.append('address',address)
      data.append('latitude',latitude)
      data.append('longitude',longitude)
      data.append('town',town)
      data.append('state',state)
      data.append('pincode',pincode)
      data.append('logo',img)
      axios.post(BaseUrl,data,{
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res)=>{
        toast.info(res.data.message)
        localStorage.setItem('res_id',res.data.data.id)
        history.push('/')
      }).catch((err)=>{
        console.log(err.response)
        toast.warning(err.response.message)
        console.log(localStorage.getItem('token'))
        // localStorage.setItem('token',null)
        // history.push('/')
      })
    }
    return (
    <Container>
        <h1>Enter Details</h1>
            <Input_container>
                <Input type="text" placeholder="Shop Name" onChange={(e)=>{setShopname(e.target.value)}} />
                <Input type="text" placeholder="Description" onChange={(e)=>{setdescription(e.target.value)}}/>
                <Input type="text" placeholder="Address" onChange={(e)=>{setaddress(e.target.value)}}/>
                <Input type="number" placeholder="Pincode" onChange={(e)=>{setpincode(e.target.value)}}/>
                <Input type="text" placeholder="Town" onChange={(e)=>{settown(e.target.value)}}/>
                <Input type="text" placeholder="state" onChange={(e)=>{setstate(e.target.value)}}/>
            </Input_container>
            <Button_container>
                {FileUploader()}
               
                <Button type="submit" onClick={handlesubmit}>Next</Button>
            </Button_container>
    </Container>
    )
}
const Input = styled.input`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 14px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    margin: 10px;
    width: 80%;
    height: 2rem;
    padding: 0.5rem;
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

const Button_text = styled.p`
    font-size: 11px;
    color: black;
    cursor: pointer;s
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 320px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    margin: 20px;
    width: 80%;
    height: 20px;
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
    display: flex;
    flex-direction: column;
		padding: 10px;
		margin-bottom: 0px;
		display: flex;
		align-items: center;
    // margin: 1rem 0 2rem 0;
    // width: 100%;
    // display: flex;
    // // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // margin:50px;
    
`;

const Input_container = styled.div`
    display: flex;
		padding: 15px;
		margin: 10px;
		// background-color: red;
		margin-left: auto;
		margin-right: auto;
    overflow-y: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
margin-top: 30px;
display: flex;
align-items: center;
flex-direction: column;
margin-left: auto;
margin-right: auto;
padding:30px;
height: 80vh;
width: 30vw;
overflow: scroll;
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
  width: 75vw;
  height: 80vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 80vh;
}
    
`;
