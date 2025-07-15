# Changelog

All notable changes to this project will be documented in this file.

## [0.5.3] - 2024-12-19

### Fixed

- **Complete styling overhaul**: Extracted component styles to `src/styles/components.scss`
- **PrimeReact integration**: Replaced custom components with PrimeReact Card, Button, InputText, InputTextarea
- **Background z-index issues**: Fixed background covering content with proper z-index and opacity
- **Responsive design**: Enhanced mobile responsiveness using PrimeReact's built-in responsive components
- **Theme-driven styling**: Ensured all components use theme colors consistently
- **CSS organization**: Cleaned up global CSS to only include essential styles

### Changed

- **HeroSection**: Now uses PrimeReact Card and Button components
- **BadgeSection**: Updated to use PrimeReact Card components
- **ContactSection**: Replaced with PrimeReact Card, InputText, InputTextarea, and Button
- **Background styling**: Reduced particle count and opacity for better performance
- **Component styling**: All components now use theme-driven glassmorphism effects

### Technical

- **SCSS structure**: Created proper SCSS file for component-specific styles
- **PrimeReact components**: Leveraged built-in responsive design and accessibility
- **Performance**: Optimized background animations and reduced CSS conflicts
- **Maintainability**: Better separation of concerns with styles in dedicated folder

## [0.5.2] - 2024-12-19

### Fixed

- **CSS loading issues**: Fixed PrimeReact CSS imports using `@import` instead of `@use`
- **PrimeReact provider**: Added PrimeReactProvider to layout for proper component rendering
- **Background styling**: Added proper background colors and styling to body and layout
- **Component rendering**: Ensured all components render properly with correct styling

## [0.5.1] - 2024-12-19

### Fixed

- **Netlify build compatibility**: Converted `next.config.ts` to `next.config.js` to fix Netlify deployment
- **Build configuration**: Ensured Next.js config is compatible with Netlify's build environment

## [0.5.0] - 2024-12-19

### Added

- **Mobile-first redesign**: Complete redesign optimized for mobile devices
- **Touch-friendly interactions**: All buttons and interactive elements optimized for touch
- **Mobile navigation**: Hamburger menu for mobile with smooth scrolling navigation
- **Responsive layouts**: Single-column layouts on mobile, multi-column on larger screens
- **Mobile-optimized spacing**: Reduced padding and margins for mobile screens
- **Touch targets**: Minimum 44px touch targets for all interactive elements
- **Mobile form improvements**: iOS zoom prevention and better form UX
- **Mobile lightbox**: Optimized project lightbox for mobile viewing
- **Mobile-safe areas**: Support for device safe areas and notches
- **Mobile performance**: Optimized animations and reduced motion support
- **Mobile meta tags**: Proper viewport and PWA meta tags

### Changed

- **Hero section**: Mobile-first layout with responsive avatar and text sizing
- **Badge section**: Single column on mobile, responsive grid on larger screens
- **Portfolio gallery**: Mobile-optimized cards with touch-friendly interactions
- **Contact section**: Mobile-first form layout with better spacing
- **Navigation**: Fixed navbar with mobile hamburger menu
- **Global CSS**: Mobile-first approach with touch-friendly styles
- **Layout**: Proper mobile viewport and safe area handling

### Technical

- **CSS architecture**: Mobile-first responsive design patterns
- **Touch interactions**: `touch-manipulation` and proper touch event handling
- **Performance**: Optimized for mobile devices with reduced animations
- **Accessibility**: Better focus states and touch targets for mobile

## [0.4.0] - 2024-12-19

### Added

- **Glossier UI**: Enhanced glassmorphism effects throughout the app
- **Advanced shadows**: Sophisticated shadow system with depth
- **Gradient overlays**: Dynamic gradient effects on cards and sections
- **Animated glow effects**: Pulsing glow animations on interactive elements
- **Refined borders**: Subtle border effects with transparency
- **Premium visual experience**: Overall polished and immersive design

### Changed

- **Global CSS**: Complete overhaul with advanced glassmorphism
- **Component styling**: Updated all components with glossy effects
- **Button interactions**: Enhanced hover and active states
- **Card animations**: Improved hover effects and transitions
- **Theme integration**: Better integration with the teal color scheme

## [0.3.0] - 2024-12-19

### Added

- **Image integration**: Added background images and icons to the app
- **Visual enhancements**: Integrated bg1.png, bg2.png, icon1.png, and icon-lg.png
- **Avatar system**: Profile avatar with animated glow effects
- **Background layering**: Multiple background layers with theme overlays
- **Logo integration**: App logo with proper sizing and positioning

### Changed

- **Hero section**: Added avatar and background image integration
- **Project cards**: Background images with gradient overlays
- **Navbar**: Logo integration with proper styling
- **Theme consistency**: Updated to lara-dark-teal for better visual harmony

## [0.2.0] - 2024-12-19

### Added

- **Theme system**: Dynamic theme switching with multiple color schemes
- **Animation system**: Custom hooks for managing animations
- **Component library**: Complete set of reusable components
- **Portfolio gallery**: Interactive project showcase with lightbox
- **Contact form**: Functional contact section with form handling
- **Easter eggs**: Interactive sparkle effects throughout the app
- **Statistics charts**: Animated charts using Chart.js
- **Responsive design**: Mobile-first responsive layouts

### Changed

- **Project structure**: Organized components by feature and type
- **TypeScript interfaces**: Comprehensive type definitions
- **Styling system**: Advanced CSS with glassmorphism effects
- **Performance**: Optimized animations and interactions

## [0.1.0] - 2024-12-19

### Added

- **Initial setup**: Next.js 14 with TypeScript and Tailwind CSS
- **PrimeReact integration**: UI component library with teal theme
- **Basic structure**: App layout with navbar and footer
- **Essential files**: README, CHANGELOG, sitemap, and prettier config
- **Project foundation**: Ready for development and customization
