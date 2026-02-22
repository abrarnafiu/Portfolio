import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Link, Image } from '@chakra-ui/react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projectList } from '../data/projects'
import watchImage from '../assets/watchEngine.png'
import nurtureImage from '../assets/nurtureNest.png'
import pangImage from '../assets/PANG.png'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

const imageMap: Record<string, string> = {
  'watch-engine': watchImage,
  'nurture-nest': nurtureImage,
  'monte-carlo-simulation': pangImage,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
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
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 300, damping: 30 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <MotionBox variants={item}>
      <Link as={RouterLink} to={`/project/${id}`} _hover={{ textDecoration: 'none' }}>
        <MotionBox
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          borderRadius="16px"
          overflow="hidden"
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
          }}
          whileHover={{
            y: -8,
            boxShadow: '0 24px 60px rgba(99, 102, 241, 0.15), 0 0 0 1px rgba(99, 102, 241, 0.1)',
            borderColor: 'brand.300',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <Box position="relative" h="200px" bg="gray.100" overflow="hidden">
            <MotionImage
              src={image}
              alt={title}
              w="full"
              h="full"
              objectFit="cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
        </MotionBox>
      </Link>
    </MotionBox>
  )
}

export const Projects = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Box py={{ base: 16, md: 24 }} bg="white" position="relative" overflow="hidden">
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99, 102, 241, 0.06), transparent 60%)"
        pointerEvents="none"
      />
      <Container maxW="1200px" position="relative" zIndex={1}>
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
