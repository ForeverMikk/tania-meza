import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AOS from 'aos';

import Navbar from './componets/Navbar/Navbar';
import Home from './componets/Home/Home';
import Footer from './componets/Footer/Footer';
import MisCausas from './componets/MisCausas/MisCausas';
import Noticias from './componets/Noticias/Noticias';
// import Eventos from './componets/Eventos/Eventos';
import Contactanos from './componets/Contactanos/Contactanos';
import BackToTop from './componets/BackToTop/BackToTop';

import 'aos/dist/aos.css'
// import ScrollHandler from './componets/ScrollHandler/ScrollHandler';

import './App.css';

function App() {

  AOS.init()

  return (
      <div>
            <Router>
              <Navbar />
              
              <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/noticias' element={<Noticias />} />
                  <Route path='/mis-causas' element={<MisCausas />} />
                  {/* <Route path='/eventos' element={<Eventos />} /> */}
                  <Route path='/contactanos' element={<Contactanos />} />
              </Routes>
              
              <Footer />
              <BackToTop />
            </Router>
      </div>
  );
}

export default App;
