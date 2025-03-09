import React, { useState } from "react";
import Header from "./components/Header";
import ContentModule from "./components/ContentModule";
import Settings from "./components/Settings";
import useTextToSpeech from "./components/UseTextToSpeech";
import "./App.css";

function App() {
  const [fontSize, setFontSize] = useState(16);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [theme, setTheme] = useState("light");
  const { speak, cancel } = useTextToSpeech();

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`App ${theme} ${isHighContrast ? "high-contrast" : ""}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      <Header />
      <Settings
        fontSize={fontSize}
        setFontSize={setFontSize}
        isHighContrast={isHighContrast}
        setIsHighContrast={setIsHighContrast}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />
      <ContentModule speak={speak} cancel={cancel} />
    </div>
  );
}

export default App;
