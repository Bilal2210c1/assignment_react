// Home.js
import React from 'react';
import { Container, Typography, List, ListItem, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container component="main" maxWidth="sm" style={styles.container}>
      <Typography variant="h4" component="h1" style={styles.heading}>
        Welcome to the Todo Application
      </Typography>
      
      <Paper elevation={3} style={styles.paper}>
        <List>
          <ListItem>1. Pehle pehle aapko registration karna hoga.</ListItem>
          <ListItem>2. Saari credentials theek se fill karni chahiye.</ListItem>
          <ListItem>3. Name unique hona chahiye registration ke waqt.</ListItem>
          <ListItem>4. Koi bhi field khali nahi honi chahiye.</ListItem>
          <ListItem>5. Login karne ke liye name aur password ki zaroorat hogi.</ListItem>
          <ListItem>6. Dono, name aur password, mock API mein save honge.</ListItem>
          <ListItem>7. Time na hone ki wajah se itna hi kar paya :/</ListItem>
        </List>
      </Paper>
    </Container>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '10px',
  },
  subHeading: {
    marginBottom: '20px',
  },
  paper: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
};

export default Home;
