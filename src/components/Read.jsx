import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Read() {
 
  const customerId = props.match.params.id;
    const [customer, setCustomer] = useState([])
    useEffect(() =>{
            axios.get(`http://localhost:1000/customers/${customerId}`)
            .then(res =>{
                console.log(res)
                setCustomer(res.data[0])
            })
            .catch(err => console.log(err))
    },[] )
    return (
      <div className="home-container bg-primary">
        <h1>Data</h1>
        <h1>{customer.ID}</h1>
        {/* <h1>{customer.No_of_Pit}</h1>
        <h1>{customer.Survey_Date}</h1>
        <h1>{customer.Ring_Tag}</h1>
        <h1>{customer.Section_Name}</h1>
        <h1>{customer.Trench_Depth_Ft}</h1>
        <h1>{customer.Latitude}</h1>
        <h1>{customer.Longitude}</h1>
        <h1>{customer.Trench_Alignment}</h1>
        <h1>{customer.Observations}</h1>
        <h1>{customer.Correction_Required}</h1>
        <h1>{customer.Correction_Length}</h1>
        <h1>{customer.Trench_Distance}</h1> */}
      </div>
    )
  }


export default Read;