export interface ProjectMetric {
  value: string
  label: string
}

export interface ProjectData {
  id: string
  title: string
  summary: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  metrics?: ProjectMetric[]
  achievements?: string[]
  challenges?: string[]
  solutions?: string[]
  role?: string
  duration?: string
}

// Projects are imported with images in components; we export IDs and metadata
export const projectList: Omit<ProjectData, 'image'>[] = [
  {
    id: 'watch-engine',
    title: 'AI-Powered Watch Search Engine',
    summary: 'Semantic search for luxury watches using natural language. Vector pipeline with Supabase + OpenAI.',
    description: 'A full-stack application that enables users to search luxury watches using natural language queries, powered by OpenAI\'s GPT model and Supabase vector database for semantic search.',
    longDescription: `The AI-Powered Watch Search Engine is a sophisticated application that revolutionizes how users discover luxury timepieces. By leveraging cutting-edge AI technologies, the platform understands natural language queries and returns highly relevant watch recommendations. The project addresses a common challenge in the luxury watch market: finding the perfect timepiece based on specific preferences, budget constraints, and style requirements.`,
    technologies: ['TypeScript', 'Node.js', 'Supabase', 'OpenAI API', 'Watch Database API'],
    githubUrl: 'https://github.com/abrarnafiu',
    liveUrl: 'https://watch-engine.onrender.com/',
    metrics: [
      { value: '<500ms', label: 'Search latency' },
      { value: '95%', label: 'Relevance score' },
      { value: '1k+', label: 'Watch catalog' },
    ],
    achievements: [
      'Engineered a vector-based search pipeline integrating Supabase vector database and OpenAI',
      'Ingested thousands of watches from the Watch Database API',
      'Populated Supabase with both relational data and vector embeddings',
      'Achieved 95% search relevance score in user testing',
      'Reduced search time from 3 seconds to under 500ms',
    ],
    challenges: [
      'Integrating multiple data sources with different schemas',
      'Optimizing vector search performance for large datasets',
      'Creating a responsive UI that works well on all devices',
    ],
    solutions: [
      'Developed a custom ETL pipeline to normalize data from various sources',
      'Implemented caching and indexing strategies to improve search performance',
      'Used CSS Grid and Flexbox for a responsive design that adapts to different screen sizes',
    ],
    role: 'Full Stack Developer',
    duration: '3 months',
  },
  {
    id: 'nurture-nest',
    title: 'Nurture Nest',
    summary: 'Pregnancy mental health app for the Innovators of Global Health Club. Mood tracking, journaling, support.',
    description: 'A cross-platform mobile app developed for the Innovators of Global Health Club, focusing on pregnancy mental health support.',
    longDescription: `Nurture Nest is a comprehensive mental health application designed specifically for expectant mothers in Ghana. The app provides tools, resources, and support to help women navigate the emotional challenges of pregnancy and early motherhood. The project was initiated in response to the growing recognition of perinatal mental health issues.`,
    technologies: ['React Native', 'Expo', 'AsyncStorage', 'TypeScript'],
    githubUrl: 'https://github.com/abrarnafiu',
    metrics: [
      { value: '95%', label: 'Crash-free' },
      { value: '40%', label: 'Engagement lift' },
      { value: '25%', label: 'Faster load' },
    ],
    achievements: [
      'Achieved 95% crash-free user experience',
      'Implemented mood tracking and journaling features',
      'Increased daily user engagement by 40% over three months',
      'Reduced app load times by 25% through AsyncStorage optimization',
    ],
    challenges: [
      'Ensuring data privacy and security for sensitive health information',
      'Creating an intuitive UI for users with varying technical proficiency',
      'Optimizing performance on lower-end devices',
    ],
    solutions: [
      'Implemented end-to-end encryption for all user data',
      'Conducted extensive user testing and incorporated feedback into the design',
      'Optimized image assets and implemented lazy loading to reduce memory usage',
    ],
    role: 'Mobile Developer',
    duration: '6 months',
  },
  {
    id: 'monte-carlo-simulation',
    title: 'Monte Carlo Simulation for Quantitative Analysis',
    summary: 'Financial risk modeling with interactive visualization. Full-stack Python + React.',
    description: 'A financial risk modeling tool using Monte Carlo simulation, featuring interactive data visualization and real-time results exploration.',
    longDescription: `The Monte Carlo Simulation tool is a sophisticated financial modeling application that helps analysts and investors assess risk and make informed decisions. By running thousands of simulated scenarios, the tool provides insights into potential outcomes and their probabilities.`,
    technologies: ['Python', 'Flask', 'React', 'TypeScript', 'Yahoo Finance API'],
    githubUrl: 'https://github.com/abrarnafiu/PANG',
    metrics: [
      { value: '9%', label: 'Faster simulation' },
      { value: 'Full-stack', label: 'Flask + React' },
    ],
    achievements: [
      'Developed and optimized Monte Carlo simulation using Python',
      'Built full-stack web application with Flask backend and React frontend',
      'Reduced simulation time by 9% and implemented responsive design',
    ],
    challenges: [
      'Optimizing performance for computationally intensive simulations',
      'Creating intuitive visualizations for complex financial data',
    ],
    solutions: [
      'Conducted extensive backtesting against historical market data to validate the model',
    ],
    role: 'Quantitative Developer',
    duration: '4 months',
  },
]
