import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastContainer />
        {/* <div className='max-w-screen-xl mx-auto'> */}
            <RouterProvider router={routes} />
          {/* </div> */}
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
