import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import FullPizza from '../pages/FullPizza';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/pizza/:id',
        element: <FullPizza />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
