
import Dashboard from "./components/Dashboard";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import CourseCard from "./components/CourseCard";
import AssignmentTracker from "./components/AssignmentTracker";
import Announcements from "./components/Announcements";

function App() {
  return (<>  
    <Dashboard />
    <Announcements/>
    <AssignmentTracker/>
    <Dashboard/>
    <Header/>
    <Sidebar/>
    <StatCard/>
    <CourseCard/>
    
  </>);
}

export default App;
