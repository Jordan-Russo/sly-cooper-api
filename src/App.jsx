import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import SearchPage from './pages/SearchPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<WelcomePage />}
          />
        <Route
          path="/api/:name"
          element={<SearchPage />}
          />
      </Routes>
    </BrowserRouter>
  );
}