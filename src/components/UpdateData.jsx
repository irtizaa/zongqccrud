// For GetUserByID

// import React, { useEffect } from 'react';
// import axios from 'axios';

// function UserDetails({ userId }) {
//   useEffect(() => {
//     // Fetch user details by ID when the component mounts
//     getUserDetailsByID(userId);
//   }, [userId]); // Make sure to re-run the effect when userId changes

//   const getUserDetailsByID = (id) => {
//     axios
//       .get(`http://localhost:1000/customer/${id}`) // Replace with your API endpoint
//       .then(res => {
//         // Handle the user details, for example:
//         console.log('User details:', res.data);
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//        {userDetails ? ID (
//         <div>
//           <h3>User Details</h3>
//           <p>ID: {userDetails.ID}</p>
//           <p>No of Pit: {userDetails.No_of_Pit}</p>
//           {/* Include other fields as needed */}
//         </div>
//       ) : (
//         <p>Loading user details...</p>
//       )}
//     </div>
//   );
// }

// export default UserDetails;

// For Update/Put Data

// import React, { Component } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';

// function UpdateData() {
//     const [pits, setPits] = useState('');
//     const [ringtag, setRingtag] = useState('');
//     const {id} = useParams();

//     const navigate = useNavigate();

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         // const userData = {
//         //   email: data.email,
//         //   password: data.password
//         // };
//         axios.put("http://localhost:1000/update/" + id,{pits, ringtag})
//         .then((response) => {
//         //   console.log(response.status, response.data);
//         console.log(response);
//         navigate('/')
//         }).catch(console.error());
//     };

//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//       <label htmlFor="pits">
//         Pits
//         <input
//           type="text"
//           name="pits"
//         //   value={data.pits}
//           onChange={e =>setPits(e.target.value)}
//         />
//       </label>
//       <label htmlFor="ringtag">
//       Ring Tag
//         <input
//           type="text"
//           name="ringtag"
//         //   value={data.password}
//           onChange={e =>setRingtag(e.target.value)}
//         />
//       </label>

//       <button type="submit">Update</button>
//     </form>
//       </div>
//     )
//   }

// export default UpdateData;


// Other Approach


// import React from "react";
// import { useState } from 'react'

// import { useParams } from "react-router-dom";

// export default function UpdateData() {


//   // const customerId = props.match.params.id;
//   const {customerId} = useParams();
//   const [customer, setCustomer] = useState([])

//   useEffect(() =>{
//     axios.get(`http://localhost:1000/customersupdate/${customerId}`)
//     .then(res =>{
//         console.log(res)
//         setCustomer(...values, No_of_Pit= res.data[0].No_of_Pit, Ring_Tag = res.data[0].Ring_Tag)
//     })
//     .catch(err => console.log(err))
// },[] )


//   const [data, setData] = useState({
//     // No_of_Pit:customer.No_of_Pit,
//     // "Survey_Date": new Date().toISOString().split('T')[0],
//     // Ring_Tag: customer.Ring_Tag,
//     // Section_Name : customer.Section_Name,
//     // Trench_Depth_Ft: customer.Trench_Depth_Ft,
//     // Latitude :customer.Latitude ,
//     // Longitude : customer.Longitude,
//     // Trench_Alignment : customer.Trench_Alignment,
//     // Observations : customer.Observations,
//     // Correction_Required : customer.Correction_Required,
//     // Correction_Length : customer.Correction_Length,
//     // Trench_Distance : customer.Trench_Distance,
//     // ID: customer.ID


//     No_of_Pit:'',
//     Survey_Date:new Date().toISOString().split('T')[0],
//     Ring_Tag: '',
//     Section_Name :'',
//     Trench_Depth_Ft: '',
//     Latitude : '',
//     Longitude : '',
//     Trench_Alignment : '', 
//     Observations : '',
//     Correction_Required: '',
//     Correction_Length :'',
//     Trench_Distance : '',
//     ID: ''
//   });
  
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };
//   return (
//     <div className="create-container bg-primary">
//       <div className="form-container bg-white rounded p-3">
//         <h2>Update OSP QC Data</h2>
//         <form onSubmit={handleFormSubmit}>
       

//           <div className="form-group">
//             <label htmlFor="ID">ID</label>
//             <input
//               type="text"
//               id="ID"
//               name="ID"
//               placeholder="Enter ID"
//               className="form-control"
//               value={data.ID}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button type="submit" className=" bg-primary">Update Data</button>
//         </form>
//       </div>
//     </div>
//   );
// }


// By Chat GPT

import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateForm({ customerData }) {
  const { id } = useParams();
  const [updatedData, setUpdatedData] = useState({ ...customerData });
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:1000/customersupdate/${id}`, updatedData);
      setMessage(`Data with ID ${id} updated successfully`);
    } catch (error) {
      setMessage('An error occurred while updating the data.');
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  return (
<div className="home-container bg-primary">
<div className="table-container bg-white rounded p-3">
      <h2>Edit Data</h2>
      <div className="table-responsive">
      <table className="table">
      <thead>     
      <div>
        <label>No of Pit:</label>
        <input
          type="text"
          name="No_of_Pit"
          value={updatedData.No_of_Pit}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Survey Date:</label>
        <input
          type="text"
          name="Survey_Date"
          value={updatedData.Survey_Date}
          onChange={handleChange}
        />
      </div>
      {/* ... (other input fields for each data field) */}
      <button onClick={handleUpdate}>Update Data</button>
      <p>{message}</p>
      </thead>
      </table>
      </div>
    </div>
    </div>
  );
}

export default UpdateForm;