import {Navigate, BrowserRouter as Rooter, Route, Routes} from 'react-router-dom';
import {Home} from '@/pages/home';
import Allprojects from '@/pages/allprojects';
import RGPD from '@/pages/legalmentions';

import '@/style.css';
import {UnAuthRoutes} from '@/constants/route.constants';

function App() {
  return (
    <Rooter>
      <Routes>
        <Route path={UnAuthRoutes.HOME} element={<Home />} />
        <Route path={UnAuthRoutes.ALL_PROJECT} element={<Allprojects />} />
        <Route path={UnAuthRoutes.LEGAL_NOTICES} element={<RGPD />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </Rooter>
  );
}

export default App;
