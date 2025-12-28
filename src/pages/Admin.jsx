import { useState, useCallback } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import FleetCard from '../components/FleetCard'
import './Admin.css'

function Admin({ setIsAuthenticated }) {
    const [fleets, setFleets] = useState([])

    // Add new fleet - useCallback to prevent unnecessary re-renders
    const handleAddFleet = useCallback((newFleet) => {
        const fleet = {
            id: Date.now(),
            ...newFleet
        }
        setFleets(prev => [...prev, fleet])
    }, [])

    // Update driver name - useCallback for performance
    const handleUpdateDriver = useCallback((id, newDriverName) => {
        if (!newDriverName || newDriverName.trim() === '') {
            return // Ignore empty or whitespace-only names
        }

        setFleets(prev => prev.map(fleet =>
            fleet.id === id
                ? { ...fleet, driverName: newDriverName }
                : fleet
        ))
    }, [])

    // Delete fleet
    const handleDeleteFleet = useCallback((id) => {
        if (window.confirm('Are you sure you want to delete this vehicle?')) {
            setFleets(prev => prev.filter(fleet => fleet.id !== id))
        }
    }, [])

    return (
        <div className="admin-container">
            <Navbar setIsAuthenticated={setIsAuthenticated} />

            <div className="admin-layout">
                <Sidebar onAddFleet={handleAddFleet} />

                <main className="admin-main">
                    <div className="admin-header">
                        <h2>Fleet Management Dashboard</h2>
                        <p className="text-secondary">
                            {fleets.length} {fleets.length === 1 ? 'vehicle' : 'vehicles'} in fleet
                        </p>
                    </div>

                    {fleets.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">🚗</div>
                            <h3>No Vehicles Yet</h3>
                            <p className="text-secondary">Add your first vehicle using the form on the left</p>
                        </div>
                    ) : (
                        <div className="fleet-grid">
                            {fleets.map(fleet => (
                                <FleetCard
                                    key={fleet.id}
                                    fleet={fleet}
                                    onUpdateDriver={handleUpdateDriver}
                                    onDelete={handleDeleteFleet}
                                />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}

export default Admin
