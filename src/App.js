import React from "react";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import About from "./components/About";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
