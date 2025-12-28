import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar({ setIsAuthenticated }) {
    const navigate = useNavigate()

    const handleLogout = () => {
        setIsAuthenticated(false)
        navigate('/login')
    }

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-brand">
                    <h3>Fleet Manager</h3>
                </div>

                <div className="navbar-actions">
                    <span className="navbar-user">Admin</span>
                    <button onClick={handleLogout} className="btn-secondary btn-small">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
