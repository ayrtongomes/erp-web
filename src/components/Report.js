import React from "react";
import { withRouter } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import axios from 'axios';
import { Input, Grid, FormControl } from "@material-ui/core";

const styles = theme => ({
    root: {
        width: "100%",
        margin: "15px",
        overflowX: "auto"
    },
    table: {}
});

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inventary: null,
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`https://localhost:44372/api/inventario/byId/${id}`)
            .then(res => {
                this.setState({ inventary: res.data[0] })
            })

    }

    render() {
        const { classes } = this.props;
        const { inventary } = this.state
        return (
            <>
                <h3>Relatório</h3>
                <div style={{ flexGrow: 1, padding: '20px', }}>
                    {inventary ?
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={6} spacing={3} >
                                <p style={{ display: 'grid', textAlign: 'left' }}>
                                    <small style={{ color: '#606060', fontWeight: '600' }}>ID</small>
                                    <span>{inventary.inventarioId}</span>
                                </p>
                            </Grid>
                            <Grid item xs={6} md={6} spacing={3} >
                                <p style={{ display: 'grid', textAlign: 'left' }}>
                                    <small style={{ color: '#606060', fontWeight: '600' }}>Data</small>
                                    <span>{inventary.dataHora}</span>
                                </p>
                            </Grid>
                            <Grid item xs={6} spacing={3} >
                                <p style={{ display: 'grid', textAlign: 'left' }}>
                                    <small style={{ color: '#606060', fontWeight: '600' }}>Variação relativa de entrada</small>
                                    <span>{inventary.variacaoRelativaEntrada + "%"}</span>
                                </p>
                            </Grid>
                            <Grid item xs={6} spacing={3} >
                                <p style={{ display: 'grid', textAlign: 'left' }}>
                                    <small style={{ color: '#606060', fontWeight: '600' }}>Variação relativa de saida</small>
                                    <span>{inventary.variacaoRelativaSaida + "%"}</span>
                                </p>
                            </Grid>
                            <Grid item xs={6} spacing={3} >
                                <p style={{ display: 'grid', textAlign: 'left' }}>
                                    <small style={{ color: '#606060', fontWeight: '600' }}>Variação absoluta</small>
                                    <span>{inventary.variacaoAbsoluta + "%"}</span>
                                </p>
                            </Grid>
                            <Grid item xs={6} spacing={3} >
                                <p style={{ display: 'grid', textAlign: 'left' }}>
                                    <small style={{ color: '#606060', fontWeight: '600' }}>Acurácia</small>
                                    <span>{inventary.acuracia + "%"}</span>
                                </p>
                            </Grid>
                            <Grid item xs={6} spacing={3} >
                                <p style={{ display: 'grid', textAlign: 'left' }}>
                                    <small style={{ color: '#606060', fontWeight: '600' }}>Produtos reportados</small>
                                    <span>{inventary.itensInventario.length}</span>
                                </p>
                            </Grid>
                        </Grid>
                        : 'Não foi encontrado o relatório'
                    }
                </div>
            </>
        );
    }
}
const inven = withStyles(styles)(Report);
export default withRouter(inven);
