import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import cityApi from 'api/cityApi';
import Loginpage from 'features/auth/page/Loginpage';
import AdminLayout from 'components/Layout/AdminLayout';
import { NotFound } from 'components/Common';

// ** Styles
import './App.css';

function App() {

  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res))
  }, [])
  return (
    <div >
      <Routes>
        <Route path='/login' element={<Loginpage />} />
        <Route path='/admin' element={<AdminLayout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
