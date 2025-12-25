import React from 'react';
import { PostsProvider } from './contexts/PostsContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import PostList from './components/PostList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const AppContent = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <header className="app-header">
                <div className="header-content">
                    <div className="header-left">
                        <h1>Posts Manager</h1>
                        <p className="subtitle">React Context API Demo</p>
                    </div>
                    <ThemeToggle />
                </div>
            </header>

            <main className="app-main">
                <PostList />
            </main>

            <footer className="app-footer">
                <p>Mock Evaluation 1 - React Posts Application</p>
            </footer>
        </div>
    );
};

function App() {
    return (
        <ThemeProvider>
            <PostsProvider>
                <AppContent />
            </PostsProvider>
        </ThemeProvider>
    );
}

export default App;
