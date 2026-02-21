import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Link,
  Button,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaLightbulb, FaTools } from 'react-icons/fa'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { projectList } from '../data/projects'
import watchImage from '../assets/watchEngine.png'
import nurtureImage from '../assets/nurtureNest.jpg'
import pangImage from '../assets/PANG.png'

const MotionBox = motion(Box)

const imageMap: Record<string, string> = {
  'watch-engine': watchImage,
  'nurture-nest': nurtureImage,
  'monte-carlo-simulation': pangImage,
}

export const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projectList.find((p) => p.id === projectId)
  const image = project ? imageMap[project.id] : null

  if (!project) {
    return (
      <Box bg="gray.50" minH="100vh" py={20}>
        <Container maxW="800px">
          <VStack spacing={8} align="center">
            <Heading size="xl" color="gray.900">
              Project not found
            </Heading>
            <Text color="gray.600">The project you're looking for doesn't exist.</Text>
            <Button
              as={RouterLink}
              to="/#projects"
              leftIcon={<FaArrowLeft />}
              colorScheme="brand"
              borderRadius="12px"
            >
              Back to projects
            </Button>
          </VStack>
        </Container>
      </Box>
    )
  }

  return (
    <Box bg="gray.50" minH="100vh" py={{ base: 24, md: 20 }}>
      <Container maxW="800px">
        <Button
          as={RouterLink}
          to="/#projects"
          leftIcon={<FaArrowLeft />}
          variant="ghost"
          size="sm"
          color="gray.600"
          mb={8}
          _hover={{ bg: 'gray.100', color: 'gray.800' }}
          borderRadius="8px"
        >
          Back to projects
        </Button>

        <MotionBox
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <VStack align="stretch" spacing={8}>
            <VStack align="stretch" spacing={4}>
              <Heading size="xl" color="gray.900" fontWeight={700} letterSpacing="-0.02em">
                {project.title}
              </Heading>
              <Text color="gray.600" fontSize="lg" lineHeight={1.6}>
                {project.description}
              </Text>
              <HStack spacing={3} flexWrap="wrap">
                {project.role && (
                  <Box
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg="brand.50"
                    fontSize="sm"
                    fontWeight={600}
                    color="brand.700"
                  >
                    {project.role}
                  </Box>
                )}
                {project.duration && (
                  <Box
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg="gray.200"
                    fontSize="sm"
                    fontWeight={500}
                    color="gray.700"
                  >
                    {project.duration}
                  </Box>
                )}
              </HStack>
              <HStack spacing={4}>
                <Link
                  href={project.githubUrl}
                  isExternal
                  color="brand.600"
                  fontWeight={500}
                  fontSize="sm"
                  _hover={{ color: 'brand.700' }}
                >
                  <HStack spacing={2}>
                    <FaGithub size={16} />
                    <span>GitHub</span>
                  </HStack>
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    isExternal
                    color="brand.600"
                    fontWeight={500}
                    fontSize="sm"
                    _hover={{ color: 'brand.700' }}
                  >
                    <HStack spacing={2}>
                      <FaExternalLinkAlt size={14} />
                      <span>Live demo</span>
                    </HStack>
                  </Link>
                )}
              </HStack>
            </VStack>

            {image && (
              <Box
                borderRadius="16px"
                overflow="hidden"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.06)"
              >
                <Image
                  src={image}
                  alt={project.title}
                  w="full"
                  maxH="420px"
                  objectFit="contain"
                  bg="gray.50"
                />
              </Box>
            )}

            <Box>
              <Heading size="md" color="gray.900" mb={3} fontWeight={600}>
                About the project
              </Heading>
              <Text color="gray.700" fontSize="md" lineHeight={1.7}>
                {project.longDescription}
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="gray.900" mb={3} fontWeight={600}>
                Technologies
              </Heading>
              <HStack spacing={2} flexWrap="wrap">
                {project.technologies.map((tech) => (
                  <Box
                    key={tech}
                    px={3}
                    py={1.5}
                    borderRadius="8px"
                    bg="gray.100"
                    fontSize="sm"
                    fontWeight={500}
                    color="gray.700"
                  >
                    {tech}
                  </Box>
                ))}
              </HStack>
            </Box>

            {project.achievements && project.achievements.length > 0 && (
              <Box>
                <Heading size="md" color="gray.900" mb={3} fontWeight={600}>
                  Key achievements
                </Heading>
                <List spacing={2}>
                  {project.achievements.map((achievement, i) => (
                    <ListItem key={i} color="gray.700" fontSize="md" display="flex" alignItems="flex-start" gap={2}>
                      <ListIcon as={FaCheckCircle} color="brand.500" mt={0.5} />
                      {achievement}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {project.challenges && project.challenges.length > 0 && (
                <Box>
                  <Heading size="sm" color="gray.900" mb={3} fontWeight={600}>
                    Challenges
                  </Heading>
                  <List spacing={2}>
                    {project.challenges.map((c, i) => (
                      <ListItem key={i} color="gray.600" fontSize="sm" display="flex" alignItems="flex-start" gap={2}>
                        <ListIcon as={FaLightbulb} color="brand.400" mt={0.5} />
                        {c}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
              {project.solutions && project.solutions.length > 0 && (
                <Box>
                  <Heading size="sm" color="gray.900" mb={3} fontWeight={600}>
                    Solutions
                  </Heading>
                  <List spacing={2}>
                    {project.solutions.map((s, i) => (
                      <ListItem key={i} color="gray.600" fontSize="sm" display="flex" alignItems="flex-start" gap={2}>
                        <ListIcon as={FaTools} color="brand.500" mt={0.5} />
                        {s}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </SimpleGrid>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
