import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AuditPage from './pages/AuditPage';
import LearnPage from './pages/LearnPage';
import AccountPage from './pages/AccountPage';
import SupportPage from './pages/SupportPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
