
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Loginregister from '../src/components/Loginregister/Loginregister';
import Register from './components/Loginregister/Register';
import Dashboard from './components/Loginregister/dashboard';
import AuthGuard from './services/authService';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Loginregister />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/login',
    element: <Loginregister />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/register',
    element: (
      <AuthGuard>
        <Register />
      </AuthGuard>
    )
  },{
    path:'/dashboard',
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    )
  }
]);

function App() {
  
  return (
    <div>
      
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
