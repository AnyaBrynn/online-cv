import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, ListItem, ListItemButton, ListItemText } from "@mui/material";
import {IconButton, Button} from "@mui/material";

const pages = ['Resume', 'Code', 'Art'];

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            Anya Stiefbold
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit"><Link to ="/online-cv">Home</Link></Button>
          <Button color="inherit"><Link to ="/work">Work</Link></Button>
          <Button color="inherit"><Link to ="/about">About</Link></Button>
          <Button color="inherit"><Link to ="/contact">Contact</Link></Button>
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