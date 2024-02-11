import NavMenu from "./components/NavMenu/NavMenu";
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BRouter>
        <NavMenu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BRouter>
    </>
  )
}

export default App;
