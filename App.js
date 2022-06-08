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
    setUsers(
      <ul>
      {usersData.map(user => <li key={user.id}>{user}</li>)}
      </ul>
    );
  };

  return (
    <div className="app">
      <div className="topButtons">
        <button
          onClick={()=>getUsers()}
        >Users</button>

        <button>Posts</button>

        <button>Comments</button>
      </div>

      <div className="content">
       {users}
      </div>
    </div>
  );
}

export default App;
