import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {IconButton, Button} from "@mui/material";

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Typography>
              Anya Stiefbold
            </Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button><Link style={{ textDecoration: 'none', color: 'white' }} to ="/online-cv">Home</Link></Button>
          <Button><Link style={{ textDecoration: 'none', color: 'white' }} to ="/work">Work</Link></Button>
          <Button><Link style={{ textDecoration: 'none', color: 'white' }} to ="/about">About</Link></Button>
          <Button><Link style={{ textDecoration: 'none', color: 'white' }} to ="/contact">Contact</Link></Button>
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