import NavMenu from "./components/NavMenu/NavMenu";
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import FooterSection from "./components/FooterSection";
import Scroll from "./components/SmoothScrollbar";


function App() {
  return (
    <>
      <BRouter>
        <NavMenu/>
        <Scroll/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        <FooterSection/>
      </BRouter>
    </>
  )
}

export default App;
