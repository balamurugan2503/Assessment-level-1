import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import '../../Components/Cart/cart.css'

export default function CardComp({filterList}) {
    const [countryList,setCountryList]=useState([])
    const [indexState,setIndexState]=useState(20)
    const [filterdata,setFilterData]=useState([])

const countryListApi=async()=>{
const res=await fetch("https://restcountries.com/v2/all?fields=name,region,flag")
const data=await res.json()
setCountryList(data)
setFilterData(data)
console.log(data,'oiiuuuuu')
}

useEffect(()=>{
    countryListApi()
    
},[])

useEffect(()=>{
  if(filterList !=="All"){
    let dataList=filterdata.filter((s)=>s.region===filterList)
    setCountryList(dataList)
  }else{
    setCountryList(filterdata)
  }
 
 console.log(filterList,'42423423')
},[filterList])
const handleCick=()=>{
  setIndexState(indexState+20)
}
  return (
    <div className='card-page-wrapper'>
        {

    
    countryList?.map((data,index)=>(
      indexState>index&&
        <Row key={index} style={{marginBottom:"20px"}}>
        <Col md={6} sm={12} > 
          <Card className="h-100" style={{border:" solid #3E3E3E"}}> {/* Ensures both cards have the same height */}
            <Card.Body> 
              <Row> 
                <Col md={4}> 
                  <Card.Img variant="top" src={data.flag}  style={{ borderRadius: '10px' }} /> {/* Image */}
                </Col>
                <Col md={8}> 
                  <Card.Title>{data.name}</Card.Title> {/* Title */}
                  <Card.Text>{data.region}</Card.Text> {/* Content */}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
  
        <Col md={6} sm={12}> 
          <Card   style={{border:" solid #3E3E3E"}}> {/* Ensures both cards have the same height */}
            <Card.Body> 
              <Row> 
                <Col md={4}> 
                  <Card.Img variant="top" src={data.flag}  style={{ borderRadius: '10px' }} /> {/* Image */}
                </Col>
                <Col md={8}> 
                  <Card.Title>{data.name}</Card.Title> {/* Title */}
                  <Card.Text>{data.region}</Card.Text> {/* Content */}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    ))}
    <div className='load_more'>
      <button onClick={()=>handleCick()}>Load more</button>
    </div>
    </div>
  )
}
