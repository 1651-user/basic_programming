import { useState, memo } from 'react'
import './FleetCard.css'

// Vehicle icons mapping
const vehicleIcons = {
    Auto: '🛺',
    Car: '🚗',
    Truck: '🚚',
    Bus: '🚌'
}

// Memoized component to prevent unnecessary re-renders
const FleetCard = memo(({ fleet, onUpdateDriver, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [driverName, setDriverName] = useState(fleet.driverName)

    const handleUpdate = () => {
        if (driverName.trim() === '') {
            alert('Driver name cannot be empty')
            setDriverName(fleet.driverName) // Reset to original
            setIsEditing(false)
            return
        }

        if (driverName.trim() !== fleet.driverName) {
            onUpdateDriver(fleet.id, driverName.trim())
        }
        setIsEditing(false)
    }

    const handleCancel = () => {
        setDriverName(fleet.driverName)
        setIsEditing(false)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUpdate()
        } else if (e.key === 'Escape') {
            handleCancel()
        }
    }

    return (
        <div className="fleet-card card">
            <div className="fleet-icon">
                {vehicleIcons[fleet.category] || '🚗'}
            </div>

            <div className="fleet-info">
                <div className="fleet-reg">
                    <span className="label">Registration</span>
                    <span className="value">{fleet.registrationNumber}</span>
                </div>

                <div className="fleet-category">
                    <span className="label">Category</span>
                    <span className="value">{fleet.category}</span>
                </div>

                <div className="fleet-driver">
                    <span className="label">Driver</span>
                    {isEditing ? (
                        <div className="driver-edit">
                            <input
                                type="text"
                                value={driverName}
                                onChange={(e) => setDriverName(e.target.value)}
                                onKeyDown={handleKeyPress}
                                autoFocus
                                className="driver-input"
                            />
                            <div className="driver-actions">
                                <button
                                    onClick={handleUpdate}
                                    className="btn-primary btn-small"
                                    title="Save"
                                >
                                    ✓
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="btn-secondary btn-small"
                                    title="Cancel"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    ) : (
                        <span className="value">{fleet.driverName}</span>
                    )}
                </div>

                <div className="fleet-status">
                    <span className="label">Status</span>
                    <span className={`status-badge ${fleet.availabilityStatus.toLowerCase()}`}>
                        {fleet.availabilityStatus}
                    </span>
                </div>
            </div>

            <div className="fleet-actions">
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="btn-secondary btn-small"
                        title="Update Driver"
                    >
                        Update Driver
                    </button>
                )}
                <button
                    onClick={() => onDelete(fleet.id)}
                    className="btn-danger btn-small"
                    title="Delete Vehicle"
                >
                    Delete
                </button>
            </div>
        </div>
    )
})

FleetCard.displayName = 'FleetCard'

export default FleetCard
