import React from 'react'
import { useHistory } from 'react-router'
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function Header({logo , shopName}) {
		console.log(logo)
    const history = useHistory()
    return (
        <>
   <Navbar>
       <LeftContainer>
				<Avatar alt="Remy Sharp" src={logo} style={{'margin-right': '10px'}}/>
            <h1>{shopName}</h1>
       </LeftContainer>
       <RightContainer>
           {/* <Button onClick={(e)=>{history.push('/previousorders')}}>Previous Orders</Button> */}
           <Button style={{color: 'red'}}onClick={(e)=>{
               localStorage.setItem('token',null)
                toast.success("Logout successfull")
               history.push("/")
               }}>Logout</Button>
       </RightContainer>
   </Navbar>
      </>
    )
}

const Navbar = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 50px;
    justify-content: space-between;
    background-color: black;
    
`;
const LeftContainer = styled.div`
    display: flex;
    align-items: centre;
    justify-content: centre;
    padding: 5px;
    h1{
        color: white;
    }
`;
const RightContainer = styled.div`
    display: flex;
    align-items: centre;
    padding: 10px;
    
`;
