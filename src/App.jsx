import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import ProjectGrid from './components/ProjectGrid';
import JobsList from './components/JobsList/JobsList';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <SearchSection />
              <ProjectGrid />
            </>
          } />
          <Route path="/jobs" element={<JobsList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 