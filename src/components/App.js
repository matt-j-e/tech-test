import React, { useState } from "react";
import '../styles/App.css';
import Search from "./Search";

function App() {

  const [searchResults, setSearchResults] = useState('');
  console.log(searchResults);

  return (
    <div className="App">
      <img
        className="logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA logo"
      />
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
