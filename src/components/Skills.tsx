import { Box, Container, Heading, SimpleGrid, Text, Icon, VStack, HStack, Tag, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaReact, FaPython, FaJava, FaAws, FaNodeJs, FaDatabase, FaFutbol, FaBasketballBall, FaCamera, FaVideo, FaBook, FaCode, FaPen } from 'react-icons/fa'
import { SiTypescript, SiSpringboot, SiSupabase, SiCplusplus } from 'react-icons/si'

const MotionBox = motion(Box)

interface SkillCardProps {
  icon: any
  title: string
  description: string
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <MotionBox
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <VStack
      p={6}
      bg="white"
      borderRadius="xl"
      spacing={4}
      align="center"
      border="1px"
      borderColor="gray.100"
      _hover={{ 
        borderColor: 'brand.200',
        boxShadow: 'lg',
        transform: 'translateY(-5px)'
      }}
      transition="all 0.3s"
      h="full"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="4px"
        bgGradient="linear(to-r, brand.500, accent.500)"
        opacity={0}
        _hover={{ opacity: 1 }}
        transition="opacity 0.3s"
      />
      <Box
        p={3}
        borderRadius="full"
        bg="brand.50"
        _hover={{ bg: 'brand.100' }}
        transition="all 0.3s"
      >
        <Icon as={icon} w={10} h={10} color="brand.500" />
      </Box>
      <Heading size="md" color="gray.700" _hover={{ color: 'brand.500' }} transition="color 0.2s">{title}</Heading>
      <Text color="gray.600" textAlign="center">
        {description}
      </Text>
    </VStack>
  </MotionBox>
)

export const Skills = () => {
  const skills = [
    {
      icon: FaPython,
      title: 'Python',
      description: 'Data analysis, automation, and backend development'
    },
    {
      icon: FaReact,
      title: 'ReactJS',
      description: 'Building modern web applications with React and its ecosystem'
    },
    {
      icon: SiSpringboot,
      title: 'Java Spring Boot',
      description: 'Enterprise application development and microservices'
    },
    {
      icon: SiTypescript,
      title: 'TypeScript',
      description: 'Writing type-safe code for scalable applications'
    },
    {
      icon: FaNodeJs,
      title: 'Node.js',
      description: 'Server-side JavaScript runtime and backend development'
    },
    {
      icon: FaDatabase,
      title: 'SQL',
      description: 'Database design and management'
    },
    {
      icon: FaAws,
      title: 'AWS',
      description: 'Cloud services and infrastructure management'
    },
    {
      icon: SiCplusplus,
      title: 'C++',
      description: 'Systems programming and performance optimization'
    }
  ]

  const interests = [
    { icon: FaBook, label: 'Reading' },
    { icon: FaFutbol, label: 'Soccer' },
    { icon: FaBasketballBall, label: 'Basketball' },
    { icon: FaCode, label: 'Coding' },
    { icon: FaPen, label: 'Writing' },
    { icon: FaCamera, label: 'Photography' },
    { icon: FaVideo, label: 'Video Editing' }
  ]

  return (
    <Box id="skills" py={20} bg="gray.50" position="relative">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100%"
        bgGradient="linear(to-b, white, gray.50)"
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
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
              textAlign="center"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Technical Skills
            </Heading>
            <Text 
              textAlign="center" 
              color="gray.600" 
              fontSize="lg" 
              mt={4}
              maxW="2xl"
              mx="auto"
            >
              A comprehensive set of technical skills that I've developed through my education and projects.
            </Text>
          </MotionBox>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </SimpleGrid>

          <Box w="full" pt={12}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading
                size="2xl"
                bgGradient="linear(to-r, brand.500, accent.500)"
                bgClip="text"
                mb={8}
                textAlign="center"
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                Interests
              </Heading>
              <Text 
                textAlign="center" 
                color="gray.600" 
                fontSize="lg" 
                mb={8}
                maxW="2xl"
                mx="auto"
              >
                Beyond coding, here are some of my personal interests and hobbies.
              </Text>
            </MotionBox>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              {interests.map((interest, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge
                    px={4}
                    py={2}
                    borderRadius="full"
                    colorScheme="brand"
                    fontSize="md"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'md',
                      bg: 'brand.500',
                      color: 'white'
                    }}
                    transition="all 0.2s"
                  >
                    <Icon as={interest.icon} />
                    {interest.label}
                  </Badge>
                </MotionBox>
              ))}
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
} 