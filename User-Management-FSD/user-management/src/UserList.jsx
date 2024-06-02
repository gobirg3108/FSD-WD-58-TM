import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Snackbar,
  Alert,} from "@mui/material";
import UserItem from "./UserItem";

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    seversity: "success",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Eroor Fetching Users:", error);
      showSnackbar("Eroor Fetching Users:", error);
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };
  
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container>
      <paper elevation={3} style={{ padding: "20px", margintop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          User Management
        </Typography>
        <Grid container spacing={3}>
          {users.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              onEdit={setEditingUser}
              onDelete={deleteUser}
            ></UserItem>
          ))}
        </Grid>
        <Button variant="contained">add user</Button>
      </paper>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.seversity}
          sx={{ width: "100" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default UserList;
