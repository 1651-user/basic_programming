import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login'
import Admin from './pages/Admin'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Login setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Admin setIsAuthenticated={setIsAuthenticated} />
                        </ProtectedRoute>
                    }
                />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
