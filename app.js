const { useReducer, useState } = React;

// Initial state for the form
const initialState = {
    currentStep: 1,
    formData: {
        name: '',
        email: '',
        username: '',
        password: ''
    },
    isSubmitted: false
};

// Action types
const ACTIONS = {
    UPDATE_FIELD: 'UPDATE_FIELD',
    NEXT_STEP: 'NEXT_STEP',
    PREVIOUS_STEP: 'PREVIOUS_STEP',
    SUBMIT_FORM: 'SUBMIT_FORM',
    RESET_FORM: 'RESET_FORM'
};

// Reducer function - Pure, predictable, and free of side effects
function formReducer(state, action) {
    switch (action.type) {
        case ACTIONS.UPDATE_FIELD:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.field]: action.value
                }
            };
        
        case ACTIONS.NEXT_STEP:
            return {
                ...state,
                currentStep: Math.min(state.currentStep + 1, 3)
            };
        
        case ACTIONS.PREVIOUS_STEP:
            return {
                ...state,
                currentStep: Math.max(state.currentStep - 1, 1)
            };
        
        case ACTIONS.SUBMIT_FORM:
            return {
                ...state,
                isSubmitted: true
            };
        
        case ACTIONS.RESET_FORM:
            return initialState;
        
        default:
            return state;
    }
}

// Validation functions
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 6;
};

const validateUsername = (username) => {
    return username.length >= 3;
};

const validateName = (name) => {
    return name.trim().length >= 2;
};

// Progress Indicator Component
function ProgressIndicator({ currentStep }) {
    const steps = [
        { number: 1, label: 'Personal Details' },
        { number: 2, label: 'Account Details' },
        { number: 3, label: 'Review & Submit' }
    ];
    
    const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;
    
    return (
        <div className="progress-container">
            <div className="progress-steps">
                <div className="progress-line">
                    <div 
                        className="progress-line-fill" 
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
                {steps.map((step) => (
                    <div 
                        key={step.number}
                        className={`progress-step ${
                            currentStep === step.number ? 'active' : ''
                        } ${currentStep > step.number ? 'completed' : ''}`}
                    >
                        <div className="step-circle">
                            {currentStep > step.number ? '✓' : step.number}
                        </div>
                        <span className="step-label">{step.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Step 1: Personal Details Component
function PersonalDetailsStep({ formData, dispatch, errors }) {
    const handleChange = (field, value) => {
        dispatch({ type: ACTIONS.UPDATE_FIELD, field, value });
    };
    
    return (
        <div className="form-step">
            <h2 className="step-title">Personal Details</h2>
            <p className="step-description">Let's start with your basic information</p>
            
            <div className="form-group">
                <label htmlFor="name" className="form-label required">Full Name</label>
                <input
                    type="text"
                    id="name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
                {errors.name && (
                    <div className="error-message">⚠ {errors.name}</div>
                )}
            </div>
            
            <div className="form-group">
                <label htmlFor="email" className="form-label required">Email Address</label>
                <input
                    type="email"
                    id="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && (
                    <div className="error-message">⚠ {errors.email}</div>
                )}
            </div>
        </div>
    );
}

// Step 2: Account Details Component
function AccountDetailsStep({ formData, dispatch, errors }) {
    const handleChange = (field, value) => {
        dispatch({ type: ACTIONS.UPDATE_FIELD, field, value });
    };
    
    return (
        <div className="form-step">
            <h2 className="step-title">Account Details</h2>
            <p className="step-description">Create your account credentials</p>
            
            <div className="form-group">
                <label htmlFor="username" className="form-label required">Username</label>
                <input
                    type="text"
                    id="username"
                    className={`form-input ${errors.username ? 'error' : ''}`}
                    placeholder="Choose a unique username"
                    value={formData.username}
                    onChange={(e) => handleChange('username', e.target.value)}
                />
                {errors.username && (
                    <div className="error-message">⚠ {errors.username}</div>
                )}
            </div>
            
            <div className="form-group">
                <label htmlFor="password" className="form-label required">Password</label>
                <input
                    type="password"
                    id="password"
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Create a strong password (min. 6 characters)"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                />
                {errors.password && (
                    <div className="error-message">⚠ {errors.password}</div>
                )}
            </div>
        </div>
    );
}

// Step 3: Review & Submit Component
function ReviewSubmitStep({ formData }) {
    return (
        <div className="form-step">
            <h2 className="step-title">Review & Submit</h2>
            <p className="step-description">Please review your information before submitting</p>
            
            <div className="review-section">
                <h3>📋 Personal Information</h3>
                <div className="review-item">
                    <span className="review-label">Full Name</span>
                    <span className="review-value">{formData.name}</span>
                </div>
                <div className="review-item">
                    <span className="review-label">Email Address</span>
                    <span className="review-value">{formData.email}</span>
                </div>
            </div>
            
            <div className="review-section">
                <h3>🔐 Account Information</h3>
                <div className="review-item">
                    <span className="review-label">Username</span>
                    <span className="review-value">{formData.username}</span>
                </div>
                <div className="review-item">
                    <span className="review-label">Password</span>
                    <span className="review-value">{'•'.repeat(formData.password.length)}</span>
                </div>
            </div>
        </div>
    );
}

// Success Component
function SuccessMessage({ formData, onReset }) {
    return (
        <div className="success-container">
            <div className="success-icon">✓</div>
            <h2>Registration Successful!</h2>
            <p>Your account has been created successfully. Welcome aboard!</p>
            
            <div className="success-data">
                <h3>Submitted Data:</h3>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
            
            <div className="form-actions">
                <button className="btn btn-primary" onClick={onReset}>
                    Register Another User
                </button>
            </div>
        </div>
    );
}

// Main Registration Form Component
function RegistrationForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [errors, setErrors] = useState({});
    
    const { currentStep, formData, isSubmitted } = state;
    
    // Validate current step
    const validateCurrentStep = () => {
        const newErrors = {};
        
        if (currentStep === 1) {
            if (!validateName(formData.name)) {
                newErrors.name = 'Name must be at least 2 characters long';
            }
            if (!validateEmail(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }
        
        if (currentStep === 2) {
            if (!validateUsername(formData.username)) {
                newErrors.username = 'Username must be at least 3 characters long';
            }
            if (!validatePassword(formData.password)) {
                newErrors.password = 'Password must be at least 6 characters long';
            }
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    // Handle next step
    const handleNext = () => {
        if (validateCurrentStep()) {
            dispatch({ type: ACTIONS.NEXT_STEP });
        }
    };
    
    // Handle previous step
    const handlePrevious = () => {
        setErrors({});
        dispatch({ type: ACTIONS.PREVIOUS_STEP });
    };
    
    // Handle form submission
    const handleSubmit = () => {
        console.log('Form Submitted:', formData);
        dispatch({ type: ACTIONS.SUBMIT_FORM });
    };
    
    // Handle reset
    const handleReset = () => {
        setErrors({});
        dispatch({ type: ACTIONS.RESET_FORM });
    };
    
    // If form is submitted, show success message
    if (isSubmitted) {
        return (
            <div className="registration-container">
                <SuccessMessage formData={formData} onReset={handleReset} />
            </div>
        );
    }
    
    return (
        <div className="registration-container">
            <div className="form-header">
                <h1>Create Your Account</h1>
                <p>Join us today and start your journey</p>
            </div>
            
            <ProgressIndicator currentStep={currentStep} />
            
            <div className="form-content">
                {currentStep === 1 && (
                    <PersonalDetailsStep 
                        formData={formData} 
                        dispatch={dispatch}
                        errors={errors}
                    />
                )}
                
                {currentStep === 2 && (
                    <AccountDetailsStep 
                        formData={formData} 
                        dispatch={dispatch}
                        errors={errors}
                    />
                )}
                
                {currentStep === 3 && (
                    <ReviewSubmitStep formData={formData} />
                )}
                
                <div className="form-actions">
                    {currentStep > 1 && (
                        <button 
                            className="btn btn-secondary" 
                            onClick={handlePrevious}
                        >
                            ← Previous
                        </button>
                    )}
                    
                    {currentStep < 3 ? (
                        <button 
                            className="btn btn-primary" 
                            onClick={handleNext}
                        >
                            Next →
                        </button>
                    ) : (
                        <button 
                            className="btn btn-submit" 
                            onClick={handleSubmit}
                        >
                            Submit Registration ✓
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RegistrationForm />);
