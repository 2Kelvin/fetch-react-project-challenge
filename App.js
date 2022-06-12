import { useState, useEffect } from "react";
import Button from "./Components/Button";

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
      <div className="apiButtons">
        <Button
          buttonText="users"
          dataCategory={dataCategory}
          setdataCategory={setdataCategory}
        />

        <Button
          buttonText="posts"
          dataCategory={dataCategory}
          setdataCategory={setdataCategory}
        />

        <Button
          buttonText="comments"
          dataCategory={dataCategory}
          setdataCategory={setdataCategory}
        />
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
