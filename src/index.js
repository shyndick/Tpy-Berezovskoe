import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/reset.css'
import './styles/header.css'
import './styles/style.css'
import './styles/footer.css'
import './styles/main.css'
import './styles/contacts.css'
import './styles/aboutCompany.css'
import './styles/products.css'
import './styles/photo.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

