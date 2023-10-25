import { Navigate, Route, Routes } from "react-router-dom";

import routes from "@/routes";
import NewNav from '../src/pages/NewNav';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <> 
      <div className="bg-white">
    {/* <Navbar routes={routes} /> */}
    
    <NewNav  />
    

      </div>
  
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

    </>
  );
}

export default App;
