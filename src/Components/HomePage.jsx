import React, { useEffect, useState } from 'react'
import CollapsibleExample from './Home'
import CardComp from './Cart'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
export default function HomePage() {
    const navigate=useNavigate()
    const [filterList,setFilterList]=useState("All")
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login")
        }
      
    },[])
  return (
<>
<CollapsibleExample filterList={filterList} setFilterList={setFilterList} />
 <CardComp  filterList={filterList}/>
 <Footer /> 
</>  )
}
