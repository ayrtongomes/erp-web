import React from "react";
import { withRouter } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
// import Delete from '@material-ui/icons/Delete';
import axios from 'axios';

const styles = theme => ({
    root: {
        width: "100%",
        margin: "15px",
        overflowX: "auto"
    },
    table: {}
});

class ListAllProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
        };
    }

    componentDidMount() {
        axios.get(`https://localhost:44372/api/fornecedores/`)
            .then(res => {
                res.data.map(x => {
                    axios.get(`${x.ip}/api/getProdutos`)
                        .then(resp => {
                            let all = this.state.clients;
                            resp.data.map(p => {
                                all.push(p);
                            })
                            this.setState({ clients: all });
                        })
                })
            })

    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Lote minímo</TableCell>
                            <TableCell>Preço</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.clients.map((item, i) => {
                            return (
                                <TableRow key={`row-${i}`}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.produto}</TableCell>
                                    <TableCell>{item.qtde}</TableCell>
                                    <TableCell>{item.loteMinimo}</TableCell>
                                    <TableCell>{item.preco}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
const listAll = withStyles(styles)(ListAllProducts);
export default withRouter(listAll);
