import { Box, Container, Heading, Text, VStack, Flex } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { colors } from '../theme'

const MotionBox = motion(Box)

const categories: { label: string; tags: string[]; bg: string; fg: string }[] = [
  {
    label: 'Languages',
    tags: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'C#', 'OCaml', 'SQL'],
    bg: colors.blue,
    fg: colors.paper,
  },
  {
    label: 'Frameworks',
    tags: ['React', 'Spring Boot', 'Node.js', 'Next.js', 'Express', 'Flask', 'Expo', '.NET'],
    bg: colors.yellow,
    fg: colors.ink,
  },
  {
    label: 'Tools',
    tags: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'gRPC',
      'Protocol Buffers',
      'Git',
      'Supabase',
      'Selenium',
      'Jest',
      'JUnit',
      'Twilio',
    ],
    bg: colors.red,
    fg: colors.paper,
  },
  {
    label: 'Machine Learning / Data',
    tags: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Vector Embeddings',
      'LLM APIs',
      'Multi-Agent Orchestration',
    ],
    bg: colors.ink,
    fg: colors.yellow,
  },
]

const marqueeTags = [
  'Python',
  'TypeScript',
  'React',
  'gRPC',
  'C#',
  'AWS',
  'Spring Boot',
  'Next.js',
  'Docker',
  'Kubernetes',
  'LLM APIs',
  'Protocol Buffers',
]

function Marquee() {
  const doubled = [...marqueeTags, ...marqueeTags]
  return (
    <Box
      overflow="hidden"
      borderY={`3px solid ${colors.ink}`}
      bg={colors.yellow}
      py={3}
      my={8}
    >
      <Flex
        as="div"
        w="max-content"
        gap={10}
        animation="marquee 28s linear infinite"
        sx={{
          '@keyframes marquee': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-50%)' },
          },
        }}
      >
        {doubled.map((tag, i) => (
          <Text
            key={`${tag}-${i}`}
            fontFamily="condensed"
            fontWeight={800}
            fontSize={{ base: 'xl', md: '2xl' }}
            letterSpacing="0.08em"
            textTransform="uppercase"
            whiteSpace="nowrap"
            color={colors.ink}
          >
            {tag}
            <Box as="span" mx={4} color={colors.red}>
              ◆
            </Box>
          </Text>
        ))}
      </Flex>
    </Box>
  )
}

export const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <Box
      as="section"
      aria-labelledby="skills-heading"
      py={{ base: 16, md: 20 }}
      bg={colors.blue}
      position="relative"
      overflow="hidden"
      borderBottom={`4px solid ${colors.ink}`}
      color={colors.paper}
    >
      <Container maxW="1240px" px={{ base: 4, md: 8 }}>
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
            color={colors.yellow}
            mb={2}
          >
            02 — Stack
          </Text>
          <Heading
            as="h2"
            id="skills-heading"
            fontSize={{ base: '3xl', md: '5xl' }}
            color={colors.paper}
            textShadow={`4px 4px 0 ${colors.ink}`}
            lineHeight={1.05}
          >
            TOOLS I SHIP WITH
          </Heading>
          <Text color={colors.paper} opacity={0.9} mt={3} maxW="520px" fontSize="lg">
            Languages, frameworks, cloud tooling, and ML stack from recent internship and project
            work.
          </Text>
        </MotionBox>
      </Container>

      <Marquee />

      <Container maxW="1240px" px={{ base: 4, md: 8 }} pb={4}>
        <VStack align="stretch" spacing={4}>
          {categories.map((cat, i) => (
            <MotionBox
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              bg={cat.bg}
              color={cat.fg}
              border={`3px solid ${colors.ink}`}
              boxShadow={`5px 5px 0 ${colors.ink}`}
              p={{ base: 4, md: 5 }}
            >
              <Text
                fontFamily="condensed"
                fontWeight={700}
                letterSpacing="0.12em"
                textTransform="uppercase"
                fontSize="sm"
                mb={3}
                opacity={0.85}
              >
                {cat.label}
              </Text>
              <Flex flexWrap="wrap" gap={2}>
                {cat.tags.map((tag) => (
                  <Box
                    key={tag}
                    px={3}
                    py={1}
                    border={`2px solid ${cat.fg}`}
                    fontFamily="condensed"
                    fontWeight={700}
                    fontSize="md"
                    letterSpacing="0.06em"
                    textTransform="uppercase"
                  >
                    {tag}
                  </Box>
                ))}
              </Flex>
            </MotionBox>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}
