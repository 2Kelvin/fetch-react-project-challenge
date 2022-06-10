import { useState, useEffect } from "react";

function App() {
  const [dataCategory, setdataCategory] = useState("users");
  const [apiData, setAPIdata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/${dataCategory}`);

        const data = await response.json();
        setAPIdata(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [dataCategory])

  return (
    <div className="app">
      <div className="topButtons">
        <button onClick={() => setdataCategory("users")}> Users </button>
        <button onClick={() => setdataCategory("posts")}> Posts </button>
        <button onClick={() => setdataCategory("comments")}> Comments </button>
      </div>

      <ul className="content">
        {apiData.map(userData =>
          <li key={userData.id}>
            {JSON.stringify(userData)}
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
