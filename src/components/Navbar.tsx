import React, { useState, useEffect } from 'react'
import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const navItems = [
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Interests', id: 'interests' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        borderBottom: scrolled ? '1px solid' : '1px solid transparent',
        borderColor: 'gray.200',
      }}
      transition={{ duration: 0.2 }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={4}
        justify="space-between"
        align="center"
      >
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <Text
            fontSize="lg"
            fontWeight={700}
            color="gray.900"
            letterSpacing="-0.02em"
            _hover={{ color: 'brand.500' }}
            transition="color 0.2s"
          >
            Abrar Nafiu
          </Text>
        </Link>

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item) => (
            <Box
              key={item.id}
              as="button"
              onClick={() => scrollTo(item.id)}
              color="gray.600"
              fontWeight={500}
              fontSize="sm"
              _hover={{ color: 'brand.600' }}
              transition="color 0.2s"
              cursor="pointer"
              position="relative"
              pb={1}
              role="group"
            >
              {item.label}
              <Box
                position="absolute"
                left={0}
                bottom={0}
                h="2px"
                bg="brand.500"
                w="0"
                transition="width 0.2s ease"
                _groupHover={{ w: '100%' }}
              />
            </Box>
          ))}
        </HStack>
      </Flex>
    </MotionBox>
  )
}
