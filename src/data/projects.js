// ============================================================
// PROJECTS DATA — Replace these placeholders with your real projects.
// ============================================================

export const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive developer portfolio built with React and Tailwind CSS. Features smooth scrolling, dark theme, and a clean component-based architecture.',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
    category: 'Frontend',
    // TODO: Replace with your actual GitHub repo URL
    github: 'https://github.com/Kore017/portfolio',
    // TODO: Replace with your deployed URL
    liveDemo: '#',
    // TODO: Add a screenshot — place it in src/assets/ and import it, or use a URL
    image: null,
    features: [
      'Responsive design for all devices',
      'Dark theme with accent colors',
      'Smooth scroll navigation',
      'Contact form with validation',
    ],
    placeholder: true,
  },
  {
    id: 2,
    title: 'Task Manager API',
    description:
      'A RESTful API for managing tasks and to-do items, built with Node.js and Express. Includes user authentication, CRUD operations, and MongoDB integration.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    category: 'Backend',
    github: 'https://github.com/Kore017/task-manager-api',
    liveDemo: '',
    image: null,
    features: [
      'JWT-based authentication',
      'Full CRUD operations',
      'Input validation and error handling',
      'MongoDB with Mongoose ODM',
    ],
    placeholder: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A weather application that displays current conditions and forecasts using a public weather API. Features location search, responsive UI, and data visualization.',
    techStack: ['React', 'JavaScript', 'REST APIs', 'CSS'],
    category: 'Frontend',
    github: 'https://github.com/yourusername/weather-dashboard',
    liveDemo: '',
    image: null,
    features: [
      'Real-time weather data',
      'City search with autocomplete',
      'Responsive mobile-first design',
      '5-day forecast display',
    ],
    placeholder: true,
  },
  {
    id: 4,
    title: 'Student Database System',
    description:
      'A command-line application for managing student records, built with Python and MySQL. Supports adding, searching, updating, and deleting student information.',
    techStack: ['Python', 'MySQL', 'SQL'],
    category: 'Backend',
    github: 'https://github.com/yourusername/student-db',
    liveDemo: '',
    image: null,
    features: [
      'CRUD operations on student records',
      'Search and filter functionality',
      'Data validation',
      'MySQL database integration',
    ],
    placeholder: true,
  },
];

export const projectCategories = ['All', 'Frontend', 'Backend'];
