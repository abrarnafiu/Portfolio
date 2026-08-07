import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Image,
  Flex,
} from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { projectList } from '../data/projects'
import { colors } from '../theme'
import watchImage from '../assets/watchEngine.png'
import nurtureImage from '../assets/nurtureNest.png'
import pangImage from '../assets/PANG.png'

const MotionBox = motion(Box)

const imageMap: Record<string, string> = {
  'watch-engine': watchImage,
  'nurture-nest': nurtureImage,
  'monte-carlo-simulation': pangImage,
}

const bandColors = [colors.yellow, colors.paper, colors.red]
const bandText = [colors.ink, colors.ink, colors.paper]

export const Projects = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <Box
      as="section"
      aria-labelledby="projects-heading"
      bg={colors.paper}
      borderBottom={`4px solid ${colors.ink}`}
    >
      <Container maxW="1240px" px={{ base: 4, md: 8 }} pt={{ base: 16, md: 24 }} pb={8}>
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <Text
            fontFamily="condensed"
            fontWeight={700}
            letterSpacing="0.14em"
            textTransform="uppercase"
            fontSize="sm"
            color={colors.red}
            mb={2}
          >
            04 — Selected Work
          </Text>
          <Heading
            as="h2"
            id="projects-heading"
            fontSize={{ base: '3xl', md: '5xl' }}
            textShadow={`4px 4px 0 ${colors.yellow}`}
            lineHeight={1.05}
          >
            PROJECTS
          </Heading>
          <Text color={colors.muted} mt={3} maxW="560px" fontSize="lg">
            Case studies from full-stack apps to data pipelines and mobile — with metrics that
            matter.
          </Text>
        </MotionBox>
      </Container>

      <VStack spacing={0} align="stretch">
        {projectList.map((project, i) => {
          const bg = bandColors[i % bandColors.length]
          const fg = bandText[i % bandText.length]
          const image = imageMap[project.id]
          const flip = i % 2 === 1

          return (
            <MotionBox
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 * i }}
              bg={bg}
              color={fg}
              borderTop={`3px solid ${colors.ink}`}
            >
              <Container maxW="1240px" px={{ base: 4, md: 8 }} py={{ base: 10, md: 14 }}>
                <Flex
                  direction={{
                    base: 'column',
                    md: flip ? 'row-reverse' : 'row',
                  }}
                  gap={{ base: 8, md: 12 }}
                  align="center"
                >
                  <Box
                    flex={1}
                    position="relative"
                    w="full"
                    maxW={{ md: '480px' }}
                  >
                    <Box
                      position="absolute"
                      inset={0}
                      transform="translate(8px, 8px)"
                      bg={fg === colors.paper ? colors.yellow : colors.ink}
                      border={`3px solid ${colors.ink}`}
                    />
                    <Image
                      src={image}
                      alt={project.title}
                      w="full"
                      h={{ base: '200px', md: '260px' }}
                      objectFit="cover"
                      border={`3px solid ${colors.ink}`}
                      position="relative"
                      bg={colors.paper}
                    />
                  </Box>

                  <VStack flex={1} align="flex-start" spacing={4}>
                    <Text
                      fontFamily="condensed"
                      fontWeight={800}
                      fontSize="sm"
                      letterSpacing="0.14em"
                      textTransform="uppercase"
                      opacity={0.8}
                    >
                      Project {String(i + 1).padStart(2, '0')}
                    </Text>
                    <Heading as="h3" fontSize={{ base: '2xl', md: '3xl' }} lineHeight={1.1}>
                      {project.title}
                    </Heading>
                    <Text fontSize="md" lineHeight={1.55} opacity={0.95}>
                      {project.summary}
                    </Text>

                    {project.metrics && project.metrics.length > 0 && (
                      <HStack spacing={3} flexWrap="wrap">
                        {project.metrics.map((m) => (
                          <Box
                            key={m.label}
                            px={3}
                            py={2}
                            border={`2px solid ${fg}`}
                            bg={fg === colors.paper ? 'rgba(0,0,0,0.15)' : 'transparent'}
                          >
                            <Text
                              fontFamily="condensed"
                              fontWeight={800}
                              fontSize="lg"
                              letterSpacing="0.04em"
                              lineHeight={1}
                            >
                              {m.value}
                            </Text>
                            <Text
                              fontFamily="condensed"
                              fontSize="xs"
                              letterSpacing="0.08em"
                              textTransform="uppercase"
                              opacity={0.8}
                            >
                              {m.label}
                            </Text>
                          </Box>
                        ))}
                      </HStack>
                    )}

                    <HStack spacing={2} flexWrap="wrap">
                      {project.technologies.map((tech) => (
                        <Box
                          key={tech}
                          px={2}
                          py={0.5}
                          border={`2px solid ${fg}`}
                          fontFamily="condensed"
                          fontWeight={700}
                          fontSize="sm"
                          letterSpacing="0.05em"
                          textTransform="uppercase"
                        >
                          {tech}
                        </Box>
                      ))}
                    </HStack>

                    <HStack spacing={4} pt={2} flexWrap="wrap">
                      <Link
                        as={RouterLink}
                        to={`/project/${project.id}`}
                        display="inline-flex"
                        alignItems="center"
                        gap={2}
                        fontFamily="condensed"
                        fontWeight={800}
                        letterSpacing="0.08em"
                        textTransform="uppercase"
                        borderBottom={`3px solid ${fg}`}
                        pb={0.5}
                        _hover={{ opacity: 0.75 }}
                      >
                        Case study <FaArrowRight size={12} />
                      </Link>
                      <Link
                        href={project.githubUrl}
                        isExternal
                        display="inline-flex"
                        alignItems="center"
                        gap={2}
                        fontFamily="condensed"
                        fontWeight={700}
                        letterSpacing="0.06em"
                        textTransform="uppercase"
                        fontSize="sm"
                        opacity={0.85}
                        _hover={{ opacity: 1 }}
                      >
                        <FaGithub size={14} /> Code
                      </Link>
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          isExternal
                          display="inline-flex"
                          alignItems="center"
                          gap={2}
                          fontFamily="condensed"
                          fontWeight={700}
                          letterSpacing="0.06em"
                          textTransform="uppercase"
                          fontSize="sm"
                          opacity={0.85}
                          _hover={{ opacity: 1 }}
                        >
                          <FaExternalLinkAlt size={12} /> Live
                        </Link>
                      )}
                    </HStack>
                  </VStack>
                </Flex>
              </Container>
            </MotionBox>
          )
        })}
      </VStack>
    </Box>
  )
}
