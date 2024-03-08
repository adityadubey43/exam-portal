import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const User = JSON.parse(window.localStorage.getItem('user'));
console.log(User)
const Register = () => {
    const APIurl = 'https://exam-express-khaki.vercel.app/api/exam/'

    const [formData, setFormData] = useState({
        name: '',
        emailid: '',
        password: '',
        contact: '',
      });
      const [error, setError] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(APIurl+'/signup', formData); // Replace '/api/signup' with your actual backend endpoint
          if (response.status === 200) {
            alert('Signup successful');
            // Optionally, redirect to another page or perform any other action upon successful signup
          } else {
            setError('Signup failed. Please try again.');
          }
        } catch (error) {
          console.log(error.response.data);
          if (error.response && error.response.data && error.response.data.errors) {
            const { email, password, contact} = error.response.data.errors;
            setError(`Email: ${email},Contact: ${contact}, Password: ${password}`);
          } else {
            setError('Signup failed. Please try again.');
          }
        }
      };
    
      return (
        <div className="signup-container">
        <form onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="emailid"
            placeholder="Email"
            value={formData.emailid}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      );
}


export default Register