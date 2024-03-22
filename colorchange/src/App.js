import React from "react";
import ColorChanger from "./colorchanger.js";

function App() {
  return (
    <div style={{ textAlign: 'center',marginTop: '10px'}}>
      <h1 style={{borderBottom: '2px solid blue',color:'red'}}>Text Effects</h1>
      <ColorChanger />
    </div>
  ); 
  
}

export default App;