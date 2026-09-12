import {Navigate, BrowserRouter as Rooter, Route, Routes} from 'react-router-dom';
import {Home} from '@/screens/home/home.screen';
import {LegalNotices} from '@/screens/legal_notices/legalmentions.screen';
import {AllProjects} from '@/screens/all_projects/allprojects.screen';

import '@/style.css';
import {UnAuthRoutes} from '@/constants/route.constants';

function App() {
  return (
    <Rooter>
      <Routes>
        <Route path={UnAuthRoutes.HOME} element={<Home />} />
        <Route path={UnAuthRoutes.ALL_PROJECT} element={<AllProjects />} />
        <Route path={UnAuthRoutes.LEGAL_NOTICES} element={<LegalNotices />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </Rooter>
  );
}

export default App;
