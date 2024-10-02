import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 , marginBottom : ''}}>
            Todo App
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/Userreg" color="inherit">Registeration</Button>
        <Button component={Link} to="Login" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
