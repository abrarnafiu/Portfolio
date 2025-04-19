import { Box, Container, Heading, SimpleGrid, Text, Image, Link, VStack, HStack, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

const MotionBox = motion(Box)

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  achievements?: string[]
}

const ProjectCard = ({ id, title, description, image, technologies, githubUrl, liveUrl, achievements }: ProjectCardProps) => (
  <MotionBox
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Box
      bg="white"
      borderRadius="xl"
      overflow="hidden"
      border="1px"
      borderColor="gray.200"
      _hover={{ 
        borderColor: 'brand.300',
        boxShadow: 'xl',
        transform: 'translateY(-10px)'
      }}
      transition="all 0.3s"
      position="relative"
    >
      <Link as={RouterLink} to={`/project/${id}`} _hover={{ textDecoration: 'none' }}>
        <Box position="relative" h="200px" overflow="hidden">
          <Image
            src={image}
            alt={title}
            w="full"
            h="full"
            objectFit="cover"
            transition="transform 0.5s"
            _hover={{ transform: 'scale(1.1)' }}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear(to-t, blackAlpha.700, transparent)"
            opacity={0}
            _hover={{ opacity: 1 }}
            transition="opacity 0.3s"
          />
        </Box>
        <VStack p={6} align="start" spacing={4}>
          <Heading size="md" color="gray.800" fontWeight="bold" _hover={{ color: 'brand.500' }} transition="color 0.2s">{title}</Heading>
          <Text color="gray.700" fontSize="md" lineHeight="tall">{description}</Text>
          {achievements && (
            <VStack align="start" spacing={2} w="full">
              {achievements.map((achievement, index) => (
                <HStack key={index} spacing={2}>
                  <Box w={1} h={1} borderRadius="full" bg="brand.500" />
                  <Text color="gray.700" fontSize="sm" fontWeight="medium">
                    {achievement}
                  </Text>
                </HStack>
              ))}
            </VStack>
          )}
          <HStack spacing={2} flexWrap="wrap">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                colorScheme="brand" 
                px={2} 
                py={1}
                fontSize="sm"
                fontWeight="medium"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'sm' }}
                transition="all 0.2s"
              >
                {tech}
              </Badge>
            ))}
          </HStack>
        </VStack>
      </Link>
      <HStack 
        position="absolute" 
        bottom={4} 
        right={4} 
        spacing={3} 
        opacity={0} 
        transform="translateY(10px)"
        _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
        transition="all 0.3s"
        zIndex={2}
      >
        <Link 
          href={githubUrl} 
          isExternal
          color="white"
          bg="blackAlpha.700"
          p={2}
          borderRadius="full"
          _hover={{ bg: 'blackAlpha.800', transform: 'scale(1.1)' }}
          transition="all 0.2s"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub size={18} />
        </Link>
        {liveUrl && (
          <Link 
            href={liveUrl} 
            isExternal
            color="white"
            bg="blackAlpha.700"
            p={2}
            borderRadius="full"
            _hover={{ bg: 'blackAlpha.800', transform: 'scale(1.1)' }}
            transition="all 0.2s"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt size={18} />
          </Link>
        )}
      </HStack>
    </Box>
  </MotionBox>
)

export const Projects = () => {
  const projects = [
    {
      id: 'ai-watch-search',
      title: 'AI-Powered Watch Search Engine',
      description: 'A full-stack application that enables users to search luxury watches using natural language queries, powered by OpenAI\'s GPT model and Weaviate for semantic search.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['TypeScript', 'Node.js', 'Supabase', 'OpenAI API', 'Watch Database API'],
      githubUrl: 'https://github.com/abrarnafiu',
      achievements: [
        'Engineered a vector-based search pipeline integrating Weaviate and OpenAI',
        'Ingested thousands of watches from the Watch Database API',
        'Populated both Supabase (relational data) and Weaviate (vector embeddings)'
      ]
    },
    {
      id: 'nurture-nest',
      title: 'Nurture Nest (Pregnancy Mental Health App)',
      description: 'A cross-platform mobile app developed for the Innovators of Global Health Club, focusing on pregnancy mental health support.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['React Native', 'Expo', 'AsyncStorage'],
      githubUrl: 'https://github.com/abrarnafiu',
      achievements: [
        'Achieved 95% crash-free user experience',
        'Implemented mood tracking and journaling features',
        'Increased daily user engagement by 40% over three months',
        'Reduced app load times by 25% through AsyncStorage optimization'
      ]
    },
    {
      id: 'monte-carlo-simulation',
      title: 'Monte Carlo Simulation for Quantitative Analysis',
      description: 'A financial risk modeling tool using Monte Carlo simulation, featuring interactive data visualization and real-time results exploration.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['Python', 'Flask', 'React', 'Parallel Processing'],
      githubUrl: 'https://github.com/abrarnafiu',
      achievements: [
        'Developed and optimized Monte Carlo simulation using Python',
        'Integrated probability distributions and parallel processing',
        'Built full-stack web application with Flask backend and React frontend',
        'Reduced simulation time by 9% and implemented responsive design'
      ]
    }
  ]

  return (
    <Box id="projects" py={20} bg="white" position="relative">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100%"
        bgGradient="linear(to-b, gray.50, white)"
        opacity={0.5}
        zIndex={0}
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.600, accent.600)"
              bgClip="text"
              textAlign="center"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Featured Projects
            </Heading>
            <Text 
              textAlign="center" 
              color="gray.700" 
              fontSize="lg" 
              mt={4}
              maxW="2xl"
              mx="auto"
              fontWeight="medium"
            >
              A collection of projects that showcase my skills and experience in software development.
            </Text>
          </MotionBox>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 