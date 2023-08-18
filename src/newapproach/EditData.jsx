// import React, { useState, useEffect } from "react";

// function EditForm({ item, onUpdate }) {
//   const [formData, setFormData] = useState(item);

//   useEffect(() => {
//     setFormData(item);
//   }, [item]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = () => {
//     onUpdate(formData);
//   };

//   return (
//     <div>
//       <h2>Edit Form</h2>
//       <form>
//         {/* Render input fields for editing */}
//         <input
//           type="number"
//           name="No_of_Pit"
//           value={formData.No_of_Pit}
//           onChange={handleInputChange}
//         />

//         <input
//           type="date"
//           name="Survey_Date"
//           value={formData.Survey_Date}
//           onChange={handleInputChange}
//         />

//         <input
//           type="text"
//           name="Ring_Tag"
//           value={formData.Ring_Tag}
//           onChange={handleInputChange}
//         />

//         <input
//           type="text"
//           name="Section_Name"
//           value={formData.Section_Name}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="Trench_Depth_Ft"
//           value={formData.Trench_Depth_Ft}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="Latitude"
//           value={formData.Latitude}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="Longitude"
//           value={formData.Longitude}
//           onChange={handleInputChange}
//         />

//         <input
//           type="text"
//           name="Trench_Alignment"
//           value={formData.Trench_Alignment}
//           onChange={handleInputChange}
//         />

//         <input
//           type="text"
//           name="Observations"
//           value={formData.Observations}
//           onChange={handleInputChange}
//         />

//         <input
//           type="text"
//           name="Correction_Required"
//           value={formData.Correction_Required}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="Correction_Length"
//           value={formData.Correction_Length}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="Trench_Distance"
//           value={formData.Trench_Distance}
//           onChange={handleInputChange}
//         />

//         <input
//           type="number"
//           name="ID"
//           value={formData.ID}
//           onChange={handleInputChange}
//         />

//         {/* Add more input fields for other data */}
//         <button type="button" onClick={handleUpdate}>
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditForm;


// 2nd Apporach from GPT

import React, { useState } from "react";
import './EditForm.css'
import { useNavigate } from 'react-router-dom';

function EditForm({ item, onUpdate }) {
  const [editedFields, setEditedFields] = useState(item);
  const [dataSaved, setDataSaved] = useState(false);


  const navigate = useNavigate();
  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditedFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Call the API to update the data
    // Make sure to match the API endpoint and method correctly
    fetch(`http://103.31.82.102:8000/customersupdate/${item.ID}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedFields),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        onUpdate(updatedData); // Notify the parent component about the update
     
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });       

       // After saving the data
    setDataSaved(true); 
    navigate('/')
  };

  return (
    <>
  {!dataSaved && ( // Render only if data has not been saved
    <tr>
      {/* <td>{editedFields.ID}</td> */}
      <td>
        <input
          type="number"
          name="ID"
          placeholder="ID"
          value={editedFields.ID}
          onChange={handleEditInputChange}
        />
        
      </td>
      <td>
        <input
          type="number"
          name="No_of_Pit"
          placeholder="No_of_Pit"
          value={editedFields.No_of_Pit}
          onChange={handleEditInputChange}
        />
      </td>

      <td>
        <input
          type="date"
          name="Survey_Date"
          placeholder="Survey_Date"
          value={editedFields.Survey_Date}
          onChange={handleEditInputChange}
        />
      </td>

    

      <td>
        <input
          type="text"
          name="Ring_Tag"
          placeholder="Ring_Tag"
          value={editedFields.Ring_Tag}
          onChange={handleEditInputChange}
        />
      </td>

      <td>
        <input
          type="text"
          name="Section_Name"
          placeholder="Section_Name"
          value={editedFields.Section_Name}
          onChange={handleEditInputChange}
        />
      </td>

      <td>
        <input
          type="number"
          name="Trench_Depth_Ft"
          placeholder="Trench_Depth_Ft"
          value={editedFields.Trench_Depth_Ft}
          onChange={handleEditInputChange}
        />
      </td>

      <td>
        <input
          type="number"
          name="Latitude"
          placeholder="Latitude"
          value={editedFields.Latitude}
          onChange={handleEditInputChange}
        />
      </td>

      <td>
        <input
          type="number"
          name="Longitude"
          placeholder="Longitude"
          value={editedFields.Longitude}
          onChange={handleEditInputChange}
        />
      </td>

      <td>
        <input
          type="text"
          name="Trench_Alignment"
          placeholder="Trench_Alignment"
          value={editedFields.Trench_Alignment}
          onChange={handleEditInputChange}
        />
        
      </td>

      <td>
        <input
          type="text"
          name="Observations"
          placeholder="Observations"
          value={editedFields.Observations}
          onChange={handleEditInputChange}
        />
        
      </td>
      <td>
        <input
          type="text"
          name="Correction_Required"
          placeholder="Correction_Required"
          value={editedFields.Correction_Required}
          onChange={handleEditInputChange}
        />
        
      </td>
      <td>
        <input
          type="number"
          name="Correction_Length"
          placeholder="Correction_Length"
          value={editedFields.Correction_Length}
          onChange={handleEditInputChange}
        />
        
      </td>
      <td>
        <input
          type="number"
          name="Trench_Distance"
          placeholder="Trench_Distance"
          value={editedFields.Trench_Distance}
          onChange={handleEditInputChange}
        />
        
      </td>
 

      <td>
        <button onClick={handleSaveClick} className="btn btn-success">Save</button>
      </td>
     
    </tr>
     )}

{/* {dataSaved && ( // Render the "New row added" popup if data has been saved
       alert("Updated!")
      )} */}
    </>
  );
}

export default EditForm;