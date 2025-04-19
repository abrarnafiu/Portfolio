import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, List, ListItem, ListIcon, Badge, HStack, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBook, FaStar, FaUniversity } from 'react-icons/fa'

const MotionBox = motion(Box)

export const About = () => {
  return (
    <Box id="about" py={20} bg="white" position="relative">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100%"
        bgGradient="linear(to-b, gray.50, white)"
        opacity={0.5}
        zIndex={0}
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack align="start" spacing={8}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Heading
                  size="2xl"
                  bgGradient="linear(to-r, brand.500, accent.500)"
                  bgClip="text"
                  fontWeight="extrabold"
                  letterSpacing="tight"
                >
                  About Me
                </Heading>
                <Text 
                  color="gray.600" 
                  fontSize="lg" 
                  mt={4}
                >
                  Get to know more about my background, education, and interests.
                </Text>
              </MotionBox>
              <VStack align="start" spacing={6}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  w="full"
                >
                  <Box
                    p={6}
                    bg="gray.50"
                    borderRadius="xl"
                    w="full"
                    border="1px"
                    borderColor="gray.100"
                    _hover={{ 
                      borderColor: 'brand.200',
                      boxShadow: 'md',
                      transform: 'translateY(-5px)'
                    }}
                    transition="all 0.3s"
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      width="4px"
                      height="100%"
                      bgGradient="linear(to-b, brand.500, accent.500)"
                      opacity={0}
                      _hover={{ opacity: 1 }}
                      transition="opacity 0.3s"
                    />
                    <Heading size="md" color="gray.700" display="flex" alignItems="center" gap={2} mb={4}>
                      <Icon as={FaUniversity} color="brand.500" />
                      Education
                    </Heading>
                    <VStack align="start" spacing={2}>
                      <Text fontSize="lg" color="gray.800" fontWeight="medium">
                        Northeastern University, Boston, MA
                      </Text>
                      <Text fontSize="md" color="gray.600">
                        Bachelor of Science in Computer Science
                      </Text>
                      <HStack spacing={2}>
                        <Badge colorScheme="brand">Minor: Mathematics</Badge>
                        <Badge colorScheme="accent">GPA: 3.83</Badge>
                        <Badge colorScheme="gray">Expected May 2028</Badge>
                      </HStack>
                    </VStack>
                  </Box>
                </MotionBox>

                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  w="full"
                >
                  <Box
                    p={6}
                    bg="gray.50"
                    borderRadius="xl"
                    w="full"
                    border="1px"
                    borderColor="gray.100"
                    _hover={{ 
                      borderColor: 'brand.200',
                      boxShadow: 'md',
                      transform: 'translateY(-5px)'
                    }}
                    transition="all 0.3s"
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      width="4px"
                      height="100%"
                      bgGradient="linear(to-b, brand.500, accent.500)"
                      opacity={0}
                      _hover={{ opacity: 1 }}
                      transition="opacity 0.3s"
                    />
                    <Heading size="md" color="gray.700" display="flex" alignItems="center" gap={2} mb={4}>
                      <Icon as={FaBook} color="brand.500" />
                      Relevant Coursework
                    </Heading>
                    <SimpleGrid columns={2} spacing={2}>
                      {[
                        'Fundamentals of Computer Science',
                        'Discrete Structures',
                        'Data Structures and Algorithms',
                        'Cybersecurity',
                        'PLTW Digital Electronics',
                        'IT Infrastructure',
                        'Big Data Analytics'
                      ].map((course) => (
                        <Badge 
                          key={course} 
                          colorScheme="brand" 
                          p={2}
                          _hover={{ transform: 'translateY(-2px)', boxShadow: 'sm' }}
                          transition="all 0.2s"
                        >
                          {course}
                        </Badge>
                      ))}
                    </SimpleGrid>
                  </Box>
                </MotionBox>

                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  w="full"
                >
                  <Box
                    p={6}
                    bg="gray.50"
                    borderRadius="xl"
                    w="full"
                    border="1px"
                    borderColor="gray.100"
                    _hover={{ 
                      borderColor: 'brand.200',
                      boxShadow: 'md',
                      transform: 'translateY(-5px)'
                    }}
                    transition="all 0.3s"
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      width="4px"
                      height="100%"
                      bgGradient="linear(to-b, brand.500, accent.500)"
                      opacity={0}
                      _hover={{ opacity: 1 }}
                      transition="opacity 0.3s"
                    />
                    <Heading size="md" color="gray.700" display="flex" alignItems="center" gap={2} mb={4}>
                      <Icon as={FaStar} color="brand.500" />
                      Languages
                    </Heading>
                    <HStack spacing={4}>
                      <Badge 
                        colorScheme="brand" 
                        p={2}
                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'sm' }}
                        transition="all 0.2s"
                      >
                        English (Fluent)
                      </Badge>
                      <Badge 
                        colorScheme="brand" 
                        p={2}
                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'sm' }}
                        transition="all 0.2s"
                      >
                        Bengali (Fluent)
                      </Badge>
                      <Badge 
                        colorScheme="brand" 
                        p={2}
                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'sm' }}
                        transition="all 0.2s"
                      >
                        Spanish (Intermediate)
                      </Badge>
                    </HStack>
                  </Box>
                </MotionBox>
              </VStack>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="xl"
              position="relative"
              bg="white"
              p={4}
              _hover={{ transform: 'translateY(-10px)' }}
              transition="all 0.3s"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                height="4px"
                bgGradient="linear(to-r, brand.500, accent.500)"
              />
              <Image
                src="https://via.placeholder.com/600x800"
                alt="Profile"
                w="full"
                h="full"
                objectFit="cover"
                borderRadius="xl"
                transform="scale(1.0)"
                transition="0.5s ease-in-out"
                _hover={{ transform: 'scale(1.05)' }}
              />
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  )
} 