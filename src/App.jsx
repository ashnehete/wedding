import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Travel from './pages/Travel';
import RSVP from './pages/RSVP';
import Registry from './pages/Registry';
import ThingsToDo from './pages/ThingsToDo';
import FAQ from './pages/FAQ';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/schedule" element={
            <PageTransition>
              <Schedule />
            </PageTransition>
          } />
          <Route path="/travel" element={
            <PageTransition>
              <Travel />
            </PageTransition>
          } />
          <Route path="/registry" element={
            <PageTransition>
              <Registry />
            </PageTransition>
          } />
          <Route path="/things-to-do" element={
            <PageTransition>
              <ThingsToDo />
            </PageTransition>
          } />
          <Route path="/rsvp" element={
            <PageTransition>
              <RSVP />
            </PageTransition>
          } />
          <Route path="/faq" element={
            <PageTransition>
              <FAQ />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
