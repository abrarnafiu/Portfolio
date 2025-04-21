import { Box, Container, Heading, Text, VStack, HStack, Badge, Image, Link, Button, Divider, List, ListItem, ListIcon, useColorModeValue, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaLightbulb, FaTools } from 'react-icons/fa'
import { useParams, Link as RouterLink } from 'react-router-dom'

const MotionBox = motion(Box)

interface ProjectDetailProps {
  title: string
  description: string
  longDescription: string
  image: string
  videoUrl?: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  achievements?: string[]
  challenges?: string[]
  solutions?: string[]
  role?: string
  duration?: string
}

export const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>()
  
  // This would typically come from an API or database
  // For now, we'll use a static mapping
  const projectDetails: Record<string, ProjectDetailProps> = {
    'ai-watch-search': {
      title: 'AI-Powered Watch Search Engine',
      description: 'A full-stack application that enables users to search luxury watches using natural language queries, powered by OpenAI\'s GPT model and Supabase vector database for semantic search.',
      longDescription: `The AI-Powered Watch Search Engine is a sophisticated application that revolutionizes how users discover luxury timepieces. By leveraging cutting-edge AI technologies, the platform understands natural language queries and returns highly relevant watch recommendations.

The project addresses a common challenge in the luxury watch market: finding the perfect timepiece based on specific preferences, budget constraints, and style requirements. Traditional search methods often fall short when users don't know the exact model names or technical specifications they're looking for.`,
      image: 'https://via.placeholder.com/800x400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
      technologies: ['TypeScript', 'Node.js', 'Supabase', 'OpenAI API', 'Watch Database API', 'React'],
      githubUrl: 'https://github.com/abrarnafiu',
      liveUrl: 'https://example.com',
      achievements: [
        'Engineered a vector-based search pipeline integrating Supabase vector database and OpenAI',
        'Ingested thousands of watches from the Watch Database API',
        'Populated Supabase for both relational data and vector embeddings',
        'Achieved 95% search relevance score in user testing',
        'Reduced search time from 3 seconds to under 500ms'
      ],
      challenges: [
        'Integrating multiple data sources with different schemas',
        'Optimizing vector search performance for large datasets',
        'Creating a responsive UI that works well on all devices'
      ],
      solutions: [
        'Developed a custom ETL pipeline to normalize data from various sources',
        'Implemented caching and indexing strategies to improve search performance',
        'Used CSS Grid and Flexbox for a responsive design that adapts to different screen sizes'
      ],
      role: 'Full Stack Developer',
      duration: '3 months'
    },
    'nurture-nest': {
      title: 'Nurture Nest (Pregnancy Mental Health App)',
      description: 'A cross-platform mobile app developed for the Innovators of Global Health Club, focusing on pregnancy mental health support.',
      longDescription: `Nurture Nest is a comprehensive mental health application designed specifically for expectant mothers in Ghana. The app provides tools, resources, and support to help women navigate the emotional challenges of pregnancy and early motherhood.

The project was initiated in response to the growing recognition of perinatal mental health issues, which affect up to 20% of pregnant women and new mothers. By offering accessible mental health support through a mobile platform, Nurture Nest aims to reduce barriers to care and improve outcomes for both mothers and their babies.`,
      image: 'https://via.placeholder.com/800x400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
      technologies: ['React Native', 'Expo', 'AsyncStorage'],
      githubUrl: 'https://github.com/abrarnafiu',
      liveUrl: 'https://example.com',
      achievements: [
        'Achieved 95% crash-free user experience',
        'Implemented mood tracking and journaling features',
        'Increased daily user engagement by 40% over three months',
        'Reduced app load times by 25% through AsyncStorage optimization',
        'Received positive feedback from 90% of beta testers'
      ],
      challenges: [
        'Ensuring data privacy and security for sensitive health information',
        'Creating an intuitive UI for users with varying technical proficiency',
        'Optimizing performance on lower-end devices'
      ],
      solutions: [
        'Implemented end-to-end encryption for all user data',
        'Conducted extensive user testing and incorporated feedback into the design',
        'Optimized image assets and implemented lazy loading to reduce memory usage'
      ],
      role: 'Mobile Developer',
      duration: '6 months'
    },
    'monte-carlo-simulation': {
      title: 'Monte Carlo Simulation for Quantitative Analysis',
      description: 'A financial risk modeling tool using Monte Carlo simulation, featuring interactive data visualization and real-time results exploration.',
      longDescription: `The Monte Carlo Simulation tool is a sophisticated financial modeling application that helps analysts and investors assess risk and make informed decisions. By running thousands of simulated scenarios, the tool provides insights into potential outcomes and their probabilities.

This project addresses the need for more accessible and powerful risk assessment tools in the financial industry. Traditional risk models often rely on simplified assumptions that don't capture the complexity of real-world markets. The Monte Carlo approach allows for more nuanced modeling of uncertainty and variability.`,
      image: 'https://via.placeholder.com/800x400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
      technologies: ['Python', 'Flask', 'React', 'TypeScript', 'Yahoo Finance API'],
      githubUrl: 'https://github.com/abrarnafiu/PANG',
      liveUrl: 'https://example.com',
      achievements: [
        'Developed and optimized Monte Carlo simulation using Python',
        'Built full-stack web application with Flask backend and React frontend',
        'Reduced simulation time by 9% and implemented responsive design',
        'Created interactive visualizations that help users understand complex data'
      ],
      challenges: [
        'Optimizing performance for computationally intensive simulations',
        'Creating intuitive visualizations for complex financial data',
        'Ensuring accuracy across different market conditions'
      ],
      solutions: [
        'Conducted extensive backtesting against historical market data to validate the model'
      ],
      role: 'Quantitative Developer',
      duration: '4 months'
    }
  }
  
  const project = projectDetails[projectId || '']
  
  if (!project) {
    return (
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} align="center">
          <Heading>Project Not Found</Heading>
          <Text>The project you're looking for doesn't exist.</Text>
          <Button as={RouterLink} to="/#projects" leftIcon={<FaArrowLeft />}>
            Back to Projects
          </Button>
        </VStack>
      </Container>
    )
  }
  
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  return (
    <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh">
      <Container maxW="container.xl">
        <Button 
          as={RouterLink} 
          to="/#projects" 
          leftIcon={<FaArrowLeft />} 
          mb={8}
          variant="outline"
          colorScheme="brand"
        >
          Back to Projects
        </Button>
        
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.600, accent.600)"
              bgClip="text"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              {project.title}
            </Heading>
            
            <Text 
              color="gray.800" 
              fontSize="xl" 
              mt={4}
              fontWeight="medium"
            >
              {project.description}
            </Text>
            
            <HStack mt={4} spacing={4}>
              {project.role && (
                <Badge colorScheme="brand" fontSize="md" px={3} py={1}>
                  {project.role}
                </Badge>
              )}
              {project.duration && (
                <Badge colorScheme="accent" fontSize="md" px={3} py={1}>
                  {project.duration}
                </Badge>
              )}
            </HStack>
            
            <HStack mt={6} spacing={4}>
              <Link 
                href={project.githubUrl} 
                isExternal
                color="brand.500"
                _hover={{ color: 'brand.600' }}
              >
                <HStack>
                  <FaGithub />
                  <Text>GitHub</Text>
                </HStack>
              </Link>
              {project.liveUrl && (
                <Link 
                  href={project.liveUrl} 
                  isExternal
                  color="brand.500"
                  _hover={{ color: 'brand.600' }}
                >
                  <HStack>
                    <FaExternalLinkAlt />
                    <Text>Live Demo</Text>
                  </HStack>
                </Link>
              )}
            </HStack>
          </MotionBox>
          
          <Box 
            borderRadius="xl" 
            overflow="hidden" 
            boxShadow="xl"
            bg={bgColor}
            border="1px"
            borderColor={borderColor}
          >
            <Image
              src={project.image}
              alt={project.title}
              w="full"
              h="auto"
              objectFit="cover"
            />
          </Box>
          
          {project.videoUrl && (
            <Box 
              borderRadius="xl" 
              overflow="hidden" 
              boxShadow="xl"
              bg={bgColor}
              border="1px"
              borderColor={borderColor}
              position="relative"
              paddingTop="56.25%" // 16:9 aspect ratio
            >
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                src={project.videoUrl}
                title={`${project.title} demo video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          )}
          
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
            <Box gridColumn={{ base: '1', lg: 'span 2' }}>
              <VStack align="stretch" spacing={8}>
                <Box>
                  <Heading size="lg" color="gray.800" mb={4} fontWeight="bold">About the Project</Heading>
                  <Text color="gray.800" fontSize="md" lineHeight="tall">
                    {project.longDescription}
                  </Text>
                </Box>
                
                <Divider />
                
                <Box>
                  <Heading size="lg" color="gray.800" mb={4} fontWeight="bold">Technologies Used</Heading>
                  <HStack spacing={2} flexWrap="wrap">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        colorScheme="brand" 
                        px={3} 
                        py={1}
                        fontSize="md"
                        fontWeight="medium"
                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'sm' }}
                        transition="all 0.2s"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
                
                <Divider />
                
                <Box>
                  <Heading size="lg" color="gray.800" mb={4} fontWeight="bold">Key Achievements</Heading>
                  <List spacing={3}>
                    {project.achievements?.map((achievement, index) => (
                      <ListItem key={index} color="gray.800" fontSize="md" fontWeight="medium">
                        <ListIcon as={FaCheckCircle} color="brand.500" />
                        {achievement}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </VStack>
            </Box>
            
            <Box>
              <VStack align="stretch" spacing={8}>
                <Box>
                  <Heading size="md" color="gray.800" mb={4} fontWeight="bold">Challenges</Heading>
                  <List spacing={3}>
                    {project.challenges?.map((challenge, index) => (
                      <ListItem key={index} color="gray.800" fontSize="md" fontWeight="medium">
                        <ListIcon as={FaLightbulb} color="accent.500" />
                        {challenge}
                      </ListItem>
                    ))}
                  </List>
                </Box>
                
                <Divider />
                
                <Box>
                  <Heading size="md" color="gray.800" mb={4} fontWeight="bold">Solutions</Heading>
                  <List spacing={3}>
                    {project.solutions?.map((solution, index) => (
                      <ListItem key={index} color="gray.800" fontSize="md" fontWeight="medium">
                        <ListIcon as={FaTools} color="brand.500" />
                        {solution}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 