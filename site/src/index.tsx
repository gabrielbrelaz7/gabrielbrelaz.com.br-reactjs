import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import { Customer } from './pages/customer/Customer';
import { WebDesign } from './pages/web-design/web-design';


export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cliente/:id" element={<Customer />} />
        <Route path="/webdesign" element={<WebDesign />} />
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

