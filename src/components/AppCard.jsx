import React from 'react';
import '../styles/AppCard.scss';

const AppCard = ({ children }) => {
  return (
    <div className="app-card">
      {children}
    </div>
  );
};

export default AppCard;