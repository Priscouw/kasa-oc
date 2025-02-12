import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Accueil from "./pages/Accueil/Accueil";
import Apropos from "./pages/Apropos/Apropos";
import Logement from "./pages/Logement/Logement";
import Erreur from "./pages/Erreur/Erreur";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
