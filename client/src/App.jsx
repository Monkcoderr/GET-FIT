import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import MembersPage from './pages/MembersPage';
import MemberProfilePage from './pages/MemberProfilePage';
// import TrainersPage from './pages/TrainersPage';
// import SchedulePage from './pages/SchedulePage';
// import PaymentsPage from './pages/PaymentsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/members/:id" element={<MemberProfilePage />} />
        {/* <Route path="/trainers" element={<TrainersPage />} /> */}
        {/* <Route path="/schedule" element={<SchedulePage />} /> */}
        {/* <Route path="/payments" element={<PaymentsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
