import React from 'react'
import css from "./RegisterPage.module.css"
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/operations'

const RegisterPage = () => {
  const dispatch = useDispatch();

  const initValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => { 
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={css.hero}>
      <div className={css.heroContent}>
        <div className={css.textSection}>
          <h1 className={css.title}>Sign up now!</h1>
        </div>
        <div className={css.card}>
          <Formik initialValues={initValues} onSubmit={handleSubmit}>
            <Form className={css.cardBody}>
              <div className={css.formControl}>
                <label className={css.label}>
                  <span className={css.labelText}>Name</span>
                </label>
                <Field name="name" type="text" placeholder="name" className={css.input} required />
              </div>
              <div className={css.formControl}>
                <label className={css.label}>
                  <span className={css.labelText}>Email</span>
                </label>
                <Field name="email" type="email" placeholder="email" className={css.input} required />
              </div>
              <div className={css.formControl}>
                <label className={css.label}>
                  <span className={css.labelText}>Password</span>
                </label>
                <Field name="password" type="password" placeholder="password" className={css.input} required />
              </div>
              <div className={css.formControl}>
                <button type="submit" className={css.registerButton}>Sign up</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;
