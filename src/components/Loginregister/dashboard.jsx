import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import SidePanel from "./SidePanel";

function Dashboard() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear user data from localStorage
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('Token');
    // Redirect to login page
    navigate('/login');
  };

  const User = JSON.parse(window.localStorage.getItem("user"));
  console.log(User);

  return (
    <div>
      <button onClick={toggleSidePanel}>Toggle Side Panel</button>

      <SidePanel isOpen={isSidePanelOpen} onClose={toggleSidePanel}>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/register">Profile</Link>
          </li>
          <li>
            <Link to="/register">Settings</Link>
          </li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </SidePanel>
      <div className="middle">
        <h1>Welcome to Dashboard</h1>
        <div>
          <h2>User Details</h2>
          <p>Name: {User.name}</p>
          <p>Email: {User.emailid}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
