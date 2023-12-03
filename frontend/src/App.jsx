import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/github");
      console.log({ response });
      setApiData(response.data);
    } catch (error) {
      console.error("Failed to fetch" + error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>here is frontend</h1>
      <p>{apiData.length}</p>
      {apiData.map((data) => (
        <div key={data.id}>
          <img src={data.avatar_url} alt="image" />
          <h3>{data.name}</h3>
          <p>{data.location}</p>
          <p>{data.bio}</p>
        </div>
      ))}
    </>
  );
}

export default App;
