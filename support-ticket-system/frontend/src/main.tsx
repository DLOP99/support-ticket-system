import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './styles/app.css';
import TicketListPage from './pages/TicketListPage';
import TicketFormPage from './pages/TicketFormPage';
import TicketDetailPage from './pages/TicketDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <TicketListPage /> },
      { path: 'new', element: <TicketFormPage /> },
      { path: 'ticket/:id', element: <TicketDetailPage /> }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
