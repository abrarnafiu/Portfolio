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
  SimpleGrid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { useMemo } from 'react'
import { projectList } from '../data/projects'
import { colors } from '../theme'
import { useSeo } from '../seo/useSeo'
import { projectJsonLd } from '../seo/jsonLd'
import watchImage from '../assets/watchEngine.png'
import nurtureImage from '../assets/nurtureNest.png'
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

  const jsonLd = useMemo(
    () => (projectId ? projectJsonLd(projectId) : null),
    [projectId],
  )

  useSeo(
    project
      ? {
          title: project.title,
          description: project.description,
          path: `/project/${project.id}`,
          type: 'article',
          jsonLd: jsonLd ?? undefined,
        }
      : {
          title: 'Project not found',
          description: 'The requested project could not be found.',
          path: `/project/${projectId || ''}`,
          noindex: true,
        },
  )

  if (!project) {
    return (
      <Box as="main" id="main-content" bg={colors.paper} minH="100vh">
        <Container maxW="800px" py={28}>
          <VStack spacing={6} align="flex-start">
            <Heading as="h1" fontSize="4xl" textShadow={`4px 4px 0 ${colors.yellow}`}>
              PROJECT NOT FOUND
            </Heading>
            <Text color={colors.muted}>The project you&apos;re looking for doesn&apos;t exist.</Text>
            <Button as={RouterLink} to="/#projects" leftIcon={<FaArrowLeft />}>
              Back to projects
            </Button>
          </VStack>
        </Container>
      </Box>
    )
  }

  return (
    <Box as="main" id="main-content" bg={colors.paper} minH="100vh">
      <Box as="article">
        <Box bg={colors.blue} borderBottom={`4px solid ${colors.ink}`} pt={24} pb={12}>
          <Container maxW="900px" px={{ base: 4, md: 8 }}>
            <Button
              as={RouterLink}
              to="/#projects"
              leftIcon={<FaArrowLeft />}
              size="sm"
              mb={8}
              bg={colors.yellow}
              color={colors.ink}
              border={`2px solid ${colors.ink}`}
              boxShadow={`3px 3px 0 ${colors.ink}`}
              _hover={{ textDecoration: 'none', bg: colors.yellowHot }}
            >
              Back to projects
            </Button>
            <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl' }}
                color={colors.paper}
                textShadow={`5px 5px 0 ${colors.ink}`}
                lineHeight={1.05}
                mb={4}
              >
                {project.title.toUpperCase()}
              </Heading>
              <Text color={colors.paper} fontSize="lg" maxW="640px" opacity={0.95} lineHeight={1.55}>
                {project.description}
              </Text>
              <HStack spacing={3} flexWrap="wrap" mt={6}>
                {project.role && (
                  <Box
                    px={3}
                    py={1}
                    bg={colors.yellow}
                    color={colors.ink}
                    border={`2px solid ${colors.ink}`}
                    fontFamily="condensed"
                    fontWeight={800}
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                    fontSize="sm"
                  >
                    {project.role}
                  </Box>
                )}
                {project.duration && (
                  <Box
                    px={3}
                    py={1}
                    bg={colors.paper}
                    color={colors.ink}
                    border={`2px solid ${colors.ink}`}
                    fontFamily="condensed"
                    fontWeight={700}
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                    fontSize="sm"
                  >
                    {project.duration}
                  </Box>
                )}
              </HStack>
              <HStack spacing={5} mt={6}>
                <Link
                  href={project.githubUrl}
                  isExternal
                  color={colors.yellow}
                  fontFamily="condensed"
                  fontWeight={800}
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                >
                  <FaGithub /> GitHub
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    isExternal
                    color={colors.yellow}
                    fontFamily="condensed"
                    fontWeight={800}
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                  >
                    <FaExternalLinkAlt size={12} /> Live demo
                  </Link>
                )}
              </HStack>
            </MotionBox>
          </Container>
        </Box>

        <Container maxW="900px" px={{ base: 4, md: 8 }} py={{ base: 12, md: 16 }}>
          <VStack align="stretch" spacing={10}>
            {image && (
              <Box position="relative" maxW="720px">
                <Box
                  position="absolute"
                  inset={0}
                  transform="translate(8px, 8px)"
                  bg={colors.yellow}
                  border={`3px solid ${colors.ink}`}
                />
                <Image
                  src={image}
                  alt={project.title}
                  w="full"
                  maxH="420px"
                  objectFit="contain"
                  bg={colors.paper}
                  border={`3px solid ${colors.ink}`}
                  position="relative"
                />
              </Box>
            )}

            <Box>
              <Heading as="h2" fontSize="2xl" mb={3} textShadow={`3px 3px 0 ${colors.yellow}`}>
                ABOUT THE PROJECT
              </Heading>
              <Text color={colors.ink} fontSize="md" lineHeight={1.7}>
                {project.longDescription}
              </Text>
            </Box>

            <Box>
              <Heading as="h2" fontSize="2xl" mb={3} textShadow={`3px 3px 0 ${colors.yellow}`}>
                TECHNOLOGIES
              </Heading>
              <HStack spacing={2} flexWrap="wrap">
                {project.technologies.map((tech) => (
                  <Box
                    key={tech}
                    px={3}
                    py={1}
                    bg={colors.blue}
                    color={colors.paper}
                    border={`2px solid ${colors.ink}`}
                    fontFamily="condensed"
                    fontWeight={700}
                    letterSpacing="0.06em"
                    textTransform="uppercase"
                    fontSize="sm"
                  >
                    {tech}
                  </Box>
                ))}
              </HStack>
            </Box>

            {project.achievements && project.achievements.length > 0 && (
              <Box>
                <Heading as="h2" fontSize="2xl" mb={3} textShadow={`3px 3px 0 ${colors.yellow}`}>
                  KEY ACHIEVEMENTS
                </Heading>
                <List spacing={3}>
                  {project.achievements.map((achievement, i) => (
                    <ListItem key={i} display="flex" gap={3} lineHeight={1.55}>
                      <Box
                        mt="0.5em"
                        w="10px"
                        h="10px"
                        flexShrink={0}
                        bg={colors.red}
                        border={`1px solid ${colors.ink}`}
                      />
                      {achievement}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {project.challenges && project.challenges.length > 0 && (
                <Box border={`3px solid ${colors.ink}`} p={5} bg={colors.yellow}>
                  <Heading as="h3" fontSize="xl" mb={3}>
                    CHALLENGES
                  </Heading>
                  <List spacing={2}>
                    {project.challenges.map((c, i) => (
                      <ListItem key={i} fontSize="sm" lineHeight={1.5}>
                        — {c}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
              {project.solutions && project.solutions.length > 0 && (
                <Box border={`3px solid ${colors.ink}`} p={5} bg={colors.paper}>
                  <Heading as="h3" fontSize="xl" mb={3}>
                    SOLUTIONS
                  </Heading>
                  <List spacing={2}>
                    {project.solutions.map((s, i) => (
                      <ListItem key={i} fontSize="sm" lineHeight={1.5}>
                        — {s}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
