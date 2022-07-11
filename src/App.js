import {Routes, Route} from 'react-router-dom';
import routes from './pages/routes';
import PrivateRoute from './components/Router/PrivateRoute';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
 console.log(routes.login);
  return (
    <Routes>
     {Object.values(routes).map( route =>(<Route key={route.path} path={route.path} element={route.private? <PrivateRoute>{route.element}</PrivateRoute>: route.element} />
      ))}
    </Routes>
  );
}

export default App;
