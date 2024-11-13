import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './Components/Navigation/NavigationBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Pages/HomePage/Home.jsx';
import NotFound from './Components/Pages/ErrorPage/ErrorPage.jsx';
import Loader from './Components/Loader/Loader.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isErrorPage, setIsErrorPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    setIsErrorPage(location.pathname !== "/" );
  }, [location]);

  return (
    <>
      <div>
        {loading ? <Loader /> : (
          <div id="app-container">
            {!isErrorPage && <NavigationBar />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default App;