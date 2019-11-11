import React from "react";
import { withRouter } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";

import { Form, Field, Formik } from 'formik';
import FieldInput from './form/FieldInput';
import Button from '@material-ui/core/Button';

import axios from 'axios';

const styles = theme => ({
    root: {
        width: "100%",
        margin: "15px",
        overflowX: "auto"
    },
    table: {}
});

class Inventary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prods: [],
        };
    }

    componentDidMount() {
        axios.get(`https://localhost:44372/api/getProdutos`)
            .then(res => {
                this.setState({ prods: res.data });
            })

    }

    handleSubmit = (values) => {
        let produtos = this.state.prods;
        let obj = {
            itensInventario: []
        }
        Object.entries(values).map(([key, value]) => {
            let p = produtos.find(x => x.id == key);
            let objItem = {
                produto: p,
                quantidadeInformada: value
            }
            obj.itensInventario.push(objItem);
        })

        axios.post(`https://localhost:44372/api/inventario/`, obj)
            .then(res => {
                this.props.history.push(`/report/${res.data.inventarioId}`)
            })
    }
    render() {
        const { prods } = this.state;
        return (
            <>
                <h3>Informe a quantidade de cada produto nos campos referentes de cada um</h3>

                <Formik
                    onSubmit={values => {
                        this.handleSubmit(values)
                    }}
                >
                    <Form style={{ width: "50%", margin: 'auto', marginTop: '5%' }}>
                        {prods.length > 0 ?
                            prods.map(item => (
                                <Field name={item.id}>
                                    {({ field }) => (
                                        <FieldInput field={field} label={item.nome} type="number" />
                                    )}
                                </Field>
                            )) : 'Sem produtos cadastrados'}
                        <Button variant="contained" size="small" type="submit" fullWidth>
                            Enviar
                    </Button>
                    </Form >
                </Formik>
            </>
        );
    }
}
const inve = withStyles(styles)(Inventary);
export default withRouter(inve);
