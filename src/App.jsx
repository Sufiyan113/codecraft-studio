import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
