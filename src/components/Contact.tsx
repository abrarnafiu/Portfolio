import { Box, Container, Heading, Text, VStack, HStack, Link, Button } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const MotionBox = motion(Box)

const links = [
  { href: 'mailto:abrarnafiu@abrarnafiu.com', label: 'Email', icon: FaEnvelope },
  { href: 'https://www.linkedin.com/in/abrar-nafiu/', label: 'LinkedIn', icon: FaLinkedin, external: true },
  { href: 'https://github.com/abrarnafiu', label: 'GitHub', icon: FaGithub, external: true },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Box py={{ base: 16, md: 20 }} bg="gray.50" position="relative" overflow="hidden">
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99, 102, 241, 0.08), transparent 50%)"
        pointerEvents="none"
      />
      <Container maxW="1200px" position="relative" zIndex={1}>
        <MotionBox
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <VStack spacing={8} py={8}>
            <MotionBox variants={item}>
              <Heading size="lg" color="gray.900" fontWeight={700} letterSpacing="-0.02em">
                Get in touch
              </Heading>
            </MotionBox>
            <MotionBox variants={item}>
              <Text color="gray.600" fontSize="md" textAlign="center" maxW="400px">
                Open to collaborations and opportunities. Say hello.
              </Text>
            </MotionBox>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              {links.map(({ href, label, icon: Icon, external }) => (
                <MotionBox
                  key={label}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    as={Link}
                    href={href}
                    isExternal={!!external}
                    variant="outline"
                    size="md"
                    borderRadius="12px"
                    leftIcon={<Icon size={18} />}
                    color="gray.700"
                    borderColor="gray.300"
                    _hover={{
                      borderColor: 'brand.400',
                      color: 'brand.600',
                      bg: 'white',
                      textDecoration: 'none',
                      boxShadow: '0 8px 24px rgba(99, 102, 241, 0.15)',
                    }}
                    transition="all 0.25s ease"
                  >
                    {label}
                  </Button>
                </MotionBox>
              ))}
            </HStack>
            <MotionBox variants={item}>
              <Text fontSize="sm" color="gray.400" pt={8}>
                © {new Date().getFullYear()} Abrar Nafiu
              </Text>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
