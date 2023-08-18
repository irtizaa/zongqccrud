import React, { useState, useEffect } from "react";
import "./FetchDataForm.css";
import EditForm from "./EditData";
import { Link } from 'react-router-dom';

function FetchDataForm() {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [isEditing, setIsEditing] = useState(null); // Track editing state
  const [formFields, setFormFields] = useState({
    No_of_Pit: "",
    Survey_Date: new Date().toISOString().split("T")[0],
    Ring_Tag: "",
    Section_Name: "",
    Trench_Depth_Ft: "",
    Latitude: "",
    Longitude: "",
    Trench_Alignment: "",
    Observations: "",
    Correction_Required: "",
    Correction_Length: "",
    Trench_Distance: "",
    ID: "",
  });

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://103.31.82.102:8000/customers/");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://103.31.82.102:8000/customers/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the deleted item from the data array
        const updatedDataArray = data.filter((item) => item.ID !== id);
        setData(updatedDataArray);
      } else {
        console.error("Error deleting data");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any necessary actions with the form data here
    console.log("Form data:", formFields);
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    setIsEditing(item.ID); // Start editing for this row
  };

  const handleUpdate = (updatedData) => {
    // Update the data in your state
    const updatedDataArray = data.map((item) =>
      item.ID === updatedData.ID ? updatedData : item
    );
    setData(updatedDataArray);
  
    // Clear editItem after update
    setEditItem(null);
    // Stop editing
    setIsEditing(null);
  };

  return (
    <div className="data-container">
       <h2>OSP QC</h2>
          <div className="create-link-container">
          <Link to="/create" className="btn btn-success">
            Create +
          </Link>
        </div>
     
    
      <table className="data-table">
        <thead className="table-head">
          <tr>
            
            <th>ID</th>
            <th>No of Pits</th>
            <th>Survey Date</th>
            <th>Ring Tag</th>
            <th>Section Name</th>
            <th>Trench Depth (Ft)</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Trench Alignment</th>
            <th>Observations</th>
            <th>Correction Required</th>
            <th>Correction Length</th>
            <th>Trench Distance</th>
            <th>Edit</th>
            <th>Delete</th>     
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID}>
              <td>{item.ID}</td>
              <td>{item.No_of_Pit}</td>
              <td>{item.Survey_Date}</td>
              <td>{item.Ring_Tag}</td>
              <td>{item.Section_Name}</td>
              <td>{item.Trench_Depth_Ft}</td>
              <td>{item.Latitude}</td>
              <td>{item.Longitude}</td>
              <td>{item.Trench_Alignment}</td>
              <td>{item.Observations}</td>
              <td>{item.Correction_Required}</td>
              <td>{item.Correction_Length}</td>
              <td>{item.Trench_Distance}</td>
              <td>
              <button onClick={() => handleEditClick(item)} className="btn btn-primary mr-1">Edit</button>
             
              </td> 
              <td>
              <button onClick={() => handleDeleteClick(item.ID)} className="btn btn-danger" style={{backgroundColor:'red'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        {editItem && <EditForm item={editItem} onUpdate={handleUpdate} />}

      </table>
    
    </div>
  );
}

export default FetchDataForm;

