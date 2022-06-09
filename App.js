import { useState } from "react";

function App() {
  const [apiData, setAPIdata] = useState("");

  const getUsers = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    const usersData = await response.json();
    return usersData;
  };

  const getPosts = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    const postsData = await response.json();
    return postsData;
  };

  const getComments = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/comments", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    const commentsData = await response.json();
    return commentsData;
  };

  const displayAPIdata = async (getFunc) => {
    const data = await getFunc();
    setAPIdata(
      data.map(user =>
        <li key={user.id} style={{marginBottom:'20px'}}>
          {JSON.stringify(user)}
        </li>)
    );
  };

  return (
    <div className="app">
      <div className="topButtons">
        <button onClick={() => displayAPIdata(getUsers)}> Users </button>
        <button onClick={() => displayAPIdata(getPosts)}> Posts </button>
        <button onClick={() => displayAPIdata(getComments)}> Comments </button>
      </div>

      <ul className="content"> {apiData} </ul>
    </div>
  );
}

export default App;
