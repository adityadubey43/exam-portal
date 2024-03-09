import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loginregister = () => {
  const navigate = useNavigate();

  const APIurl = "https://exam-express-khaki.vercel.app/api/exam";

  const [formData, setFormData] = useState({
    emailid: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(APIurl + "/login", formData); // Replace '/api/signup' with your actual backend endpoint
      if (response.status === 200) {
        // alert('Signup successful');
        window.localStorage.setItem("Token", response.data.token);
        window.localStorage.setItem(
          "user",
          JSON.stringify(response.data.userDetailsWithoutPassword)
        );
        const userDetailsWithoutPassword =
          response.data.userDetailsWithoutPassword;
        navigate("/dashboard", { state: { userDetailsWithoutPassword } });
        // Optionally, redirect to another page or perform any other action upon successful signup
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response && error.response.data && error.response.data.errors) {
        const { email, password } = error.response.data.errors;
        setError(`Email: ${email}, Password: ${password}`);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}

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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Loginregister;
