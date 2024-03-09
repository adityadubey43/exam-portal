import React from 'react';

const SidePanel = ({ isOpen, onClose, children }) => {
  // Render the side panel only if it's open
  return (
    <div className={`side-panel ${isOpen ? 'open' : ''}`}>
      <div className="side-panel-content">
        {children}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
