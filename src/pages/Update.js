import React, { useState } from 'react';
import { Box, TextField, Button, Grid, styled } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Component = styled(Box)({
  width: '80%',
  margin: '50px auto',
});

const Update = () => {
  const [regNo, setRegNo] = useState('');
  const [newUsername, setNewUsername] = useState('');

  const handleUpdate = async () => {
    try {
      const formattedData = {
        body: JSON.stringify({
          reg: regNo,
          updateKey: 'name', 
          updateValue: newUsername
        }) 
    };
      // eslint-disable-next-line no-unused-vars
      const response = await fetch('https://x4vpu1ts34.execute-api.ap-south-1.amazonaws.com/Dev/updateStudent', {
        method: 'PUT',
        body: JSON.stringify(formattedData)
      });
      setRegNo("");
      setNewUsername("");
      toast.success("Student Updated Successfully");
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
   <>
    <Component>
      <h1 style={{ textAlign: 'center' }}>Update Student Details</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="regNo"
            label="Register No"
            variant="filled"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="newUsername"
            label="Student Name"
            variant="filled"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Component>
    <ToastContainer/>
   </>
  );
};

export default Update;
