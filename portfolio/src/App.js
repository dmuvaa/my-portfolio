import NavMenu from "./components/NavMenu/NavMenu";
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <BRouter>
        <NavMenu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <FooterSection/>
      </BRouter>
    </>
  )
}

export default App;
