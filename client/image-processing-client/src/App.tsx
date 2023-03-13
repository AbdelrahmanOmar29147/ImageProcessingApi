import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu/SideMenu';
import ImagePage from './pages/ImagePage/ImagePage';
import ProcessingPage from './pages/ProcessingPage/ProcessingPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/images" element={<ImagePage />} />
        <Route path="/processing" element={<ProcessingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
