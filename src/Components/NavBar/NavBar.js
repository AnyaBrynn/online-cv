import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
  <AppBar>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </Typography>

      <Typography variant="h6">
        <Link to="/Resume" style={{ textDecoration: "none", color: "white" }}>
          Resume
        </Link>
      </Typography>

      <Typography variant="h6">
        <Link to="/Code" style={{ textDecoration: "none", color: "white" }}>
          Code
        </Link>
      </Typography>

      <Typography variant="h6">
        <Link to="/Art" style={{ textDecoration: "none", color: "white" }}>
          Art
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
</Box>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};


export default NavBar;


// function NavBar() {
//   return (
//     <nav>
//           <Link to="/Resume">Resume</Link>
//           <Link to="/Code">Code</Link>
//           <Link to="/Art">Art</Link>
//     </nav>
//   );
// }

// export default NavBar