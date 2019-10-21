import React from "react";
import { withRouter } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import axios from 'axios';

const styles = theme => ({
    root: {
        width: "100%",
        margin: "15px",
        overflowX: "auto"
    },
    table: {}
});

class ListAllIps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
        };
    }

    componentDidMount() {
        axios.get(`https://localhost:44372/api/fornecedores/`)
            .then(res => {
                this.setState({ clients: res.data });
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
                            <TableCell>IP</TableCell>
                            <TableCell align="center">Ação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.clients.map((item, i) => {
                            return (
                                <TableRow key={`row-${i}`}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.ip}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
const listAll = withStyles(styles)(ListAllIps);
export default withRouter(listAll);
