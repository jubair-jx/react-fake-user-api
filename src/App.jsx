import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => setCountry(user));
  }, []);
  return (
    <div>
      <h1>User Name : {country.length}</h1>
      {country.map((user) => (
        <User
          name={user.name}
          email={user.email}
          username={user.username}
        ></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div
      style={{
        border: "2px solid purple",
        borderRadius: "10px",
        marginTop: "10px",
      }}
    >
      <h2>Name: {props.name}</h2>
      <p>UserName : {props.username}</p>
      <p>E-mail : {props.email} </p>
    </div>
  );
}

export default App;
