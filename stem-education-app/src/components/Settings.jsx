import React from "react";

function Settings({ fontSize, setFontSize, isHighContrast, setIsHighContrast, theme, onThemeToggle }) {
  return (
    <section aria-labelledby="settings-heading">
      <h2 id="settings-heading">Accessibility Settings</h2>
      <div>
        <label htmlFor="font-size">Font Size: </label>
        <input
          type="range"
          id="font-size"
          min="12"
          max="24"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          aria-label="Adjust font size"
        />
        <span>{fontSize}px</span>
      </div>
      <div>
        <label htmlFor="high-contrast">High Contrast Mode: </label>
        <input
          type="checkbox"
          id="high-contrast"
          checked={isHighContrast}
          onChange={() => setIsHighContrast(!isHighContrast)}
          aria-label="Toggle high contrast mode"
        />
      </div>
      
      {/* Button positioned at the top-right corner */}
      <button 
        onClick={onThemeToggle} 
        aria-label="Toggle theme" 
        style={{
          position: 'fixed', 
          top: '120px', 
          right: '150px', 
          zIndex: 1000,
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </section>
  );
}

export default Settings;