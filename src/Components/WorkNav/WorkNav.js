import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import NavBar from '../NavBar/NavBar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

function WorkNav() {
    return (
        <>
        <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <NavBar/>
        </AppBar>
        <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <List>
            {['Education', 'Employment', 'Projects', 'Skills'].map((text, index) => (
                <ListItem key={text} disablePadding  >
                    <Typography>
                    <AnchorLink id='cv_nav' href={`#${text}`}><ListItemText primary={` ∙  ${text}`}/></AnchorLink>
                    </Typography>
                </ListItem>
            ))}
            </List>
        </Box>
        </Drawer>
        </Box>
        </>
    )
  }
  
  export default WorkNav