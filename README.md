# Fleet Management React Application

A modern, minimal fleet management application built with React, focusing on fundamentals and performance optimization.

## 🚀 Features

- **Authentication System**: Login page with credential validation
- **Protected Routing**: Admin dashboard accessible only after login
- **Fleet CRUD Operations**: Add, update driver names, and delete vehicles
- **Performance Optimized**: Uses React.memo and useCallback for efficient rendering
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Premium dark theme with smooth animations

## 📋 Requirements Met

### React Fundamentals
- ✅ `useState` - Managing form inputs and fleet data
- ✅ `useRef` - Focus management on login page
- ✅ `useEffect` - Side effects handling
- ✅ React Router - Navigation and protected routes

### Performance Optimization
- ✅ `React.memo` - FleetCard component memoization
- ✅ `useCallback` - Optimized event handlers in Admin component

### Application Structure
- ✅ Login page (`/login`) - Public route
- ✅ Admin dashboard (`/admin`) - Protected route
- ✅ Navbar with logout functionality
- ✅ Sidebar with "Add Fleet" form
- ✅ Main content area with fleet cards (3 per row grid)

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **React Router 6** - Client-side routing
- **Vite 5** - Build tool and dev server
- **Vanilla CSS** - Styling (no external CSS frameworks)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔐 Demo Credentials

- **Email**: admin@gmail.com
- **Password**: admin1234

## 🎯 Usage

1. **Login**: Use the demo credentials to access the admin dashboard
2. **Add Fleet**: Fill out the form in the sidebar to add new vehicles
3. **Update Driver**: Click "Update Driver" on any fleet card to modify the driver name
4. **Delete Vehicle**: Click "Delete" to remove a vehicle (with confirmation)

## 📱 Fleet Card Features

Each fleet card displays:
- Vehicle icon (based on category)
- Registration number
- Category (Auto/Car/Truck/Bus)
- Driver name (editable)
- Availability status (Available/Unavailable)

## 🎨 Design Highlights

- Premium dark theme with gradient accents
- Smooth micro-animations and transitions
- Glassmorphism effects
- Custom scrollbar styling
- Responsive grid layout
- Status badges with color coding

## 📁 Project Structure

```
fleet-management-react/
├── src/
│   ├── components/
│   │   ├── FleetCard.jsx       # Memoized fleet card component
│   │   ├── FleetCard.css
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Navbar.css
│   │   ├── Sidebar.jsx         # Add fleet form
│   │   ├── Sidebar.css
│   │   └── ProtectedRoute.jsx  # Route guard
│   ├── pages/
│   │   ├── Login.jsx           # Login page
│   │   ├── Login.css
│   │   ├── Admin.jsx           # Admin dashboard
│   │   └── Admin.css
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & design system
├── index.html
├── package.json
└── vite.config.js
```

## ✨ Key Implementation Details

### State Management
- No external state management libraries used
- Local state with `useState` for form inputs and fleet data
- Authentication state lifted to App component

### Performance Optimizations
- `React.memo` wraps FleetCard to prevent unnecessary re-renders
- `useCallback` used for event handlers to maintain referential equality
- Controlled inputs for form management

### Validation & Edge Cases
- Required field validation on forms
- Empty/whitespace-only driver name prevention
- Confirmation dialog before deletion
- Error messages for invalid login credentials

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT

---

Built with ❤️ using React fundamentals
