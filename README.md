# Luxeon React - Gen Z Clothing Brand

A modern React.js application for the Luxeon clothing brand, converted from the original HTML/CSS/JavaScript project.

## Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Dynamic Collections**: Automatically loads collection data from JSON files
- **Smooth Navigation**: React Router for seamless page transitions
- **Interactive Components**: Mobile menu, forms, and dynamic content loading

## Pages

- **Home**: Hero section, featured collections, about, features, testimonials, Instagram feed, and contact
- **About**: Team member showcase with social links
- **Collections**: Full collection gallery with dynamic loading
- **Login**: User authentication interface

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with mobile menu
│   ├── Footer.jsx          # Site footer with links and social media
│   └── CollectionsGrid.jsx # Reusable collections display component
├── pages/
│   ├── Home.jsx           # Main landing page
│   ├── About.jsx          # Team showcase page
│   ├── Collections.jsx    # Collections gallery page
│   └── Login.jsx         # Login page
├── App.jsx               # Main app component with routing
├── main.jsx             # App entry point
└── App.css              # Main styles (converted from original CSS)

public/
├── Collections/          # Collection data and images
├── Photos/              # Team photos and assets
└── index.html           # HTML template with meta tags
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Technologies Used

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with CSS variables and modern features
- **Font Awesome** - Icons for social media links
- **Google Fonts** - Inter and Montserrat fonts

## Key Features Converted

### From Original HTML/CSS/JS:
- ✅ Responsive header with mobile menu toggle
- ✅ Dynamic collection loading from JSON files
- ✅ Smooth scrolling navigation
- ✅ Form handling with validation
- ✅ Newsletter subscription
- ✅ Contact form
- ✅ Team showcase with social links
- ✅ Instagram feed integration
- ✅ Testimonials section
- ✅ All original styling and animations

### React Enhancements:
- ✅ Component-based architecture
- ✅ State management with hooks
- ✅ Client-side routing
- ✅ Dynamic data loading
- ✅ Reusable components
- ✅ Modern JavaScript (ES6+)

## Collections Data

Collections are automatically loaded from `/public/Collections/` directory. Each collection folder should contain:
- `info.json` - Collection metadata (title, description, price range)
- `Cover.jpg` - Collection cover image
- `Products/` - Product images and data

## Development

The project uses Vite for development, which provides:
- Fast hot module replacement
- Modern ES modules
- Optimized builds
- Built-in TypeScript support (if needed)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Luxeon. All rights reserved.