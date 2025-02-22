import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Heros from "./components/Heros";
import Card from "./Card";
import "./Style.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://663cab2517145c4d8c372f36.mockapi.io/test/users")
      .then(response => response.json())
      .then(apiData => {
        console.log("API Response:", apiData); // Debugging response
        if (Array.isArray(apiData)) {
          setData(apiData);
        } else {
          setData([]); // Fallback if the API response is not an array
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Heros />
      <div className="card-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : data.length > 0 ? (
          data.map(item => <Card key={item.id} item={item} />)
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}
