import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './services.css'
const Services = () => {
const[service,setService]=useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
 <div className="bg">
<div className="container">
<h1>Our Services</h1>
<div className="row mb-5">
{
service.map((pb)=>(
    <div key={pb.id} className="col-md-6 col-lg-4 col-sm-12 mb-4">
   <div className="">
              <div className="card">
                <img src={pb.image} alt="category" />
             
              <h6 className="mt-4">{pb.name}</h6>
              <p className="mt-2">{pb.details}</p>
           <Link className="d-flex justify-content-center" to={`/servicedetalis/${pb.id}`}>
           <button className="btn btn-info ">Details</button>
           </Link>
           </div>
            </div>

    </div>
))


}


</div>
</div>
 </div>
    );



 
};

export default Services;