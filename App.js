import { useState, useEffect } from "react";

function App() {
  const [dataCategory, setdataCategory] = useState("");
  const [apiData, setAPIdata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://jsonplaceholder.typicode.com/${dataCategory}`, {
        method: "GET",
        headers: {
        Accept: "application/json"
        }
      });

      const data = await response.json();

      setAPIdata(data.map(userData => <li key={userData.id}>
        {JSON.stringify(userData)}
      </li>));
    };
    getData();
  }, [dataCategory]);

  return (
    <div className="app">
      <div className="topButtons">
        <button onClick={() => setdataCategory("users")}> Users </button>
        <button onClick={() => setdataCategory("posts")}> Posts </button>
        <button onClick={() => setdataCategory("comments")}> Comments </button>
      </div>

      <ul className="content"> {apiData} </ul>
    </div>
  );
}

export default App;
