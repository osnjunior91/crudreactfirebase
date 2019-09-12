import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    };

    render() {
        return (
            <Grid item spacing={4} style={{ width: 600, marginLeft: 80 }} container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <h1>Formulario</h1>
                </Grid>
                <Grid item container direction="row" justify="center" alignItems="center">
                    <TextField
                        id="standard-uncontrolled"
                        label="Nome completo"
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        id="standard-required"
                        label="Email"
                        margin="normal"
                        fullWidth
                    />
                    <Button style={{marginTop:20}} variant="contained" size="large" color="primary" fullWidth >
                        Large
                    </Button>
                </Grid>
            </Grid>
        );
    }
}