import React from 'react';
import './index.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/home';
import { MainLayout } from 'layouts/mainLayout';
import { Login } from 'pages/auth/Login';
import { Register } from 'pages/auth/Register';
import { Profile } from 'pages/profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route
          path="auth"
          element={<Navigate replace to="/auth/login" />}
        />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />

        <Route path="profile/:login" element={<Profile />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
