import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Partners from './pages/Partners';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminPosts from './pages/admin/Posts';
import AdminSettings from './pages/admin/Settings';
import AdminMedia from './pages/admin/Media';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="partners" element={<Partners />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="posts" element={<AdminPosts />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="media" element={<AdminMedia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
