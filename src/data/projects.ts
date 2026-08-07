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

export const projectList: Omit<ProjectData, 'image'>[] = [
  {
    id: 'watch-engine',
    title: 'AI-Powered Watch Search Engine',
    summary:
      'Semantic search for luxury watches using LLM embeddings and pgvector. Natural-language queries over thousands of records.',
    description:
      'A semantic search system that lets users find luxury watches with natural language, powered by LLM-generated embeddings and vector similarity search.',
    longDescription: `The AI-Powered Watch Search Engine is a full-stack application for discovering luxury timepieces through natural-language queries. It uses LLM-generated embeddings and vector similarity search so results match intent—not just keywords—across a catalog of thousands of watches.`,
    technologies: [
      'TypeScript',
      'Node.js',
      'Supabase',
      'OpenAI API',
      'LLM embeddings',
      'PostgreSQL',
      'pgvector',
      'WatchDB API',
    ],
    githubUrl: 'https://github.com/abrarnafiu',
    liveUrl: 'https://watch-engine.onrender.com/',
    metrics: [
      { value: 'Semantic', label: 'NL search' },
      { value: 'pgvector', label: 'Retrieval' },
      { value: '1k+', label: 'Watch catalog' },
    ],
    achievements: [
      'Built a semantic search system using LLM-generated embeddings and vector similarity search for natural-language queries over thousands of watch records',
      'Designed an embedding-based retrieval pipeline using OpenAI embeddings and pgvector for intent-aware ranking',
      'Built a data ingestion and embedding pipeline that generated vector representations for thousands of watch records to support scalable semantic retrieval',
    ],
    challenges: [
      'Integrating multiple data sources with different schemas',
      'Optimizing vector search performance for large datasets',
      'Creating a responsive UI that works well on all devices',
    ],
    solutions: [
      'Developed a custom ETL and embedding pipeline to normalize and vectorize watch records',
      'Used pgvector with OpenAI embeddings for intent-aware ranking',
      'Used CSS Grid and Flexbox for a responsive design that adapts to different screen sizes',
    ],
    role: 'Full Stack Developer',
    duration: '3 months',
  },
  {
    id: 'monte-carlo-simulation',
    title: 'Monte Carlo Simulation for Quantitative Analysis',
    summary:
      'Python Monte Carlo engine for financial risk modeling with parallel computation and interactive visualization.',
    description:
      'A financial risk modeling tool using Monte Carlo simulation, featuring probabilistic sampling, parallel computation, and interactive visualization.',
    longDescription: `The Monte Carlo Simulation tool is a financial modeling application that helps analysts assess risk by running thousands of simulated scenarios. Built in Python with a Flask backend and TypeScript frontend, it uses probabilistic sampling and parallel computation to visualize outcome distributions.`,
    technologies: ['Python', 'Flask', 'TypeScript', 'YFinance API'],
    githubUrl: 'https://github.com/abrarnafiu/PANG',
    metrics: [
      { value: '39%', label: 'Faster simulation' },
      { value: 'Full-stack', label: 'Flask + TS' },
    ],
    achievements: [
      'Built a Python-based Monte Carlo simulation engine for financial risk modeling using probabilistic sampling and parallel computation',
      'Performed data analysis and statistical modeling in Python to simulate thousands of financial scenarios and visualize outcome distributions',
      'Enhanced performance and user experience by reducing simulation time by 39% and implementing a responsive design for cross-device accessibility',
    ],
    challenges: [
      'Optimizing performance for computationally intensive simulations',
      'Creating intuitive visualizations for complex financial data',
    ],
    solutions: [
      'Used parallel computation and probabilistic sampling to speed up scenario generation',
      'Built interactive visualizations of outcome distributions for clearer risk analysis',
    ],
    role: 'Quantitative Developer',
    duration: '4 months',
  },
  {
    id: 'nurture-nest',
    title: 'Nurture Nest',
    summary:
      'Pregnancy mental health app for the Innovators of Global Health Club. Mood tracking, journaling, support.',
    description:
      'A cross-platform mobile app developed for the Innovators of Global Health Club, focusing on pregnancy mental health support.',
    longDescription: `Nurture Nest is a comprehensive mental health application designed specifically for expectant mothers in Ghana. The app provides tools, resources, and support to help women navigate the emotional challenges of pregnancy and early motherhood.`,
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
]
