import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Link, Image } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function ProjectCard({
  id,
  title,
  summary,
  technologies,
  metrics,
  image,
  githubUrl,
  liveUrl,
}: {
  id: string
  title: string
  summary: string
  technologies: string[]
  metrics?: { value: string; label: string }[]
  image: string
  githubUrl: string
  liveUrl?: string
}) {
  return (
    <MotionBox variants={item}>
      <Link as={RouterLink} to={`/project/${id}`} _hover={{ textDecoration: 'none' }}>
        <Box
          borderRadius="16px"
          overflow="hidden"
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          transition="all 0.25s ease"
          _hover={{
            borderColor: 'brand.300',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(99, 102, 241, 0.15)',
            transform: 'translateY(-4px)',
          }}
        >
          <Box position="relative" h="200px" bg="gray.50">
            <Image
              src={image}
              alt={title}
              w="full"
              h="full"
              objectFit="contain"
              p={4}
              transition="transform 0.4s ease"
              _groupHover={{ transform: 'scale(1.03)' }}
            />
          </Box>
          <VStack p={6} align="stretch" spacing={4}>
            <Heading size="md" color="gray.900" fontWeight={600} letterSpacing="-0.01em">
              {title}
            </Heading>
            <Text color="gray.600" fontSize="sm" lineHeight={1.6}>
              {summary}
            </Text>
            {metrics && metrics.length > 0 && (
              <HStack spacing={4} flexWrap="wrap">
                {metrics.map((m, i) => (
                  <Box key={i}>
                    <Text as="span" fontWeight={700} color="brand.600" fontSize="sm">
                      {m.value}
                    </Text>
                    <Text as="span" fontSize="xs" color="gray.500" ml={1}>
                      {m.label}
                    </Text>
                  </Box>
                ))}
              </HStack>
            )}
            <HStack spacing={2} flexWrap="wrap">
              {technologies.map((tech) => (
                <Box
                  key={tech}
                  px={2.5}
                  py={1}
                  borderRadius="8px"
                  bg="gray.100"
                  fontSize="xs"
                  fontWeight={500}
                  color="gray.700"
                >
                  {tech}
                </Box>
              ))}
            </HStack>
            <HStack spacing={3} pt={2} onClick={(e: React.MouseEvent) => e.preventDefault()}>
              <Link
                href={githubUrl}
                isExternal
                fontSize="sm"
                color="gray.500"
                _hover={{ color: 'brand.600' }}
                onClick={(e) => e.stopPropagation()}
              >
                <HStack spacing={1.5}>
                  <FaGithub size={14} />
                  <span>Code</span>
                </HStack>
              </Link>
              {liveUrl && (
                <Link
                  href={liveUrl}
                  isExternal
                  fontSize="sm"
                  color="gray.500"
                  _hover={{ color: 'brand.600' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <HStack spacing={1.5}>
                    <FaExternalLinkAlt size={14} />
                    <span>Live</span>
                  </HStack>
                </Link>
              )}
            </HStack>
          </VStack>
        </Box>
      </Link>
    </MotionBox>
  )
}

export const Projects = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Box py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="1200px">
        <MotionBox
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <VStack align="stretch" spacing={12}>
            <MotionBox variants={item}>
              <Text
                fontSize="sm"
                fontWeight={600}
                color="brand.600"
                letterSpacing="0.05em"
                textTransform="uppercase"
                mb={2}
              >
                Selected work
              </Text>
              <Heading size="xl" color="gray.900" fontWeight={700} letterSpacing="-0.02em">
                Projects
              </Heading>
              <Text color="gray.600" mt={2} maxW="560px">
                Case studies from full-stack apps to data pipelines and mobile — with metrics that matter.
              </Text>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
              {projectList.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  summary={project.summary}
                  technologies={project.technologies}
                  metrics={project.metrics}
                  image={imageMap[project.id] || ''}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
