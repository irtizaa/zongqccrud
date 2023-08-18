import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import './home.css';                        

function Home() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    No_of_Pit: '',
    Survey_Date: '',
    Ring_Tag: '',
    // Add other fields here
  });

  const navigate = useNavigate();
  
  useEffect(() => {
    fetchData();
  }, []);               

  const fetchData = () => {
    axios
      .get('http://localhost:1000/customers')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  const handleCreate = () => {
    // Send the new row data to the server using Axios POST request
    axios
      .post('http://localhost:1000/customers', newData)
      .then(res => {
        console.log('New row added:', res.data);
        setNewData({
          ID:'',
          No_of_Pit: '',
          Survey_Date: '',
          Ring_Tag: '',
          Section_Name: '',
          Trench_Depth_Ft: '',
          Latitude: '',
          Longitude: '',
          Trench_Alignment: '',
          Observations: '',
          Correction_Required: '',
          Correction_Length: '',
          Trench_Distance: '',
        });
        fetchData(); // After successful addition, fetch the data again to update the table
      })
      .catch(err => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const handleRead = (customerId) => {
    // Redirect to the read page with the specific customer ID
    // history.push(`/read/${customerId}`);
    navigate(`/read/${customerId}`);
  };

  
  return (
    <div className="home-container bg-primary">
    {/* <div className="home-container bg-primary"> */}
      <div className="table-container bg-white rounded p-3">
        <h2 className="table-heading">Zong QC</h2>
        <div className="table-responsive">
        <table className="table">
          <thead>     
            <tr>
              <th>ID</th>
              <th>No of Pit</th>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.ID}</td>
                <td>{customer.No_of_Pit}</td>
                <td>{customer.Survey_Date}</td>
                <td>{customer.Ring_Tag}</td>
                <td>{customer.Section_Name}</td>
                <td>{customer.Trench_Depth_Ft}</td>
                <td>{customer.Latitude}</td>
                <td>{customer.Longitude}</td>
                <td>{customer.Trench_Alignment}</td>
                <td>{customer.Observations}</td>
                <td>{customer.Correction_Required}</td>
                <td>{customer.Correction_Length}</td>
                <td>{customer.Trench_Distance}</td>
                <td>
                  
                  {/* <button className="btn btn-info mr-1">Read</button> */}
                  {/* <Link to={`/read/${customer.ID}`} className="btn btn-primary mr-1">Read</Link> */}
                  <button
                className="btn btn-info mr-1"
                onClick={() => handleRead(customer.ID)}
              >
                Read
              </button>
                  <Link to={`update/${customer.ID}`} className="btn btn-primary mr-1">Edit</Link>
              {/* <Link to={`/update/${customer.ID}`} className="btn btn-primary mr-1">Edit</Link> */}
                  
                  </td>
                  <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}

            
          </tbody>
          {/* <tr>
                <td>
                  <input
                    type="text"
                    name="No_of_Pit"
                    value={newData.No_of_Pit}
                    onChange={handleChange}
                    placeholder="No_of_Pit"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="Survey_Date"
                    value={newData.Survey_Date}
                    onChange={handleChange}
                    placeholder="Survey_Date"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="Ring_Tag"
                    value={newData.Ring_Tag}
                    onChange={handleChange}
                    placeholder="Ring_Tag"
                  />


<input
              type="text"
              name="Section_Name"
              value={newData.Section_Name}
              onChange={handleChange}
              placeholder="Section_Name"
            />
              <input
              type="text"
              name="Trench_Depth_Ft"
              value={newData.Trench_Depth_Ft}
              onChange={handleChange}
              placeholder="Trench_Depth_Ft"
            />
              <input
              type="text"
              name="Latitude"
              value={newData.Latitude}
              onChange={handleChange}
              placeholder="Latitude"
            />
              <input
              type="text"
              name="Longitude"
              value={newData.Longitude}
              onChange={handleChange}
              placeholder="Longitude"
            />
              <input
              type="text"
              name="Trench_Alignment"
              value={newData.Trench_Alignment}
              onChange={handleChange}
              placeholder="Trench_Alignment"
            />
              <input
              type="text"
              name="Observations"
              value={newData.Observations}
              onChange={handleChange}
              placeholder="Observations"
            />
              <input
              type="text"
              name="Correction_Required"
              value={newData.Correction_Required}
              onChange={handleChange}
              placeholder="Correction_Required"
            />
              <input
              type="text"
              name="Correction_Length"
              value={newData.Correction_Length}
              onChange={handleChange}
              placeholder="Correction_Length"
            />
              <input
              type="text"
              name="Trench_Distance"
              value={newData.Trench_Distance}
              onChange={handleChange}
              placeholder="Trench_Distance"
            />
                </td>
             
                <td>
                  <button className="btn btn-primary" onClick={handleCreate}>
                    Add
                  </button>
                </td>
              </tr> */}
        </table>
        </div>
        <div className="create-link-container">
          <Link to="/create" className="btn btn-success">
            Create +
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;