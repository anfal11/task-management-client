import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import { router } from './Routes/Router';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Context/AuthProvider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <DndProvider backend={HTML5Backend}>
 <RouterProvider router={router} />

 </DndProvider>
  </AuthProvider>
 <Toaster />
  </React.StrictMode>,
)
