import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card,Row,Col,Container } from 'react-bootstrap';
import "../styles/style.css"

const Home = () => {
    const [data,setData]=useState([]);
    const [isError,setIserror]=useState("");
    




    useEffect(
        ()=>{
            axios.get("https://restcountries.com/v2/all?fields=name,region,flag").then(
                (res)=>{
                    setData(res.data);
                }
            ).catch((error)=>setIserror(error.message))

        },[]
    )

  return (
    <React.Fragment>
    
    <Container>
    <Row>    
    {    data.map(
            (value,i)=>{
                return(   
                   <Col key={i} md="4" sm="12" xl="4" xs="12">               
                    <Card  className="my-3">
                            <Card.Img className='cardImage' variant="top" src={value.flag} />
                                               
                        <Card.Body> 
                            <Card.Title>{value.name}</Card.Title>                    
                            <p>{value.region}</p>      
                        </Card.Body>
                    </Card>
                    </Col> 
                )           

            } )  
       
    }
    
    </Row>
    </Container>  
    
    </React.Fragment>

   
  )
}

export default Home;