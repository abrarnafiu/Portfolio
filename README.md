# Abrar Nafiu - Portfolio Website

A modern, interactive portfolio website showcasing my skills, projects, and experience as a Computer Science student at Northeastern University. Built with React, TypeScript, and Chakra UI, featuring smooth animations, responsive design, and 3D elements.

## 🌟 Features

### Interactive Design
- **Dynamic Color System**: Mouse-responsive color gradients that change based on cursor position
- **3D Elements**: Interactive 3D sphere with Three.js integration
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive Layout**: Fully responsive design that works on all devices

### Portfolio Sections
- **Hero Section**: Eye-catching introduction with animated 3D sphere and dynamic gradients
- **About Me**: Educational background, coursework, and language skills
- **Technical Skills**: Comprehensive showcase of programming languages and technologies
- **Featured Projects**: Detailed project showcase with individual project pages
- **Contact Form**: Interactive contact form with social media links

### Project Showcase
- **AI-Powered Watch Search Engine**: Full-stack application with OpenAI integration
- **Nurture Nest**: Cross-platform mobile app for pregnancy mental health
- **Monte Carlo Simulation**: Financial risk modeling tool with data visualization

## 🚀 Technologies Used

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Chakra UI** - Modern component library for consistent design
- **Framer Motion** - Advanced animation library for smooth transitions
- **React Router DOM** - Client-side routing for single-page application
- **React Icons** - Comprehensive icon library

### 3D Graphics
- **Three.js** - 3D graphics library for WebGL
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **TypeScript** - Static type checking

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.tsx        # About section with education info
│   ├── Contact.tsx      # Contact form and social links
│   ├── Hero.tsx         # Landing section with 3D elements
│   ├── Navbar.tsx       # Navigation component
│   ├── ProjectDetail.tsx # Individual project detail pages
│   ├── Projects.tsx     # Project showcase grid
│   └── Skills.tsx       # Technical skills and interests
├── assets/              # Static assets
│   ├── northeastern-banner-N-removebg-preview.png
│   ├── nurtureNest.jpg
│   ├── PANG.png
│   └── watchEngine.png
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── theme.ts            # Chakra UI theme configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/abrarnafiu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Theme Configuration
The portfolio uses a custom Chakra UI theme defined in `src/theme.ts`. You can customize:

- **Colors**: Brand and accent color palettes
- **Fonts**: Typography settings
- **Components**: Button styles, heading styles, etc.

### Adding New Projects
To add a new project to the portfolio:

1. Add project details to the `projects` array in `src/components/Projects.tsx`
2. Add detailed project information to the `projectDetails` object in `src/components/ProjectDetail.tsx`
3. Add project images to the `src/assets/` directory

### Modifying Content
- **Personal Information**: Update the Hero component with your details
- **About Section**: Modify education and background information
- **Skills**: Add or remove technical skills and interests
- **Contact**: Update contact information and social media links

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy and enjoy!

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full experience with 3D elements and animations
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Streamlined design with essential features

## 🎯 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Images and components load as needed
- **Optimized Assets**: Compressed images and optimized bundles
- **Fast Refresh**: Hot module replacement for development

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

**Abrar Nafiu**
- 📧 Email: abrarnafiu@abrarnafiu.com
- 📱 Phone: (917) 293-6206
- 💼 LinkedIn: [linkedin.com/in/abrar-nafiu](https://www.linkedin.com/in/abrar-nafiu/)
- 🐙 GitHub: [github.com/abrarnafiu](https://github.com/abrarnafiu)
- 🌐 Website: [abrarnafiu.com](https://abrarnafiu.com)

---

*Built with ❤️ using React, TypeScript, and modern web technologies*
