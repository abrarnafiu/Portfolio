import { Box, Container, Heading, Text, VStack, HStack, List, ListItem, ListIcon, Flex } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCircle } from 'react-icons/fa'

const MotionBox = motion(Box)

const NODE_TOP = 28
const LINE_LEFT = 11

const workExperiences = [
  {
    company: 'NExT Consulting',
    role: 'Software Engineering Co-op',
    location: 'Boston, MA',
    period: 'Dec. 2025 – Present',
    bullets: [
      'Built and shipped production-grade full-stack applications for external clients, designing RESTful APIs, normalized relational schemas, and cloud-deployed services used by hundreds of end users',
      'Implemented backend services (Java/Spring Boot, Node.js) and frontend interfaces (React, TypeScript), improving feature response times by 25% through API and query optimization',
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
      'Leveraged AWS (Lambda, EC2, S3, IAM) to deploy scalable services and automate CI/CD and operational workflows, cutting manual deployment time by 40%',
    ],
  },
]

const education = {
  title: 'Northeastern University',
  role: 'B.S. Computer Science',
  location: 'Boston, MA',
  period: 'Expected Dec 2027',
  metrics: ['3.7 GPA', 'Minor: Mathematics'],
  details: 'Relevant coursework: Data Structures & Algorithms, OOD, Discrete Structures, Cybersecurity, Big Data Analytics.',
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, x: -24, y: 12 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const lineDraw = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const timelineEntries = [
    ...workExperiences.map((job) => ({ type: 'work' as const, work: job })),
    { type: 'education' as const, education },
  ]

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
                Experience & education
              </Text>
              <Heading size="xl" color="gray.900" fontWeight={700} letterSpacing="-0.02em">
                Impact-focused execution
              </Heading>
              <Text color="gray.600" mt={2} maxW="600px">
                Professional experience and education centered on data, systems, and measurable outcomes.
              </Text>
            </MotionBox>

            <Box position="relative" pl={{ base: 10, md: 12 }}>
              <MotionBox
                position="absolute"
                left={`${LINE_LEFT}px`}
                top={`${NODE_TOP}px`}
                bottom={0}
                w="2px"
                bg="gray.200"
                borderRadius="full"
                style={{ originY: 0 }}
                variants={lineDraw}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
              />

              <VStack align="stretch" spacing={0}>
                {timelineEntries.map((entry, i) => (
                  <MotionBox key={i} variants={item}>
                    <Flex pt={i === 0 ? 0 : 8} pb={8} gap={4} align="flex-start">
                      <Box
                        flexShrink={0}
                        w="24px"
                        position="relative"
                        sx={{ mt: { base: '22px', md: '24px' } }}
                      >
                        <MotionBox
                          position="absolute"
                          left="50%"
                          transform="translateX(-50%)"
                          w={3}
                          h={3}
                          borderRadius="full"
                          bg="white"
                          borderWidth="2px"
                          borderColor="brand.500"
                          borderStyle="solid"
                          zIndex={1}
                          boxShadow="0 0 0 3px white"
                          variants={item}
                          whileHover={{ scale: 1.4, boxShadow: '0 0 0 6px rgba(99, 102, 241, 0.2)' }}
                          transition={{ duration: 0.2 }}
                        />
                      </Box>

                      <MotionBox
                        flex={1}
                        minW={0}
                        p={{ base: 5, md: 6 }}
                        borderRadius="16px"
                        border="1px solid"
                        borderColor="gray.200"
                        bg="white"
                        whileHover={{
                          borderColor: 'brand.300',
                          boxShadow: '0 12px 40px rgba(99, 102, 241, 0.12)',
                          y: -2,
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      >
                        {entry.type === 'work' ? (
                          <>
                            <HStack justify="space-between" align="flex-start" flexWrap="wrap" gap={2} mb={2}>
                              <Heading size="md" color="gray.900" fontWeight={600}>
                                {entry.work.company}
                              </Heading>
                              <Text fontSize="sm" color="gray.500" fontWeight={500}>
                                {entry.work.period}
                              </Text>
                            </HStack>
                            <Text fontSize="sm" color="brand.600" fontWeight={600} mb={1}>
                              {entry.work.role}
                            </Text>
                            <Text fontSize="sm" color="gray.500" mb={4}>
                              {entry.work.location}
                            </Text>
                            <List spacing={2}>
                              {entry.work.bullets.map((bullet, j) => (
                                <ListItem
                                  key={j}
                                  display="flex"
                                  alignItems="flex-start"
                                  gap={2}
                                  fontSize="sm"
                                  color="gray.700"
                                  lineHeight={1.6}
                                >
                                  <ListIcon as={FaCircle} color="brand.400" boxSize={2} mt={2} flexShrink={0} />
                                  {bullet}
                                </ListItem>
                              ))}
                            </List>
                          </>
                        ) : (
                          <>
                            <HStack justify="space-between" align="flex-start" flexWrap="wrap" gap={2} mb={2}>
                              <Heading size="md" color="gray.900" fontWeight={600}>
                                {entry.education.title}
                              </Heading>
                              <Text fontSize="sm" color="gray.500" fontWeight={500}>
                                {entry.education.period}
                              </Text>
                            </HStack>
                            <Text fontSize="sm" color="brand.600" fontWeight={600} mb={1}>
                              {entry.education.role}
                            </Text>
                            <Text fontSize="sm" color="gray.500" mb={3}>
                              {entry.education.location}
                            </Text>
                            <HStack spacing={3} flexWrap="wrap" mb={3}>
                              {entry.education.metrics.map((m, j) => (
                                <Box
                                  key={j}
                                  px={3}
                                  py={1}
                                  borderRadius="full"
                                  bg="gray.100"
                                  fontSize="xs"
                                  fontWeight={600}
                                  color="gray.700"
                                >
                                  {m}
                                </Box>
                              ))}
                            </HStack>
                            <Text fontSize="sm" color="gray.600" lineHeight={1.6}>
                              {entry.education.details}
                            </Text>
                          </>
                        )}
                      </MotionBox>
                    </Flex>
                  </MotionBox>
                ))}
              </VStack>
            </Box>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
