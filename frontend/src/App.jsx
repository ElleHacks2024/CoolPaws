import { useState } from 'react'
import './App.css'
import Listandmap from './pages/Listandmap/Listandmap'
import Healthmonitoring from './pages/Healthmonitoring/Healthmonitoring'
import Schedules from './pages/Schedules/Schedules'
import Dashboard from './pages/Dashboard/Dashboard'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <Router>
    
          <div className="list-and-map">
            <Sidebar className='list-and-map-left'/>
            <Routes>
              <Route path="/find-parks" element={<Listandmap className='list-and-map-right' />} />
              <Route path="/health-monitoring" element={<Healthmonitoring className='list-and-map-right' />} />  
              <Route path="/vaccination-schedule" element={<Schedules className='list-and-map-right' />} />
              <Route path="/" element={<Dashboard className='list-and-map-right' />} />
              <Route path="/dashboard" element={<Dashboard className='list-and-map-right' />} />
            </Routes>
          </div>
        
    </Router>
  )
}

export default App
