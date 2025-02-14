import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SearchSection from './Components/SearchSection';
import ProjectGrid from './Components/ProjectGrid';
import JobsList from './Components/JobsList';
import Footer from './Components/Footer';
import Login from "./Components/login";
import ContentGrid from "./Components/ContentGrid";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import CreateProject from "./Components/CreateProject";
import ProfileEdit from "./Components/ProfileEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ 
          <>
            <Navbar />
            <SearchSection />
            <ProjectGrid />
            <Footer />
          </>
        } />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ContentGrid" element={ 
          <>
            <Navbar />
            <ContentGrid />
            <Footer />
          </>
        } />
        <Route path="/profile" element={ 
          <>
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 