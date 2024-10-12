import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement'
import CourtManagement from './pages/CourtManagement'
import LessonManagement from './pages/LessonManagement'
import TournamentManagement from './pages/TournamentManagement'
import MembershipManagement from './pages/MembershipManagement'
import BillingAndPayments from './pages/BillingAndPayments'
import Communication from './pages/Communication'
import PerformanceTracking from './pages/PerformanceTracking'
import EquipmentAndProShop from './pages/EquipmentAndProShop'
import EventCalendar from './pages/EventCalendar'
import ReportingAndAnalytics from './pages/ReportingAndAnalytics'

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/courts" element={<CourtManagement />} />
          <Route path="/lessons" element={<LessonManagement />} />
          <Route path="/tournaments" element={<TournamentManagement />} />
          <Route path="/memberships" element={<MembershipManagement />} />
          <Route path="/billing" element={<BillingAndPayments />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/performance" element={<PerformanceTracking />} />
          <Route path="/equipment" element={<EquipmentAndProShop />} />
          <Route path="/events" element={<EventCalendar />} />
          <Route path="/reports" element={<ReportingAndAnalytics />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
