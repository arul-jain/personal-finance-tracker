import { useState } from 'react';

function App() {
  // State to track if the user is "logged in"
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // This makes the login "work" without checking credentials
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // 1. If logged in, show a blank page with a logout button
  if (isLoggedIn) {
    return (
      <div style={{ padding: '20px', textAlign: 'right' }}>
        <button onClick={handleLogout}>Logout</button>
        <div style={{ marginTop: '100px', textAlign: 'center', color: '#888' }}>
          <h1>Dashboard</h1>
          <p>Data loading...</p>
        </div>
      </div>
    );
  }

  // 2. If not logged in, show the login form
  return (
    <div style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center', 
      height: '100vh', fontFamily: 'Arial', backgroundColor: '#f4f7f6' 
    }}>
      <div style={{ 
        border: '1px solid #ddd', padding: '40px', borderRadius: '10px', 
        textAlign: 'center', backgroundColor: 'white', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
      }}>
        <h2 style={{ marginBottom: '20px' }}>Finance Tracker Login</h2>
        <div style={{ marginBottom: '15px' }}>
          <input type="text" placeholder="Email" style={{ padding: '12px', width: '280px' }} />
        </div>
        <div style={{ marginBottom: '25px' }}>
          <input type="password" placeholder="Password" style={{ padding: '12px', width: '280px' }} />
        </div>
        <button 
          onClick={handleLogin}
          style={{ 
            padding: '12px', width: '100%', cursor: 'pointer',
            backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' 
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default App;