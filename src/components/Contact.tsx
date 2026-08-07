import { Box, Container, Heading, Text, VStack, HStack, Link, Button, Flex } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { colors } from '../theme'
import { StripeField } from './AnimatedBackground'

const MotionBox = motion(Box)

const links = [
  { href: 'mailto:abrarnafiu@abrarnafiu.com', label: 'Email', icon: FaEnvelope },
  {
    href: 'https://www.linkedin.com/in/abrar-nafiu/',
    label: 'LinkedIn',
    icon: FaLinkedin,
    external: true,
  },
  { href: 'https://github.com/abrarnafiu', label: 'GitHub', icon: FaGithub, external: true },
]

export const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <Box
      as="section"
      aria-labelledby="contact-heading"
      py={{ base: 16, md: 24 }}
      bg={colors.red}
      color={colors.paper}
      position="relative"
      overflow="hidden"
      borderBottom={`4px solid ${colors.ink}`}
    >
      <StripeField color={colors.ink} opacity={0.08} />
      <Container maxW="1240px" px={{ base: 4, md: 8 }} position="relative" zIndex={1}>
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <VStack align="stretch" spacing={8}>
            <Text
              fontFamily="condensed"
              fontWeight={700}
              letterSpacing="0.14em"
              textTransform="uppercase"
              fontSize="sm"
              color={colors.yellow}
            >
              05 — Contact
            </Text>

            <Heading
              as="h2"
              id="contact-heading"
              fontSize={{ base: '4xl', sm: '5xl', md: '7xl' }}
              lineHeight={0.95}
              color={colors.paper}
              textShadow={`6px 6px 0 ${colors.ink}`}
              maxW="900px"
            >
              LET&apos;S BUILD SOMETHING LOUD.
            </Heading>

            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="480px" opacity={0.95}>
              Open to collaborations, co-ops, and full-time opportunities. Say hello.
            </Text>

            <Flex gap={4} flexWrap="wrap" pt={2}>
              {links.map(({ href, label, icon: Icon, external }) => (
                <Button
                  key={label}
                  as={Link}
                  href={href}
                  isExternal={!!external}
                  size="lg"
                  leftIcon={<Icon size={18} />}
                  bg={colors.yellow}
                  color={colors.ink}
                  border={`2px solid ${colors.ink}`}
                  boxShadow={`4px 4px 0 ${colors.ink}`}
                  _hover={{
                    bg: colors.yellowHot,
                    textDecoration: 'none',
                    transform: 'translate(-2px, -2px)',
                    boxShadow: `6px 6px 0 ${colors.ink}`,
                  }}
                >
                  {label}
                </Button>
              ))}
            </Flex>

            <HStack
              justify="space-between"
              flexWrap="wrap"
              gap={3}
              pt={10}
              borderTop={`2px solid ${colors.paper}`}
              opacity={0.85}
            >
              <Text fontFamily="condensed" fontWeight={700} letterSpacing="0.08em" textTransform="uppercase">
                © {new Date().getFullYear()} Abrar Nafiu
              </Text>
              <Text fontFamily="condensed" fontWeight={600} letterSpacing="0.06em">
                abrarnafiu.com
              </Text>
            </HStack>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
