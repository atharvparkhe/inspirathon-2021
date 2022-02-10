import React, { useEffect, useState, } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Table from './Table'
import axios from 'axios'
import Button from '@mui/material/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router'
toast.configure()

// const BaseUrl = "https://delta-inspiration.herokuapp.com/api/get-seats/"
// const PostUrl = "https://delta-inspiration.herokuapp.com/api/add-seat/"
const BaseUrl = "https://inspiration-2021-backend.herokuapp.com/api/get-seats/"
const PostUrl = "https://inspiration-2021-backend.herokuapp.com/api/add-seat/"


export default function Dashboard() {
    const history = useHistory()
    const [input, setinput] = useState(false)
    const [tablename, settablename] = useState()
    const [tables, settables] = useState()
		const [shopName, setshopName] = useState()
		const [logoUrl , setlogoUrl] = useState()

    function fetchdata (){
        // console.log(localStorage.getItem('res_id'));
			axios.get(`https://inspiration-2021-backend.herokuapp.com/api/restaurant/${localStorage.getItem('res_id')}`).then((res) => {
				console.log(res)
				setshopName(res.data.name)
				setlogoUrl(res.data.logo)
			})
				
			axios.post(BaseUrl,{
            "restaurant_id":localStorage.getItem('res_id')
        }).then((res)=>{
            settables(res.data.data)
            console.log(tables)
        }).catch((err)=>{
            console.log(err)
            localStorage.setItem('token',null)
            history.push('/')
            
        })
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return (
        <>
        <Header logo={logoUrl} shopName = {shopName}/>
        <Container>
            <TextContainer>
                <h1>Tables:- </h1>
                {input && <Input placeholder="Table name" onChange={(e)=>{settablename(e.target.value)}}/>}
                <Button onClick={()=>{
                    setinput(!input)
                    {tablename && axios.post(PostUrl,{
                        "restaurant_id": localStorage.getItem('res_id'),
                        "seat_name":tablename
                    }).then((res)=>{
                        toast.success("table added")
                        fetchdata()
                        settablename(null)
                    }
                    ).catch((err)=>{console.warn(err);})}
                    }}>Add table</Button>
            </TextContainer>
        <ItemContainer>
           { tables && Object.keys(tables).map((key,index)=>{
               return <Table key={key} update={fetchdata}id={tables[index].id}name={tables[index].seat_name} available={tables[index].is_available} />
           })
           }
        </ItemContainer>
        </Container>
        </>
        )
}
const Input = styled.input`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    
    width: 80%;
    height: 0.5rem;
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

const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    align-items:centre;
    max-height: 47px;
`;
const ItemContainer = styled.div`
    display: grid;
		// background-color: red;	
    grid-template-columns: repeat(auto-fit, minmax(204px, 1fr));
    grid-gap: 16px;
    padding: 60px;
    // margin-left: 80px;
    
    `;
    const Container = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
`;
