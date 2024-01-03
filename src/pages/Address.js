

import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Address.css'; 

const Address = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      age: event.target.age.value,
      gender: event.target.gender.value,
      address: event.target.address.value
    };

    try {
      const response = await axios.post('http://localhost:4000/post', formData);

      console.log('Data sent to the server:', response.data);

     
      window.location.href = 'https://www.phonepe.com/';
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="address-container">
      <h2>Address Information</h2>
      <form onSubmit={handleSubmit} className="address-form">
        <div className="form-group">
          <label htmlFor="firstName" style={{color:"white"}}>First Name:</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" style={{color:"white"}}>Last Name:</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
        </div>
        <div className="form-group">
          <label htmlFor="age" style={{color:"white"}}>Age:</label>
          <input type="number" id="age" name="age" placeholder="Enter your age" required />
        </div>
        <div className="form-group">
          <label htmlFor="gender" style={{color:"white"}}>Gender:</label>
          <select id="gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address" style={{color:"white"}}>Address:</label>
          <textarea id="address" name="address" placeholder="Enter your address" required></textarea>
        </div>
        <button className='btn btn-proceed-payment' type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Address;
