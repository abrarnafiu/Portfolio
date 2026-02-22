import { Box, Container, Text, VStack, HStack, Link, Button } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HeroAnimatedBackground } from './AnimatedBackground'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)
const MotionText = motion(Text)

const line1 = "Data-driven systems."
const line2 = "Built to ship."

export const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <Box
      ref={ref}
      position="relative"
      minH={{ base: '85vh', md: '90vh' }}
      display="flex"
      alignItems="center"
      bg="white"
      overflow="hidden"
    >
      <HeroAnimatedBackground />

      <MotionBox
        style={{ y, opacity, scale }}
        position="relative"
        zIndex={1}
        w="100%"
      >
        <Container maxW="1200px" py={{ base: 24, md: 32 }}>
          <MotionVStack
            align={{ base: 'center', md: 'flex-start' }}
            textAlign={{ base: 'center', md: 'left' }}
            spacing={6}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.2 },
              },
              hidden: {},
            }}
          >
            <MotionBox
              as="h1"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight={700}
              letterSpacing="-0.03em"
              lineHeight={1.1}
              color="gray.900"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                hidden: {},
              }}
            >
              {line1.split(' ').map((word, i) => (
                <MotionText
                  key={`${word}-${i}`}
                  as="span"
                  display="inline-block"
                  mr="0.25em"
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {word}
                </MotionText>
              ))}
              <br />
              <MotionText
                as="span"
                color="brand.600"
                display="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {line2}
              </MotionText>
            </MotionBox>

            <MotionText
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="560px"
              lineHeight={1.6}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              I'm Abrar Nafiu — a computer science student at Northeastern building products
              with an engineering-first mindset. Python, React, TypeScript, and cloud.
            </MotionText>

            <HStack spacing={4} pt={2} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
              <MotionBox
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  as={Link}
                  href="/#projects"
                  colorScheme="brand"
                  size="lg"
                  rightIcon={<FaArrowRight />}
                  borderRadius="12px"
                  _hover={{ textDecoration: 'none', boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)' }}
                  transition="all 0.3s ease"
                >
                  View Projects
                </Button>
              </MotionBox>
              <MotionBox
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  as={Link}
                  href="/#contact"
                  variant="outline"
                  size="lg"
                  borderRadius="12px"
                  _hover={{ textDecoration: 'none', borderColor: 'brand.400', bg: 'brand.50' }}
                  transition="all 0.3s ease"
                >
                  Get in Touch
                </Button>
              </MotionBox>
            </HStack>

            <MotionBox
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.4, duration: 0.5 } },
              }}
            >
              <HStack spacing={5} pt={4}>
                {[
                  { href: 'https://github.com/abrarnafiu', Icon: FaGithub, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/abrar-nafiu/', Icon: FaLinkedin, label: 'LinkedIn' },
                  { href: 'mailto:abrarnafiu@abrarnafiu.com', Icon: FaEnvelope, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <MotionBox key={label} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={href}
                      isExternal={label !== 'Email'}
                      color="gray.500"
                      _hover={{ color: 'brand.500' }}
                      transition="color 0.2s"
                      aria-label={label}
                    >
                      <Icon size={22} />
                    </Link>
                  </MotionBox>
                ))}
              </HStack>
            </MotionBox>
          </MotionVStack>
        </Container>
      </MotionBox>
    </Box>
  )
}
