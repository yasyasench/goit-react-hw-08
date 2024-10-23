import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';

import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOps';


const initialValues = {
    name: "",
    number: ""
};

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

const ContactForm = () => {

    const nameFieldId = useId();
    const numberFieldId = useId();

    const dispatch = useDispatch();
    
    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));

        actions.setSubmitting(false);
        actions.resetForm();

     }; 


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}
        >
            {({ isSubmitting }) => (
                <Form className={css.form}>
                    <div className={css.inputWrap}>
                        <label className={css.formLabel}></label>
                        <Field
                            className={css.formField}
                            type='text' 
                            name="name"
                            id={nameFieldId}>
                        </Field>
                        <ErrorMessage name="name" component="span" className={css.error} />
                    </div>
                    <div className={css.inputWrap}>
                        <label className={css.formLabel}></label>
                        <Field
                            className={css.formField}
                            type="tel"
                            name="number"
                            id={numberFieldId}>
                        </Field>
                        <ErrorMessage name="number" component="span" className={css.error} />
                    </div>
                    <button className={css.formButton} type='submit' disabled={isSubmitting}>Add contact</button>
                </Form>
                
            )}
            
        </Formik>
  )
}

export default ContactForm