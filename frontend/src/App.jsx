import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { NotFound } from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/project/:slug" element={<ProjectDetailsPage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
