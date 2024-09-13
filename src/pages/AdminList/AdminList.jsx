import React, { useEffect, useState } from 'react';
import './AdminList.css';
import axios from 'axios';
import { MdDelete } from "react-icons/md";

function AdminList() {

  const [grievances, setGrievances] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        const response = await axios.get('http://localhost:4000/grievances/getGrievances'); 
        setGrievances(response.data);
      } catch (error) {
        console.error('Error fetching grievances:', error);
      }

    };



    fetchGrievances();
  }, []);

  const deleteGrievance = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/grievances/removeGrievances/${id}`);
      setGrievances(grievances.filter(grievance => grievance._id !== id));
      alert("remove items")
    } catch (error) {
      console.error('Error deleting grievance:', error);
    }
  };


  const filteredGrievances = grievances.filter(grievance =>
    grievance.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div className="grievances-table-container">
      <h2>All Grievances</h2>
      <input 
        type="text" 
        placeholder="Search by name " 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="search-input"
      />
      <table className="grievances-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrievances.map((grievance, index) => (
            <tr key={grievance._id}>
              <td>{index + 1}</td>
              <td>{grievance.name}</td>
              <td>{grievance.description}</td>
              <td>{grievance.email}</td>
              <td>{grievance.phone}</td>
              <td><MdDelete onClick={() => deleteGrievance(grievance._id)}/></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;