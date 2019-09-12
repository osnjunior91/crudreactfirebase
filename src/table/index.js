import React, { Component } from 'react';
import { Grid, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';

export default class Tabela extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Grid item style={{ width: 600, marginLeft: 80 }} container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <h1>Tabela</h1>
                </Grid>
                <Grid item container direction="row" justify="center" alignItems="center">
                    <Paper>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome completo</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Data criação</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}