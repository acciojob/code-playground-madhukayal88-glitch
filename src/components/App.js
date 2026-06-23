import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      <p>
        {isAuthenticated
          ? "You are authenticated"
          : "You are not authenticated, Please login first"}
      </p>

      <ul>
        <li>PlayGround</li>
        <li>Login</li>
      </ul>

      {!isAuthenticated && (
        <button onClick={() => setIsAuthenticated(true)}>
          Log In
        </button>
      )}

      {isAuthenticated && <h3>Welcome to Code Playground</h3>}
    </div>
  );
};

export default App;
