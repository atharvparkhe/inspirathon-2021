
// import React from 'react'
// import styled from 'styled-components'
// import Button from '@mui/material/Button'
// import axios from 'axios'
// import { useState } from 'react'
// const BaseUrl = "https://delta-inspiration.herokuapp.com/api/seller-update-orders/"
// export default function POcomponents({id}) {
//     const [checked, setchecked] = useState()
//     const handleCheck= ()=>{
//         setchecked(!checked)
//         axios.post(BaseUrl,{
//             "order_id":id,
//             "is_completed": checked
//         }).then((res)=>{console.log(res)}).catch((err)=>{
//             alert(err)
//         })
//     }
//     return (
//            <>
//                 <h1>test</h1>

//                  <Container>
//                     <p>{id}</p>
//                  <input type="checkbox" checked={handleCheck}/> 
//                   </Container>
//             </>
//     )
// }

// const Container = styled.div`
//     display: flex;
//     height: 100px;
//     width: 100px;
//     background-color: red;
    
// `; 