import React from 'react';
import { useHistory } from 'react-router-dom';

import Form from './Form';

import { Formik } from 'formik';
import axios from 'axios';

/**
 * @author Ayrton Gomes 
 * 
 * Function componentof Client Form to register a new Client, using Formik 
 */
const ClientForm = () => {

    const history = useHistory();

    /**
     * @author Ayrton Gomes 
     * 
     * Function that call POST API request to register the new Client
     */
    const postClient = (values) => {
        axios.post(`https://localhost:44372/api/fornecedores/`, values)
            .then(res => {
                alert("IP cadastrado com sucesso!")
                history.push("/ips");
            })
    }

    return (
        <>
            <Formik
                onSubmit={values => {
                    values.age = parseInt(values.age, 10)
                    postClient(values);
                }}
            >
                <Form />
            </Formik>
        </>
    )

}
export default ClientForm;
