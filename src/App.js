
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Loginregister from '../src/components/Loginregister/Loginregister';
import Register from './components/Loginregister/Register';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Loginregister />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/register',
    element:<Register />
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
