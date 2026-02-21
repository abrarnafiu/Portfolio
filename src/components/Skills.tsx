import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const MotionBox = motion(Box)

const categories: { label: string; tags: string[] }[] = [
  {
    label: 'Languages & runtime',
    tags: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++'],
  },
  {
    label: 'Frontend',
    tags: ['React', 'React Native', 'Expo'],
  },
  {
    label: 'Backend & data',
    tags: ['Node.js', 'Flask', 'Spring Boot', 'SQL', 'Supabase'],
  },
  {
    label: 'Cloud & tools',
    tags: ['AWS', 'Git', 'REST APIs'],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="1200px">
        <MotionBox
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <VStack align="stretch" spacing={10}>
            <MotionBox variants={item}>
              <Text
                fontSize="sm"
                fontWeight={600}
                color="brand.600"
                letterSpacing="0.05em"
                textTransform="uppercase"
                mb={2}
              >
                Stack
              </Text>
              <Heading size="xl" color="gray.900" fontWeight={700} letterSpacing="-0.02em">
                Skills
              </Heading>
              <Text color="gray.600" mt={2} maxW="560px">
                Curated set of technologies I use to ship products and systems.
              </Text>
            </MotionBox>

            <VStack align="stretch" spacing={6}>
              {categories.map((cat) => (
                <MotionBox key={cat.label} variants={item}>
                  <Text fontSize="xs" fontWeight={600} color="gray.500" letterSpacing="0.05em" mb={3}>
                    {cat.label}
                  </Text>
                  <Box display="flex" flexWrap="wrap" gap={2}>
                    {cat.tags.map((tag) => (
                      <Box
                        key={tag}
                        px={4}
                        py={2}
                        borderRadius="12px"
                        bg="white"
                        border="1px solid"
                        borderColor="gray.200"
                        fontSize="sm"
                        fontWeight={500}
                        color="gray.700"
                        transition="all 0.2s"
                        _hover={{
                          borderColor: 'brand.300',
                          color: 'brand.600',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </MotionBox>
              ))}
            </VStack>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
