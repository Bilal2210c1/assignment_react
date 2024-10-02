import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Userreg = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [existingUsers, setExistingUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track form submission

  // Fetch existing users from the MockAPI
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://66fc6365c3a184a84d16f184.mockapi.io/userReg');
        const data = await response.json();
        setExistingUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Mark as submitted
    setError('');
    setSuccess('');

    // Validation checks
    if (name.length < 3) {
      setError('Name should be unique & greater than 3 characters');
      return;
    }
    if (existingUsers.some(user => user.Name === name)) {
      setError('Name already exists. Please choose a unique name.');
      return;
    }
    if (!email.includes('@') || email.length < 4) {
      setError('Enter a valid email');
      return;
    }
    if (existingUsers.some(user => user.Email === email)) {
      setError('Email already exists. Please choose a different email.');
      return;
    }
    if (password.length < 3) {
      setError('Password must be at least 3 characters long');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const newUser = {
      Name: name,
      Email: email,
      Password: password,
    };

    setLoading(true);

    try {
      const response = await fetch('https://66fc6365c3a184a84d16f184.mockapi.io/userReg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setSuccess('Account successfully registered');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        const newUserData = await response.json();
        setExistingUsers(prevUsers => [...prevUsers, newUserData]);
      } else {
        setError('Registration failed');
      }
    } catch (error) {
      setError('An error occurred: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <Typography color="error" variant="body2" style={{ marginBottom: '16px' }}>
          {error}
        </Typography>
      )}
      {success && (
        <Typography color="success.main" variant="body2" style={{ marginBottom: '16px' }}>
          {success}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <Box mb={3}>
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            error={isSubmitted && (name.length < 3 || existingUsers.some(user => user.Name === name))}
            helperText={isSubmitted && (name.length < 3 ? 'Name must be at least 3 characters' : existingUsers.some(user => user.Name === name) ? 'Name already exists' : '')}
          />
        </Box>
        
        <Box mb={3}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            error={isSubmitted && (!email.includes('@') || email.length < 4 || existingUsers.some(user => user.Email === email))}
            helperText={isSubmitted && (!email.includes('@') ? 'Enter a valid email' : existingUsers.some(user => user.Email === email) ? 'Email already exists' : '')}
          />
        </Box>

        <Box mb={3}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            error={isSubmitted && password.length < 3}
            helperText={isSubmitted && password.length < 3 ? 'Password must be at least 3 characters' : ''}
          />
        </Box>

        <Box mb={3}>
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            error={isSubmitted && password !== confirmPassword}
            helperText={isSubmitted && password !== confirmPassword ? 'Passwords do not match' : ''}
          />
        </Box>

        <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </form>
    </>
  );
};

export default Userreg;
