import { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="App">
      {isVisible && <p>Hello world</p>}
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
    </div>
  );
}

export default App;
