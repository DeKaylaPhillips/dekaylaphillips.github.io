import "./App.css";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NavBar from "./components/shared/NavBar";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Router>
        <NavBar/>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
