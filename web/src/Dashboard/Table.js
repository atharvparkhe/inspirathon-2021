import React from 'react'
import styled from 'styled-components'
import red_table from './dinner_table.png'
import green_table from './green_dinner_table.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function Table({ update,id,name,available}) {
    const BaseUrl = `https://inspiration-2021-backend.herokuapp.com/api/seat/${id}/`
    
    const handle_availability = ()=>{
        axios.patch(BaseUrl,{
            "is_available": !available
        },{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem(`token`)}`
            }
        }).then((res)=>{
            update()
            toast.success("Availability Status updated")
        }).catch((err)=>{console.warn(err)})
    }
    return (
        <Container onClick={handle_availability}>
           {available ? <img src={red_table}/>:<img src={green_table}/>}
            <Text>{name}</Text>

        </Container>
    )
}
const Container = styled.div`
    width: 70px;
    display: flex;
    justify-content: centre;
    flex-direction: column;
    align-items: centre;
    height: 90px;
    // background-color: red;
    margin: 10px;
    cursor: pointer;
    
`;
const Text = styled.p`
    // width: 100%;
    margin-left: auto;
    margin-right: auto;
`;
