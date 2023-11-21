import React, { useState } from 'react';

const ThemeSwitching = ({ themes }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const switchTheme = () => {
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextThemeIndex);
  };

  const currentTheme = themes[currentThemeIndex];

  return (
    <div style={{ backgroundColor: currentTheme.background, color: currentTheme.text, margin: '50px', padding: '25px', textAlign: 'center' }}>
      <button onClick={switchTheme} style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '10px', borderWidth: '0px'}}>Switch Theme</button>
    </div>
  );
};

const App = () => {
  const themes = [
    { background: '#87CEEB', text: '#ffffff' },
    { background: '#90EE90', text: '#ffffff' },
    { background: '#F4C2C2', text: '#ffffff' },
  ];

  return <ThemeSwitching themes={themes} />;
};

export default App;