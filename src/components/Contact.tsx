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

export const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Box py={{ base: 16, md: 20 }} bg="gray.50">
      <Container maxW="1200px">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <VStack spacing={8} py={8}>
            <Heading size="lg" color="gray.900" fontWeight={700} letterSpacing="-0.02em">
              Get in touch
            </Heading>
            <Text color="gray.600" fontSize="md" textAlign="center" maxW="400px">
              Open to collaborations and opportunities. Say hello.
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              {links.map(({ href, label, icon: Icon, external }) => (
                <Button
                  key={label}
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
                  }}
                >
                  {label}
                </Button>
              ))}
            </HStack>
            <Text fontSize="sm" color="gray.400" pt={8}>
              © {new Date().getFullYear()} Abrar Nafiu
            </Text>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
