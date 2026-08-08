import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  List,
  ListItem,
  Flex,
} from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { colors } from '../theme'
import { StripeField } from './AnimatedBackground'

const MotionBox = motion(Box)

const workExperiences = [
  {
    company: 'Spotify',
    role: 'Software Engineering Intern',
    location: 'New York, NY',
    period: 'Jun. 2026 – Aug. 2026',
    bullets: [
      'Designed and shipped gRPC endpoints with Protocol Buffers to power per-credit visibility toggling on Spotify for Artists, replacing an all-or-nothing hide that forced artists to suppress entire profiles and reducing fully-hidden credits by 25%',
      'Built React components for the credit-management feature, including visibility toggles and inline warning states that clarified edit permissions for artist and label teams across 3 surfaces',
      'Integrated typed Proto contracts between backend services and frontend, improving response times by 15% and ensuring artist and label teams saw accurate credit-action permissions',
    ],
  },
  {
    company: 'Robert Half',
    role: 'Software Engineering Intern (Contract)',
    location: 'Remote',
    period: 'May 2026 – Aug. 2026',
    bullets: [
      "Built an internal multi-agent chatbot in C# over Protiviti's consulting knowledge base, orchestrating 20+ specialized agents across multiple LLMs to answer employee queries",
      'Migrated the orchestration layer from Group Chat to Magentic orchestration, improving task completion by 20%',
      'Added batch prompt support enabling consultants to run client discovery queries in parallel rather than sequentially, cutting discovery time by 33%',
    ],
  },
  {
    company: 'NExT Consulting',
    role: 'Software Engineering Co-op',
    location: 'Boston, MA',
    period: 'Jan. 2026 – April 2026',
    bullets: [
      'Built and shipped a production-grade full-stack application for external clients, designing RESTful APIs, normalized relational schemas, and cloud-deployed services used by thousands of end users',
      'Implemented backend services (Node.js) and frontend interfaces (React, TypeScript), improving feature response times by 25% through query optimization and data access improvements',
      'Collaborated in agile, cross-functional teams to define system architecture, conduct code reviews, and ensure production-ready deployments using Git, CI/CD pipelines, and Docker',
    ],
  },
  {
    company: 'Amazon',
    role: 'Junior Coder (3-year Apprenticeship Program)',
    location: 'New York, NY',
    period: 'Jan. 2023 – Jan. 2026',
    bullets: [
      'Optimized Spring Boot–based REST services supporting thousands of daily requests, improving throughput and response times by ~20% through caching, async processing, and query tuning',
      'Developed and maintained frontend components and internal tools using JavaScript and React, improving usability and reducing manual workflows for multiple engineering teams',
      'Leveraged AWS (Lambda, EC2, S3, IAM) to deploy scalable services and automate CI/CD workflows, cutting manual deployment time by 40%',
    ],
  },
]

const education = [
  {
    title: 'Northeastern University',
    role: 'B.S. Computer Science',
    location: 'Boston, MA',
    period: 'Expected Dec. 2027',
    metrics: ['3.70 GPA', 'Minor: Mathematics'],
    details:
      'Coursework: Data Structures and Algorithms, Object-Oriented Design, Data Analytics, Cybersecurity.',
  },
  {
    title: 'Brooklyn Technical High School',
    role: 'High School Diploma',
    location: 'Brooklyn, NY',
    period: '2020 – 2024',
    metrics: [] as string[],
    details: '',
  },
]

const accentFor = (i: number) => {
  const accents = [colors.yellow, colors.red, colors.blue, colors.yellow]
  return accents[i % accents.length]
}

export const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const timelineEntries = [
    ...workExperiences.map((work) => ({ type: 'work' as const, work })),
    ...education.map((edu) => ({ type: 'education' as const, education: edu })),
  ]

  return (
    <Box
      as="section"
      aria-labelledby="experience-heading"
      py={{ base: 16, md: 24 }}
      bg={colors.paper}
      position="relative"
      overflow="hidden"
      borderBottom={`4px solid ${colors.ink}`}
    >
      <StripeField opacity={0.04} />
      <Container maxW="1240px" position="relative" zIndex={1} px={{ base: 4, md: 8 }}>
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <VStack align="stretch" spacing={12}>
            <Box>
              <Text
                fontFamily="condensed"
                fontWeight={700}
                letterSpacing="0.14em"
                textTransform="uppercase"
                fontSize="sm"
                color={colors.blue}
                mb={2}
              >
                01 — Experience & Education
              </Text>
              <Heading
                as="h2"
                id="experience-heading"
                fontSize={{ base: '3xl', md: '5xl' }}
                textShadow={`4px 4px 0 ${colors.yellow}`}
                lineHeight={1.05}
              >
                WHERE I&apos;VE BEEN
              </Heading>
              <Text color={colors.muted} mt={3} maxW="560px" fontSize="lg">
                Internships and apprenticeship work across consumer products, AI tooling, and
                cloud services.
              </Text>
            </Box>

            <VStack align="stretch" spacing={0}>
              {timelineEntries.map((entry, i) => {
                const accent = accentFor(i)
                const isWork = entry.type === 'work'
                return (
                  <MotionBox
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.08 * i }}
                    borderTop={`3px solid ${colors.ink}`}
                    _last={{ borderBottom: `3px solid ${colors.ink}` }}
                  >
                    <Flex
                      direction={{ base: 'column', md: 'row' }}
                      gap={{ base: 4, md: 8 }}
                      py={{ base: 6, md: 8 }}
                    >
                      <Box
                        w={{ md: '200px' }}
                        flexShrink={0}
                        borderLeft={`6px solid ${accent}`}
                        pl={4}
                      >
                        <Text
                          fontFamily="condensed"
                          fontWeight={800}
                          fontSize="lg"
                          letterSpacing="0.04em"
                          textTransform="uppercase"
                        >
                          {isWork ? entry.work.period : entry.education.period}
                        </Text>
                        <Text
                          fontSize="xs"
                          fontFamily="condensed"
                          fontWeight={700}
                          letterSpacing="0.12em"
                          textTransform="uppercase"
                          color={colors.muted}
                          mt={1}
                        >
                          {isWork ? 'Work' : 'School'}
                        </Text>
                      </Box>

                      <Box flex={1}>
                        {isWork ? (
                          <>
                            <Heading as="h3" fontSize={{ base: '2xl', md: '3xl' }} mb={1}>
                              {entry.work.company}
                            </Heading>
                            <Text
                              fontFamily="condensed"
                              fontWeight={700}
                              fontSize="md"
                              letterSpacing="0.06em"
                              textTransform="uppercase"
                              color={colors.blue}
                              mb={1}
                            >
                              {entry.work.role}
                            </Text>
                            <Text fontSize="sm" color={colors.muted} mb={4}>
                              {entry.work.location}
                            </Text>
                            <List spacing={3}>
                              {entry.work.bullets.map((bullet, j) => (
                                <ListItem
                                  key={j}
                                  display="flex"
                                  gap={3}
                                  fontSize="md"
                                  color={colors.ink}
                                  lineHeight={1.55}
                                >
                                  <Box
                                    as="span"
                                    mt="0.55em"
                                    w="8px"
                                    h="8px"
                                    flexShrink={0}
                                    bg={accent}
                                    border={`1px solid ${colors.ink}`}
                                  />
                                  {bullet}
                                </ListItem>
                              ))}
                            </List>
                          </>
                        ) : (
                          <>
                            <Heading as="h3" fontSize={{ base: '2xl', md: '3xl' }} mb={1}>
                              {entry.education.title}
                            </Heading>
                            <Text
                              fontFamily="condensed"
                              fontWeight={700}
                              fontSize="md"
                              letterSpacing="0.06em"
                              textTransform="uppercase"
                              color={colors.blue}
                              mb={1}
                            >
                              {entry.education.role}
                            </Text>
                            <Text fontSize="sm" color={colors.muted} mb={3}>
                              {entry.education.location}
                            </Text>
                            {entry.education.metrics.length > 0 && (
                              <HStack spacing={2} flexWrap="wrap" mb={3}>
                                {entry.education.metrics.map((m) => (
                                  <Box
                                    key={m}
                                    px={3}
                                    py={1}
                                    bg={colors.yellow}
                                    border={`2px solid ${colors.ink}`}
                                    fontFamily="condensed"
                                    fontWeight={700}
                                    fontSize="sm"
                                    letterSpacing="0.06em"
                                    textTransform="uppercase"
                                  >
                                    {m}
                                  </Box>
                                ))}
                              </HStack>
                            )}
                            {entry.education.details && (
                              <Text fontSize="md" color={colors.muted} lineHeight={1.55}>
                                {entry.education.details}
                              </Text>
                            )}
                          </>
                        )}
                      </Box>
                    </Flex>
                  </MotionBox>
                )
              })}
            </VStack>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
