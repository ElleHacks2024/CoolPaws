import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../assets/logo.png';
import dashboard from '../../assets/dashboard.png';
import PetProfileIcon from '../../assets/pet-profile.png';
import HealthMonitoringIcon from '../../assets/health-monitoring.png';
import VaccinationIcon from '../../assets/vaccination.png';
import FindParksIcon from '../../assets/find-parks.png';
import SettingsIcon from '../../assets/settings.png';
import DocumentationIcon from '../../assets/documentation.png';

const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" />
        <h1>CoolPaws</h1>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-title">MENU</p>
        <NavLink to="/dashboard" className="menu-item" activeClassName="active">
          <img src={dashboard} alt="Dashboard" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/pet-profile" className="menu-item" activeClassName="active">
          <img src={PetProfileIcon} alt="Pet Profile" />
          <span>Pet profile</span>
        </NavLink>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-title">ANALYTICS</p>
        <NavLink to="/health-monitoring" className="menu-item" activeClassName="active">
          <img src={HealthMonitoringIcon} alt="Health Monitoring" />
          <span>Health monitoring</span>
        </NavLink>
        <NavLink to="/vaccination-schedule" className="menu-item" activeClassName="active">
          <img src={VaccinationIcon} alt="Vaccination" />
          <span>Schedules</span>
        </NavLink>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-title">ACTIVITIES</p>
        <NavLink to="/find-parks" className="menu-item" activeClassName="active">
          <img src={FindParksIcon} alt="Find Parks" />
          <span>Find Parks & Trails</span>
        </NavLink>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-title">HELP</p>
        <NavLink to="/settings" className="menu-item" activeClassName="active">
          <img src={SettingsIcon} alt="Settings" />
          <span>Settings</span>
        </NavLink>
        <NavLink to="/documentation" className="menu-item" activeClassName="active">
          <img src={DocumentationIcon} alt="Documentation" />
          <span>Documentation</span>
        </NavLink>
      </div>
      
    </div>
  );
};

export default Sidebar;