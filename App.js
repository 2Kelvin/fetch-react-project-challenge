import { useState } from "react";

function App() {
  const [users, setUsers] = useState("");

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

  const displayUsersData = async () => {
    const data = await getUsers();
    setUsers(
      data.map(user =>
        <li key={user.id} style={{marginBottom:'20px'}}>
          {JSON.stringify(user)}
        </li>)
    );
  };

  return (
    <div className="app">
      <div className="topButtons">
        <button onClick={() => displayUsersData()}> Users </button>
        <button>Posts</button>
        <button>Comments</button>
      </div>

      <ul className="content">
       {users}
      </ul>
    </div>
  );
}

export default App;
