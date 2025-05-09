//newsapp.js

import Card from './Card';
import React, { useEffect, useState } from 'react';

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const API_KEY = "f485619c5a6943f79b36d70f237a2b96";

  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <nav>
        <div className="nav-left">
          <h1>Trendy News</h1>
          <button className="sidebarBtn" onClick={toggleSidebar}>☰</button>
        </div>

        <ul style={{ display: "flex", gap: "11px" }}>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>All News</a>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a>
        </ul>

        <div className='searchBar'>
          <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className='head'>Stay Update with TrendyNews</p>
      </div>

      {/* Original category button layout (visible by default is removed) */}
      {/* Sidebar appears when toggled */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      {/* News cards section remains unchanged */}
      <div>
        {newsData ? <Card data={newsData} /> : null}
      </div>
    </div>
  );
};

 export default Newsapp;