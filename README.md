# Multi-Step User Registration Form Using useReducer

A beautiful, modern multi-step registration form built with React and the `useReducer` hook for efficient state management.

## 🎯 Problem Statement

This project demonstrates understanding of:
- **Why `useReducer` is needed**: For managing complex state with multiple related values
- **How state, actions, and reducers work together**: Clear separation of concerns
- **How structured state management improves reliability and maintainability**

## ✨ Features

### 1. Application Behavior

**Step 1: Personal Details**
- Name input field
- Email input field

**Step 2: Account Details**
- Username input field
- Password input field

**Step 3: Review & Submit**
- Display all entered values
- Provide a Submit button

### 2. State Management Rules

✅ All form state is managed using `useReducer`  
✅ No multiple `useState` hooks for form fields  
✅ The reducer manages:
- Form values
- Current step
- Submission state (e.g., `isSubmitted`)

### 3. Actions Supported

The reducer handles the following actions:
- `UPDATE_FIELD` - Update individual form fields
- `NEXT_STEP` - Navigate to the next step
- `PREVIOUS_STEP` - Navigate to the previous step
- `SUBMIT_FORM` - Submit the registration
- `RESET_FORM` - Reset to initial state

### 4. UI Interaction Flow

```
User Input
    ↓
dispatch(action)
    ↓
reducer(state, action)
    ↓
updated state
    ↓
UI re-renders
```

## 🛠️ Technical Implementation

### Reducer Function (Pure & Predictable)

```javascript
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
        // ... other cases
    }
}
```

**Key Characteristics:**
- ✅ Pure function (no side effects)
- ✅ Predictable (same input = same output)
- ✅ Free of side effects
- ✅ Uses functional components only
- ✅ No external libraries (FormKit, Redux, etc.)

## 🎨 Design Features

- **Modern Dark Theme** with glassmorphism effects
- **Vibrant Gradient Accents** (purple, pink, blue)
- **Smooth Animations** and micro-interactions
- **Progress Indicator** showing current step
- **Form Validation** with error messages
- **Responsive Design** for all screen sizes
- **Premium UI/UX** with attention to detail

## 📋 Validation Rules

- **Name**: Minimum 2 characters
- **Email**: Valid email format (regex validation)
- **Username**: Minimum 3 characters
- **Password**: Minimum 6 characters

## 🚀 How to Run

1. **Open the project**:
   ```bash
   cd c:\Users\Administrator\masai\registration-form
   ```

2. **Open `index.html` in a browser**:
   - Double-click the file, or
   - Use a local server (recommended):
     ```bash
     npx serve
     ```

3. **Start using the form**:
   - Fill in your personal details
   - Create account credentials
   - Review and submit

## 📁 Project Structure

```
registration-form/
├── index.html          # Main HTML file with React CDN
├── styles.css          # Complete styling with animations
├── app.js              # React application with useReducer
└── README.md           # This file
```

## 🎓 Learning Objectives

This project demonstrates:

1. **Understanding of useReducer**:
   - When and why to use it over useState
   - How reducers work with actions
   - State management patterns

2. **React Best Practices**:
   - Component composition
   - Props drilling management
   - Controlled components

3. **Form Handling**:
   - Multi-step forms
   - Validation strategies
   - Error handling

4. **Modern Web Design**:
   - CSS custom properties
   - Animations and transitions
   - Responsive layouts

## 🎯 Bonus Features (Optional)

- ✅ **Validation Errors**: Using `useReducer` for error state
- ✅ **Next Button Disabled**: Until required fields are filled
- ✅ **Progress Indicator**: Visual step tracking (Step 1 → Step 2 → Step 3)

## 📝 Submission Guidelines

- ✅ GitHub repository link ready
- ✅ Project structure is clean and readable
- ✅ Code is well-commented and organized

## 🔍 Code Highlights

### State Structure
```javascript
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
```

### Dispatch Example
```javascript
dispatch({ 
    type: ACTIONS.UPDATE_FIELD, 
    field: 'name', 
    value: 'John Doe' 
});
```

### Validation
```javascript
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
```

## 🌟 Why This Implementation Stands Out

1. **Pure Reducer**: No side effects, completely predictable
2. **Comprehensive Validation**: Real-time error feedback
3. **Beautiful UI**: Premium design that wows users
4. **Smooth Animations**: Engaging user experience
5. **Accessibility**: Proper labels, semantic HTML
6. **Responsive**: Works on all devices
7. **Clean Code**: Well-organized and maintainable

## 📚 Technologies Used

- **React 18** (via CDN)
- **Babel Standalone** (for JSX transformation)
- **Vanilla CSS** (no frameworks)
- **Google Fonts** (Inter)

## 🎉 Result

A fully functional, beautiful multi-step registration form that demonstrates mastery of:
- React hooks (`useReducer`, `useState`)
- State management patterns
- Form validation
- Modern web design
- User experience principles

---

**Built with ❤️ using React and useReducer**
