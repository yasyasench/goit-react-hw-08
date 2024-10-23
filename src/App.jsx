import React from 'react';
import "./css/App.css";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  //APP//
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App