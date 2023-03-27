import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usuarios from './components/Usuarios';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Usuarios></Usuarios>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
