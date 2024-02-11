import NavMenu from "./components/NavMenu";
import { BrowserRouter as BRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BRouter>
        <NavMenu/>
      </BRouter>
    </>
  )
}

export default App;
