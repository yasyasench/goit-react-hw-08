import React, { useEffect } from 'react';
import "./css/App.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { Toaster } from 'react-hot-toast';  
import { refresh } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import Loader from './components/Loader/Loader';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  //APP//
   return isRefreshing ? (
      <Loader />
    ) : (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
             <Route path='contacts' element={<PrivateRoute component={<ContactsPage/>} redirectTo="/login" />} />
             <Route path='login' element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts" />} />
          <Route path='register' element={<RestrictedRoute component={<RegisterPage/>} redirectTo="/contacts" />} />
        </Route>
      </Routes>
      <Toaster />  
    </>
  )
}

export default App;

