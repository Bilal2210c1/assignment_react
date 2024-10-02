import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://66fc6365c3a184a84d16f184.mockapi.io/userReg');
      const data = await response.json();

      const user = data.find(user => user.Name === username && user.Password === password);
      
      if (user) {
        setSuccess(true);
        setIsLoggedIn(true);
      } else {
        setError('Invalid credentials, please try again.');
      }
    } catch (err) {
      setError('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      {error && (
        <Typography color="error" variant="body2" style={{ marginBottom: '16px' }}>
          {error}
        </Typography>
      )}
      {success && (
        <Typography color="primary" variant="body2" style={{ marginBottom: '16px' }}>
          Login successful!
        </Typography>
      )}
      <form onSubmit={handleLogin}>
        <Box mb={2}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
