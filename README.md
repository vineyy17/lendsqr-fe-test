# Lendsqr Frontend Assessment

This project was developed as part of the Lendsqr frontend assessment, highlighting a responsive user interface with key features for an engaging user experience. The main objective is to build a responsive and user-friendly dashboard UI for managing user data, precisely aligned with the provided [Figma Link](https://www.google.com/url?q=https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend&sa=D&source=editors&ust=1730377588689660&usg=AOvVaw200PHt7RrGOa-p3VjsQAq7).

## Features

- User Authentication: Secure login functionality with validation
- User Dashboard: Displays key metrics and insights for each user
- State Management: State handling is organized with Zustand
- Data Fetching: API services to retrieve and display data in real-time
- Form Handling: Comprehensive form management with validation
- Loading Indicators: Skeleton loaders and spinners to enhance loading experience
- Interactive UI Elements: Icons, modals, and custom hooks for a polished user experience

## Project Structure

The project is organized with clear directory structure, facilitating easy navigation and development:

```
root
├── src
│   ├── assets               # Icons and images
│   │   ├── icons
│   │   └── images
│   ├── components           # Reusable UI components
│   ├── context              # Context providers for global state
│   ├── data                 # Static data files
│   ├── fonts                # Custom fonts
│   ├── hooks                # Custom hooks
│   ├── pages                # Application pages and routing
│   ├── services             # API services and data fetching logic
│   ├── store                # Zustand state management
│   ├── styles               # Global and component-specific styles
│   ├── types                # TypeScript types and interfaces
│   ├── utils                # Utility functions
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Entry point
├── tests                    # Unit and integration tests
│   ├── components
│   ├── pages
│   ├── AllProviders.tsx     # Wrapper for test providers
│   ├── setup.ts             # Test setup and configuration
│   └── utils.tsx            # Test utilities
└── package.json             # Project metadata and dependencies
```

## Pages Overview

- **Login Page**: A secure login page that validates user credentials and handles authentication
- **Dashboard**: Displays a summary of user activity and key metrics for a quick overview
- **User Details**: Provides tools for viewing, searching, and managing users

## Getting Started

### Prerequisites

- Node.js: Ensure Node.js is installed
- Vite: Development server is powered by Vite

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/vineyy17/lendsqr-fe-test
cd lendsqr-frontend-assessment
npm install
```

### Running the Application

To start the development server:

```bash
npm run dev
```

To build the application for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Testing

Run unit and integration tests with Vitest:

```bash
npm run test
```

For interactive testing with a UI:

```bash
npm run test:ui
```

## Links

- [Live Demo](https://lendsqr-fe-test-viney.vercel.app/): Explore the deployed application
- [Documentation](https://tartan-dew-256.notion.site/Lendsqr-Frontend-Engineering-Assessment-Documentation-136d390eaf4d80c19974eecdd5c6622a): Detailed project documentation including link to video walkthrough

## Login Credentials

For demo purposes, use the following login credentials:

- **Username**: lendsqr@outlook.com
- **Password**: lendsqr123

## Technologies Used

- React and TypeScript: Core framework and type-safe coding
- Vite: Development server and bundler
- Zustand: Lightweight state management
- React Query: Data fetching and caching
- React Hook Form & Zod: Form handling and validation
- Vitest: Unit and integration testing
- Sass: Enhanced styling

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the app for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run linting on the codebase
- `npm run test`: Execute test suite
- `npm run test:ui`: Launch interactive testing UI
- `npm run coverage`: Generate test coverage report

## License

This project is licensed under the MIT License.
