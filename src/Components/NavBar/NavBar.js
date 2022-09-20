import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
          <Link to="/Resume">Resume</Link>
          <Link to="/Code">Code</Link>
          <Link to="/Art">Art</Link>
    </nav>
  );
}

export default Navbar