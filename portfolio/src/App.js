import Navbar from "./components/Navbar/navbar";
import IntroSection from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <IntroSection/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App;
