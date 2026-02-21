import { Box, Container, Heading, Text, VStack, HStack, Link, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const MotionVStack = motion(VStack)

export const Hero = () => {
  return (
    <Box
      position="relative"
      minH={{ base: '85vh', md: '90vh' }}
      display="flex"
      alignItems="center"
      bg="white"
      overflow="hidden"
    >
      {/* Subtle background glow */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="600px"
        h="600px"
        borderRadius="full"
        bg="brand.50"
        opacity={0.6}
        filter="blur(80px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="brand.50"
        opacity={0.4}
        filter="blur(60px)"
        pointerEvents="none"
      />

      <Container maxW="1200px" position="relative" zIndex={1} py={{ base: 24, md: 32 }}>
        <MotionVStack
          align={{ base: 'center', md: 'flex-start' }}
          textAlign={{ base: 'center', md: 'left' }}
          spacing={6}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight={700}
            letterSpacing="-0.03em"
            lineHeight={1.1}
            color="gray.900"
          >
            Data-driven systems.
            <br />
            <Text as="span" color="brand.600">
              Built to ship.
            </Text>
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.600"
            maxW="560px"
            lineHeight={1.6}
          >
            I'm Abrar Nafiu — a computer science student at Northeastern building products
            with an engineering-first mindset. Python, React, TypeScript, and cloud.
          </Text>
          <HStack spacing={4} pt={2} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
            <Button
              as={Link}
              href="/#projects"
              colorScheme="brand"
              size="lg"
              rightIcon={<FaArrowRight />}
              borderRadius="12px"
              _hover={{ textDecoration: 'none' }}
            >
              View Projects
            </Button>
            <Button
              as={Link}
              href="/#contact"
              variant="outline"
              size="lg"
              borderRadius="12px"
              _hover={{ textDecoration: 'none' }}
            >
              Get in Touch
            </Button>
          </HStack>
          <HStack spacing={5} pt={4}>
            <Link
              href="https://github.com/abrarnafiu"
              isExternal
              color="gray.500"
              _hover={{ color: 'brand.500' }}
              transition="color 0.2s"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abrar-nafiu/"
              isExternal
              color="gray.500"
              _hover={{ color: 'brand.500' }}
              transition="color 0.2s"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </Link>
            <Link
              href="mailto:abrarnafiu@abrarnafiu.com"
              color="gray.500"
              _hover={{ color: 'brand.500' }}
              transition="color 0.2s"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </Link>
          </HStack>
        </MotionVStack>
      </Container>
    </Box>
  )
}
