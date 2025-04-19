import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, HStack, Link, Icon, useToast, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaPhone } from 'react-icons/fa'
import { useState } from 'react'

const MotionBox = motion(Box)

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      href: 'tel:+19172936206',
      label: '(917)-293-6206'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:abrarnafiu@abrarnafiu.com',
      label: 'abrarnafiu@abrarnafiu.com'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/abrar-nafiu/',
      label: 'LinkedIn'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/abrarnafiu',
      label: 'GitHub'
    },
    {
      icon: FaGlobe,
      href: 'https://abrarnafiu.com',
      label: 'Website'
    }
  ]

  return (
    <Box id="contact" py={20} bg="gray.50">
      <Container maxW="container.md">
        <VStack spacing={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
              textAlign="center"
            >
              Get In Touch
            </Heading>
            <Text textAlign="center" color="gray.600" mt={4}>
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </Text>
          </MotionBox>

          <VStack spacing={6} w="full">
            {contactInfo.map((info) => (
              <MotionBox
                key={info.label}
                whileHover={{ x: 5 }}
                w="full"
                bg="white"
                p={4}
                borderRadius="lg"
                border="1px"
                borderColor="gray.100"
                _hover={{ 
                  borderColor: 'brand.200',
                  boxShadow: 'md',
                  transform: 'translateX(5px)'
                }}
                transition={{ duration: 0.3 }}
              >
                <Link href={info.href} isExternal>
                  <HStack spacing={4}>
                    <Icon as={info.icon} w={5} h={5} color="brand.500" />
                    <Text color="gray.700">{info.label}</Text>
                  </HStack>
                </Link>
              </MotionBox>
            ))}
          </VStack>

          <Box
            as="form"
            onSubmit={handleSubmit}
            w="full"
            bg="white"
            p={8}
            borderRadius="xl"
            border="1px"
            borderColor="gray.100"
            boxShadow="sm"
          >
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel color="gray.700">Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Your name"
                  bg="gray.50"
                  border="1px"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'brand.200' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.700">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  bg="gray.50"
                  border="1px"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'brand.200' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.700">Message</FormLabel>
                <Textarea
                  placeholder="Your message"
                  bg="gray.50"
                  border="1px"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'brand.200' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
                  rows={6}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="brand"
                size="lg"
                w="full"
                isLoading={isSubmitting}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg'
                }}
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
} 