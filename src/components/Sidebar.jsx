import { useState } from 'react'
import './Sidebar.css'

function Sidebar({ onAddFleet }) {
    const [formData, setFormData] = useState({
        registrationNumber: '',
        category: 'Auto',
        driverName: '',
        availabilityStatus: 'Available'
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validate required fields
        if (!formData.registrationNumber.trim() || !formData.driverName.trim()) {
            alert('Please fill in all required fields')
            return
        }

        onAddFleet(formData)

        // Clear form after submission
        setFormData({
            registrationNumber: '',
            category: 'Auto',
            driverName: '',
            availabilityStatus: 'Available'
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h3>Add New Fleet</h3>
                <p className="text-secondary">Register a new vehicle</p>
            </div>

            <form onSubmit={handleSubmit} className="sidebar-form">
                <div className="form-group">
                    <label htmlFor="registrationNumber">
                        Vehicle Registration Number *
                    </label>
                    <input
                        id="registrationNumber"
                        name="registrationNumber"
                        type="text"
                        placeholder="e.g., ABC-1234"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category *</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="Auto">Auto</option>
                        <option value="Car">Car</option>
                        <option value="Truck">Truck</option>
                        <option value="Bus">Bus</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="driverName">Driver Name *</label>
                    <input
                        id="driverName"
                        name="driverName"
                        type="text"
                        placeholder="Enter driver name"
                        value={formData.driverName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="availabilityStatus">Availability Status *</label>
                    <select
                        id="availabilityStatus"
                        name="availabilityStatus"
                        value={formData.availabilityStatus}
                        onChange={handleChange}
                        required
                    >
                        <option value="Available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                    </select>
                </div>

                <button type="submit" className="btn-primary">
                    Add Fleet
                </button>
            </form>
        </aside>
    )
}

export default Sidebar
