import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const emailInputRef = useRef(null)
    const navigate = useNavigate()

    // Focus email input on mount
    useEffect(() => {
        emailInputRef.current?.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        // Validation logic as per requirements
        if (email === 'admin@gmail.com' && password === 'admin1234') {
            setIsAuthenticated(true)
            navigate('/admin')
        } else {
            setError('Wrong email or password')
        }
    }

    return (
        <div className="login-container">
            <div className="login-card fade-in">
                <div className="login-header">
                    <h1>Fleet Management</h1>
                    <p className="text-secondary">Sign in to manage your fleet</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            ref={emailInputRef}
                            type="email"
                            placeholder="admin@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && (
                        <div className="error-message fade-in">
                            {error}
                        </div>
                    )}

                    <button type="submit" className="btn-primary login-btn">
                        Sign In
                    </button>

                    <div className="login-hint">
                        <p className="text-muted">Demo credentials:</p>
                        <p className="text-secondary">admin@gmail.com / admin1234</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
