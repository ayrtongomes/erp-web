import React from 'react';

import { Form, Field } from 'formik';
import FieldInput from './FieldInput';
import Button from '@material-ui/core/Button';

/**
 * @author Ayrton Gomes 
 * 
 * Form that uses the generics fields to render the full form 
 */
const SampleForm = ({ ...props }) => {
    return (
        <Form style={{ width: "50%", margin: 'auto', marginTop: '5%' }}>
            <Field name='ip'>
                {({ field }) => (
                    <FieldInput field={field} label="IP *" />
                )}
            </Field>
            <Button variant="contained" size="small" type="submit" fullWidth>
                Cadastrar
            </Button>
        </Form >
    );
};

export default SampleForm;
