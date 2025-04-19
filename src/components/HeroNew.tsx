import { Box, Container, Heading, Text, VStack, HStack, Link, Icon, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei'
import { FaLinkedin, FaGithub, FaGlobe, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

export const Hero = () => {
  const bgGradient = useColorModeValue(
    'linear(to-b, brand.50, white)',
    'linear(to-b, gray.900, gray.800)'
  )
  
  return (
    <Box 
      bg="gray.50" 
      position="relative" 
      overflow="hidden"
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      {/* Background gradient */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient={bgGradient}
        opacity={0.7}
      />
      
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="brand.100"
        opacity={0.1}
        filter="blur(40px)"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="250px"
        h="250px"
        borderRadius="full"
        bg="accent.100"
        opacity={0.1}
        filter="blur(40px)"
      />
      
      <Container maxW="container.xl" py={20}>
        <Flex 
          direction={{ base: 'column', lg: 'row' }} 
          align="center" 
          justify="space-between"
          position="relative"
          zIndex={2}
        >
          {/* Content */}
          <MotionFlex
            direction="column"
            align="flex-start"
            maxW={{ base: '100%', lg: '50%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <VStack align="flex-start" spacing={6}>
              <Heading
                as="h1"
                size="3xl"
                bgGradient="linear(to-r, brand.500, accent.500)"
                bgClip="text"
                lineHeight="1.2"
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                Hi, I'm Abrar Nafiu
              </Heading>
              <Heading as="h2" size="xl" color="gray.700" fontWeight="bold">
                Computer Science & Business Administration Student
              </Heading>
              <Text fontSize="xl" color="gray.600" lineHeight="tall">
                A passionate developer with expertise in Python, ReactJS, Java Spring Boot, and AWS.
                Currently pursuing my BS in Computer Science and Business Administration at Northeastern University.
              </Text>
              <HStack spacing={4} pt={4}>
                <Button
                  as={Link}
                  href="#contact"
                  colorScheme="brand"
                  size="lg"
                  rightIcon={<FaArrowRight />}
                  _hover={{
                    transform: 'translateY(-3px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.3s"
                >
                  Get in Touch
                </Button>
                <Button
                  as={Link}
                  href="#projects"
                  variant="outline"
                  colorScheme="brand"
                  size="lg"
                  _hover={{
                    transform: 'translateY(-3px)',
                    boxShadow: 'md',
                    bg: 'brand.50',
                  }}
                  transition="all 0.3s"
                >
                  View Projects
                </Button>
              </HStack>
              <HStack spacing={6} pt={4}>
                <Link href="https://www.linkedin.com/in/abrar-nafiu/" isExternal>
                  <Icon as={FaLinkedin} w={6} h={6} color="brand.500" _hover={{ color: 'brand.600', transform: 'scale(1.2)' }} transition="all 0.2s" />
                </Link>
                <Link href="https://github.com/abrarnafiu" isExternal>
                  <Icon as={FaGithub} w={6} h={6} color="brand.500" _hover={{ color: 'brand.600', transform: 'scale(1.2)' }} transition="all 0.2s" />
                </Link>
                <Link href="https://abrarnafiu.com" isExternal>
                  <Icon as={FaGlobe} w={6} h={6} color="brand.500" _hover={{ color: 'brand.600', transform: 'scale(1.2)' }} transition="all 0.2s" />
                </Link>
                <Link href="tel:+19172936206">
                  <Icon as={FaPhone} w={6} h={6} color="brand.500" _hover={{ color: 'brand.600', transform: 'scale(1.2)' }} transition="all 0.2s" />
                </Link>
                <Link href="mailto:abrarnafiu@abrarnafiu.com">
                  <Icon as={FaEnvelope} w={6} h={6} color="brand.500" _hover={{ color: 'brand.600', transform: 'scale(1.2)' }} transition="all 0.2s" />
                </Link>
              </HStack>
            </VStack>
          </MotionFlex>
          
          {/* 3D Sphere */}
          <MotionBox
            display={{ base: 'none', lg: 'block' }}
            w="500px"
            h="500px"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Canvas>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} intensity={0.8} />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#0ea5e9"
                  attach="material"
                  distort={0.6}
                  speed={1.5}
                  roughness={0.2}
                  metalness={0.8}
                />
              </Sphere>
            </Canvas>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  )
} 