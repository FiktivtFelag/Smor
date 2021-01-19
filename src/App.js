import { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="App">
      <div
        style={{
          width: "50px",
          backgroundColor: "red",
        }}
        onClick={() => {
          setVisible(!isVisible);
        }}
      >
        Press Me!
      </div>
      {isVisible && <p>Hello world</p>}
    </div>
  );
}

export default App;
