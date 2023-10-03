import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Registration from './components/Registration/Registration.jsx';

const App = () => {
  return (
    <div className="container">
      <Registration />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
