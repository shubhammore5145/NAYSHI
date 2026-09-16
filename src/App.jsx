import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandMenu from './components/CommandMenu';
import WhatsAppWidget from './components/WhatsAppWidget';
import ChatAssistant from './components/ChatAssistant';

import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Work from './pages/Work';
import About from './pages/About';
import Insights from './pages/Insights';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ClientPortal from './pages/ClientPortal';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar onOpenCommand={() => setIsCommandOpen(true)} />
        <CommandMenu isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/work" element={<Work />} />
            <Route path="/plans" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portal/*" element={<ClientPortal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppWidget />
        <ChatAssistant />
      </div>
    </BrowserRouter>
  );
}

export default App;
