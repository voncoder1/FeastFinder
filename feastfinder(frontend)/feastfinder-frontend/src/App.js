import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList'; // Import the UsersList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>FeastFinder</h1> {/* Add your app's title */}
        <UsersList /> {/* Include the UsersList component */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
