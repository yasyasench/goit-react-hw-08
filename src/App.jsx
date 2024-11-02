import React, { useEffect, lazy, Suspense } from 'react';
import "./css/App.css";
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import { Toaster } from 'react-hot-toast';  
import { refresh } from './redux/auth/operations';
import Loader from './components/Loader/Loader';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import useAuth from './components/hooks/useAuth.jsx';

const Home = lazy(() => import("./pages/HomePage/Home.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage.jsx"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage.jsx"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Layout>
  );
}

export default App;
