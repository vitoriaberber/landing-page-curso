import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Depoimentos from "./components/pages/Depoimentos";
import Inscrever from "./components/pages/Inscrever";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import { useRef} from 'react';
import ComecarAgora from './components/pages/ComecarAgora'

function App() {
  const sobreRef = useRef();
  const depoimentosRef = useRef();

  const rolarParaSobre = () => {
    sobreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const rolarParaDepoimentos = () => {
    depoimentosRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Router>
      <Header btn="btn" aoClicarEmSobre={rolarParaSobre} aoClicarEmDepoimentos={rolarParaDepoimentos}/>
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Sobre referenciaRolagem={sobreRef}/>
                <Depoimentos referenciaRolagem={depoimentosRef}/>
              </>
            }
          />
          <Route path="/inscrever" element={<Inscrever />} />
          <Route path="/comeceAgora" element={<ComecarAgora/>} />
        </Routes>
      </Main>

      <Footer />
    </Router>
  );
}

export default App;
