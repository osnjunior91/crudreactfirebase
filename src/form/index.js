import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import firebase from '../firebaseConnection';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
        };
        this.salvarRegistro = this.salvarRegistro.bind(this);
        this.changeInput = this.changeInput.bind(this);
    };


    salvarRegistro(e) {
        firebase.database().ref('/register').push(this.state)
            .then(() => {
                alert('Registro criado com sucesso!');
            })
            .catch((error) => {
                alert('Error ao cadastrar o usuario!');
                console.log(error);
            });
    }

    changeInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Grid item spacing={4} style={{ width: 600, marginLeft: 80 }} container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <h1>Formulario</h1>
                </Grid>
                <Grid item container direction="row" justify="center" alignItems="center">
                    <TextField
                        name="name"
                        label="Nome completo"
                        margin="normal"
                        fullWidth
                        value={this.state.name}
                        onChange={this.changeInput}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        margin="normal"
                        fullWidth
                        value={this.state.email}
                        onChange={this.changeInput}
                    />
                    <Button onClick={this.salvarRegistro} style={{ marginTop: 20 }} variant="contained" size="large" color="primary" fullWidth >
                        Salvar Registro
                    </Button>
                </Grid>
            </Grid>
        );
    }
}