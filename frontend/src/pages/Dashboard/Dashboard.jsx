import Healthmonitoring from "../Healthmonitoring/Healthmonitoring";
import Schedules from "../Schedules/Schedules";
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
        <Healthmonitoring className="dashboard-left"/>
        <Schedules className="dashboard-right"/>
        </div>
    );
    }
export default Dashboard;