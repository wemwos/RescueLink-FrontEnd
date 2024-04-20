import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';
import UnauthenticatedRoutes from './routes/UnauthenticatedRoutes';
import NotFound from './pages/NotFound';
import Login from './pages/login';

import Monitor from './pages/Monitor';
import History from './pages/History';
import Records from './pages/Records';
import Reports from './pages/Reports';  



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwt_token'));
  const role = localStorage.getItem('user_dept');

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('jwt_token'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  return (
    <BrowserRouter>

      <Routes>
        
        <Route element={<UnauthenticatedRoutes loggedIn={isLoggedIn}/>} >
          <Route path="/" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Route>
        
        <Route element={<AdminRoutes isAdmin={role === 'admin'} />} > 
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route> 

         <Route element={<UserRoutes loggedIn={isLoggedIn}/>} >
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/history" element={<History />} />
          <Route path="/records" element={<Records />} />
          <Route path="/reports" element={<Reports />} /> 
          
          {/* <Route path="/album/:index" element={<Album />} />
          <Route path="/" element={<MusicMP />} />
          <Route path="/player/:type/:index" element={<MusicPlayer />} />
          <Route path="/playlist/:index" element={<Playlist />} />
          <Route path="/artist" element={<Artist />} /> */}
        </Route> 

        {/* <Route element={<StudioRoutes role={role} />} >
          <Route path='/studio/dashboard' element={<ArtistDashboard />}/>
          <Route path="/studio/upload" element={<ArtistUpload />} />
          <Route path='/studio/content' element={<ArtistContents />}/>
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App
