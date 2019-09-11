import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './App.css';
import Form from './form';
import Table from './table';

function App() {
  return (
    <div className="App">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item container >
            <Form/>
        </Grid>
        <Grid item container>
          <Table/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
