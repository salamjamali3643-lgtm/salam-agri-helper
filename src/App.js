import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CropSection from './components/CropSection';
import AnimalSection from './components/AnimalSection';
import Settings from './components/Settings';
import { translations } from './translations';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [language, setLanguage] = useState('english');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    const savedUser = localStorage.getItem('user');
    if (savedLang) setLanguage(savedLang);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const t = translations[language];

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('user');
    setCurrentPage('dashboard');
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} language={language} onLanguageChange={handleLanguageChange} />;
  }

  return (
    <div className="App" dir={language === 'urdu' || language === 'sindhi' ? 'rtl' : 'ltr'}>
      <header className="app-header">
        <h1>🌾 {t.appName}</h1>
        <div className="user-info">
          <span>{t.welcome}, {user?.name}</span>
        </div>
      </header>

      <nav className="bottom-nav">
        <button 
          className={currentPage === 'dashboard' ? 'active' : ''}
          onClick={() => setCurrentPage('dashboard')}
        >
          🏠<br/>{t.home}
        </button>
        <button 
          className={currentPage === 'crops' ? 'active' : ''}
          onClick={() => setCurrentPage('crops')}
        >
          🌾<br/>{t.crops}
        </button>
        <button 
          className={currentPage === 'animals' ? 'active' : ''}
          onClick={() => setCurrentPage('animals')}
        >
          🐄<br/>{t.animals}
        </button>
        <button 
          className={currentPage === 'settings' ? 'active' : ''}
          onClick={() => setCurrentPage('settings')}
        >
          ⚙️<br/>{t.settings}
        </button>
      </nav>

      <main className="app-content">
        {currentPage === 'dashboard' && <Dashboard language={language} onNavigate={setCurrentPage} />}
        {currentPage === 'crops' && <CropSection language={language} />}
        {currentPage === 'animals' && <AnimalSection language={language} />}
        {currentPage === 'settings' && (
          <Settings 
            language={language} 
            onLanguageChange={handleLanguageChange}
            onLogout={handleLogout}
          />
        )}
      </main>
    </div>
  );
}

export default App;