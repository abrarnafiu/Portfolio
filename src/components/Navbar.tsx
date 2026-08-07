import React, { useEffect, useState } from 'react'
import { Box, Flex, HStack, Link, Text, IconButton } from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { colors } from '../theme'

const navItems = [
  { label: 'Work', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Life', id: 'interests' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={scrolled || open ? colors.paper : 'transparent'}
      borderBottom={scrolled || open ? `3px solid ${colors.ink}` : '3px solid transparent'}
      transition="background 0.2s ease, border-color 0.2s ease"
    >
      <Flex
        maxW="1240px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={3}
        justify="space-between"
        align="center"
      >
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <Text
            fontFamily="heading"
            fontSize={{ base: 'xl', md: '2xl' }}
            color={colors.ink}
            letterSpacing="0.02em"
            textShadow={`3px 3px 0 ${colors.yellow}`}
            lineHeight={1}
          >
            ABRAR
          </Text>
        </Link>

        <HStack
          spacing={7}
          display={{ base: 'none', md: 'flex' }}
          fontFamily="condensed"
          fontWeight={700}
          letterSpacing="0.08em"
          textTransform="uppercase"
          fontSize="md"
        >
          {navItems.map((item) => (
            <Box
              key={item.id}
              as="button"
              onClick={() => scrollTo(item.id)}
              color={colors.ink}
              cursor="pointer"
              position="relative"
              _hover={{ color: colors.blue }}
              transition="color 0.15s"
            >
              {item.label}
            </Box>
          ))}
        </HStack>

        <IconButton
          aria-label={open ? 'Close menu' : 'Open menu'}
          icon={open ? <FaTimes /> : <FaBars />}
          display={{ base: 'inline-flex', md: 'none' }}
          variant="outline"
          size="sm"
          onClick={() => setOpen((v) => !v)}
          border={`2px solid ${colors.ink}`}
          borderRadius={0}
          bg={colors.paper}
        />
      </Flex>

      {open && (
        <Box
          display={{ base: 'block', md: 'none' }}
          borderTop={`2px solid ${colors.ink}`}
          bg={colors.yellow}
          px={4}
          py={4}
        >
          {navItems.map((item) => (
            <Box
              key={item.id}
              as="button"
              display="block"
              w="full"
              textAlign="left"
              py={3}
              fontFamily="condensed"
              fontWeight={800}
              fontSize="xl"
              letterSpacing="0.08em"
              textTransform="uppercase"
              borderBottom={`2px solid ${colors.ink}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}
