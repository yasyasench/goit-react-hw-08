import React, { useEffect } from 'react'
import css from "./LoginPage.module.css"
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import toast from 'react-hot-toast';

const LoginPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const initValues = {
    email:"",
    password: "",
  };

  const handleSubmit = (values, options) => { 
    console.log(values);
    dispatch(login(values))
      .unwrap()
        .then(res => {
        navigate("/contacts");
      })
      .catch((error) => {
        console.error("Login error: ", error);
        toast.error("incalid credentials");
      });
      
    options.resetForm();

  };

  /*useEffect(() =>{
    isLoggedIn && navigate("/contacts");
  }, [isLoggedIn, navigate]);*/

  return (
    <div className={css.hero}>
  <div className={css.heroContent}>
    <div className={css.textSection}>
      <h1 className={css.title}>Login now!</h1>
    </div>
    <div className={css.card}>
          <Formik onSubmit={handleSubmit} initialValues={initValues}>
            <Form className={css.cardBody}>
        <div className={css.formControl}>
          <label className={css.lable}>
            <span className={css.labelText}>Email</span>
          </label>
          <Field name="email" type="email" placeholder="email" className={css.input} required />
        </div>
        <div className={css.formControl}>
          <label className={css.lable}>
            <span className={css.labelText}>Password</span>
          </label>
          <Field name="password" type="password" placeholder="password" className={css.input} required />
          <label className={css.lable}>
            <a href="#" className={css.forgotPassword}>Forgot password?</a>
          </label>
        </div>
        <div className={css.formControl}>
          <button type="submit" className={css.loginButton}>Login</button>
        </div>
      </Form>
      </Formik>
    </div>
  </div>
</div>
  );
};

export default LoginPage