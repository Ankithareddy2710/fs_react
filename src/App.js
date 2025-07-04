/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from "react";

function App() {
  const students = [
    { id: 1, name: "Ankitha", grade: "A", age: 20 },
    { id: 2, name: "Ravi", grade: "B", age: 21 },
    { id: 3, name: "Neha", grade: "A+", age: 20 },
    { id: 4, name: "Arjun", grade: "B+", age: 22 },
    { id: 5, name: "Sneha", grade: "A", age: 21 },
    { id: 6, name: "Karthik", grade: "C", age: 23 },
    { id: 7, name: "Divya", grade: "B", age: 22 },
    { id: 8, name: "Manoj", grade: "A", age: 21 },
    { id: 9, name: "Priya", grade: "B+", age: 20 },
    { id: 10, name: "Vikram", grade: "A+", age: 22 },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Student Table</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
