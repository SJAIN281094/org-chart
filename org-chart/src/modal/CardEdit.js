import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  withStyles,
} from '@material-ui/core';
import styles from './styles';

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const CardEdit = ({ initialData, handleUpdate, handleClose, classes }) => {
  const [catdData, setCardData] = useState({
    id: initialData.id,
    name: initialData.name,
    title: initialData.title,
  });

  const handleStateChange = (key, value) => {
    setCardData((prevState) => {
      prevState[`${key}`] = value;
      return { ...prevState };
    });
  };

  const handleUpdateCard = (e) => {
    e.preventDefault();
    handleUpdate(catdData);
  };

  return (
    <Container direction="column">
      <Item>
        <Typography className={classes.header} variant="h6">
          UPDATE CARD
        </Typography>
      </Item>
      <Item className={classes.body}>
        <form onSubmit={handleUpdate}>
          <Container spacing={3}>
            <Item xs={12}>
              <TextField
                variant="outlined"
                name="name"
                required={true}
                value={catdData.name}
                label="Name"
                onChange={(e) => handleStateChange('name', e.target.value)}
                type="text"
                fullWidth
              />
            </Item>
            <Item xs={12}>
              <TextField
                variant="outlined"
                name="title"
                required={true}
                value={catdData.title}
                label="Title"
                onChange={(e) => handleStateChange('title', e.target.value)}
                type="text"
                fullWidth
              />
            </Item>
          </Container>
          <Container spacing={2} justify="flex-end" className={classes.action}>
            <Item>
              <Button
                onClick={() => handleClose()}
                variant="contained"
                color="primary"
              >
                Close
              </Button>
            </Item>
            <Item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleUpdateCard}
              >
                UPDATE
              </Button>
            </Item>
          </Container>
        </form>
      </Item>
    </Container>
  );
};

export default withStyles(styles)(CardEdit);
