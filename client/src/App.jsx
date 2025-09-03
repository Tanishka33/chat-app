import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';
import bg from './assets/bgImage.svg';


const App = () => {
  const { authUser, loading } = useContext(AuthContext);

  const isProfileComplete = authUser?.fullname && authUser?.profilePic;

  if (loading) return <div className="text-white p-5">Loading...</div>;

  return (
    <div className="min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              isProfileComplete ? <HomePage /> : <Navigate to="/profile" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            !authUser ? (
              <LoginPage />
            ) : isProfileComplete ? (
              <Navigate to="/" />
            ) : (
              <Navigate to="/profile" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            authUser ? (
              isProfileComplete ? <Navigate to="/" /> : <ProfilePage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
};

// console.log("authUser:", authUser);
// console.log("authUser.fullname:", authUser?.fullname);
// console.log("authUser.profilePic:", authUser?.profilePic);


export default App;
