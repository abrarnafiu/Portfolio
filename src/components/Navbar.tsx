import React from 'react'
import { Box, Flex, Button, HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const Navbar: React.FC = () => {
  const sections = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <Flex
      as="nav"
      position="fixed"
      w="100%"
      bg="rgba(23, 25, 35, 0.8)"
      backdropFilter="blur(10px)"
      zIndex={100}
      py={4}
      px={8}
      justify="space-between"
      align="center"
    >
      <MotionBox
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Text fontSize="xl" fontWeight="bold" color="brand.500">
          Portfolio
        </Text>
      </MotionBox>

      <HStack spacing={8}>
        {sections.map((section) => (
          <MotionBox
            key={section}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
              onClick={() => {
                const element = document.getElementById(section.toLowerCase())
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {section}
            </Button>
          </MotionBox>
        ))}
      </HStack>
    </Flex>
  )
} 