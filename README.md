# TechHub - Responsive Tech Homepage

A modern, responsive tech homepage built with ReactJS and Tailwind CSS, featuring smooth animations, event displays, and interactive components.

## 🚀 Features

### Core Requirements ✅
- **Navigation Bar**: Logo with dropdown menu containing various content
- **Hero Section**: Engaging center section with call-to-action
- **Events Section**: Displays 2-3 events with smooth scrolling and barrel navigation
- **Footer**: Comprehensive footer with links and contact information
- **Responsive Design**: Optimized for both desktop and mobile views

### Additional Features ✨
- **Smooth Animations**: Custom CSS animations and transitions
- **Event Modal**: Click on events to view detailed information
- **Interactive Navigation**: Dropdown menu with smooth transitions
- **Modern UI/UX**: Beautiful gradient backgrounds and hover effects
- **Accessibility**: Keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Frontend**: ReactJS 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Custom CSS animations with Tailwind
- **Icons**: Heroicons (SVG)

## 📱 Responsive Features

- Mobile-first design approach
- Collapsible mobile navigation menu
- Responsive grid layouts
- Touch-friendly event carousel
- Optimized typography for all screen sizes

## 🎯 Event Features

### Hardcoded Events (as per requirements)
1. **TechSprint 2025** - 24-hour hackathon focusing on AI and web development
2. **AI & Machine Learning Summit** - Conference on AI advancements
3. **Web Development Workshop** - Hands-on workshop on modern web technologies

### Interactive Elements
- Smooth horizontal scrolling between events
- Navigation arrows for easy browsing
- Event indicators showing current position
- Click to open detailed event modal
- Barrel scrolling with smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tech-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with dropdown menu
│   ├── Hero.jsx            # Hero section with call-to-action
│   ├── Events.jsx          # Events display with carousel
│   ├── EventModal.jsx      # Event details modal
│   └── Footer.jsx          # Footer with links and contact
├── App.jsx                 # Main application component
├── main.jsx               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary colors: Blue variants
- Tech colors: Custom tech-themed colors
- Semantic colors: Success, warning, error states

### Animations
Custom animations are defined in the Tailwind config:
- `fade-in`: Smooth opacity transitions
- `slide-up`: Upward slide animations
- `bounce-in`: Bouncy entrance effects
- `scale-in`: Scale-based animations

## 🌟 Key Features Explained

### 1. Navigation Bar
- Sticky positioning with smooth shadow effects
- Responsive dropdown menu with smooth transitions
- Mobile hamburger menu with slide-down animation
- Logo with gradient background

### 2. Hero Section
- Large, engaging headline with gradient text
- Call-to-action buttons with hover effects
- Floating animated elements
- Responsive typography scaling

### 3. Events Section
- Horizontal scrolling carousel with snap points
- Navigation arrows for easy browsing
- Event indicators showing current position
- Smooth transitions between events
- Click to open detailed modal

### 4. Event Modal
- Full-screen overlay with backdrop
- Detailed event information display
- Action buttons for registration and calendar
- Keyboard navigation support (ESC to close)
- Smooth entrance and exit animations

### 5. Footer
- Multi-column responsive layout
- Social media links with hover effects
- Contact information with icons
- Quick links for easy navigation

## 🔧 Development Notes

### State Management
- Uses React hooks for local state management
- Modal state controlled by App component
- Event data hardcoded as specified in requirements

### Performance Optimizations
- Lazy loading of components
- Optimized animations with CSS transforms
- Efficient event handling with proper cleanup

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly content
- Proper ARIA labels and roles

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

The project can be deployed to any static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

### Recommended Hosting Services
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact:
- Email: info@techhub.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ using ReactJS and Tailwind CSS**
