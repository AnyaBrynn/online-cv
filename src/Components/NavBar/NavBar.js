import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button} from "@mui/material";


const pages = ['cv', 'about', 'contact'];

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Typography component={'span'} variant="h3">
              Anya Stiefbold
            </Typography>
          <Typography component={'span'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button>
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/online-cv'>
                  <Typography component={'span'} textAlign="center">home</Typography>
                  </Link>
          </Button>
          {pages.map((page) => (
                <Button key={page}>
                  <Link className="Link" style={{ textDecoration: 'none', color: 'black'}} to={`/${page}`}>
                  <Typography component={'span'} textAlign="center">{page}</Typography>
                  </Link>
                </Button>
          ))}
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