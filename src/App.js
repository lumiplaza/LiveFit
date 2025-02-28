import Navbar from "./components/NavBar";
import Entrenamiento from "./components/Entrenamiento";
import Nutricion from "./components/Nutricion";
import Contacto from "./components/Contacto";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/entrenamiento" element={<Entrenamiento />} />
        <Route path="/nutricion" element={<Nutricion />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
    
  );
}

export default App;
