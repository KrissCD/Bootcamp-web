import React from "react";
import { add, multiply, subtract, divide } from "../calculator";

function App() {
  return (
    <div>
      <h1>Rezultati</h1>
      <ul>
        <li>{add(1, 5)}</li>        
        <li>{multiply(2, 10)}</li>   
        <li>{subtract(30, 5)}</li>  
        <li>{divide(5, 1)}</li>     
      </ul>
    </div>
  );
}

export default App;
