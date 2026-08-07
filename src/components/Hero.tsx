import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Link,
  Button,
  Flex,
  Image,
} from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HeroPosterBackdrop } from './AnimatedBackground'
import { colors } from '../theme'
import heroImage from '../assets/headshot.jpg'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

export const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <Box
      as="header"
      ref={ref}
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="stretch"
      bg={colors.blue}
      overflow="hidden"
      borderBottom={`4px solid ${colors.ink}`}
    >
      <HeroPosterBackdrop />

      <MotionBox style={{ y, opacity }} position="relative" zIndex={1} w="100%" display="flex">
        <Container maxW="1240px" py={{ base: 28, md: 0 }} px={{ base: 4, md: 8 }} w="full">
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align={{ base: 'stretch', lg: 'center' }}
            justify="space-between"
            gap={{ base: 10, lg: 12 }}
            minH={{ lg: '100vh' }}
            pt={{ base: 4, lg: 16 }}
            pb={{ base: 10, lg: 16 }}
          >
            <VStack
              flex={1}
              align={{ base: 'flex-start', lg: 'flex-start' }}
              spacing={6}
              maxW={{ lg: '58%' }}
            >
              <Text
                fontFamily="condensed"
                fontWeight={700}
                letterSpacing="0.14em"
                textTransform="uppercase"
                fontSize="sm"
                color={colors.yellow}
                border={`2px solid ${colors.yellow}`}
                px={3}
                py={1}
              >
                Software Engineer · NYC / Boston
              </Text>

              <Box>
                <Text
                  as="h1"
                  fontFamily="heading"
                  fontSize={{ base: '4.6rem', sm: '6rem', md: '7.5rem', lg: '8.5rem' }}
                  lineHeight={0.9}
                  color={colors.paper}
                  letterSpacing="0.02em"
                  textShadow={`6px 6px 0 ${colors.yellow}, 12px 12px 0 ${colors.red}`}
                  textTransform="uppercase"
                >
                  Abrar
                </Text>
                <Text
                  as="span"
                  display="block"
                  fontFamily="heading"
                  fontSize={{ base: '4.6rem', sm: '6rem', md: '7.5rem', lg: '8.5rem' }}
                  lineHeight={0.9}
                  color={colors.yellow}
                  letterSpacing="0.02em"
                  textShadow={`6px 6px 0 ${colors.ink}`}
                  textTransform="uppercase"
                  mt={1}
                >
                  Nafiu
                </Text>
              </Box>

              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={colors.paper}
                maxW="520px"
                lineHeight={1.45}
                fontWeight={500}
              >
                CS at Northeastern. Most recently a Software Engineering Intern at Spotify —
                shipping gRPC services, React UIs, and multi-agent systems.
              </Text>

              <HStack spacing={4} flexWrap="wrap" pt={1}>
                <Button
                  as={Link}
                  href="/#projects"
                  size="lg"
                  rightIcon={<FaArrowRight />}
                  _hover={{ textDecoration: 'none' }}
                >
                  View Projects
                </Button>
                <Button
                  as={Link}
                  href="/#contact"
                  size="lg"
                  variant="outline"
                  color={colors.paper}
                  borderColor={colors.paper}
                  boxShadow={`4px 4px 0 ${colors.ink}`}
                  _hover={{
                    bg: colors.paper,
                    color: colors.ink,
                    textDecoration: 'none',
                    transform: 'translate(-2px, -2px)',
                    boxShadow: `6px 6px 0 ${colors.ink}`,
                  }}
                >
                  Get in Touch
                </Button>
              </HStack>

              <HStack spacing={5} pt={2}>
                {[
                  { href: 'https://github.com/abrarnafiu', Icon: FaGithub, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/abrar-nafiu/', Icon: FaLinkedin, label: 'LinkedIn' },
                  { href: 'mailto:abrarnafiu@abrarnafiu.com', Icon: FaEnvelope, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    isExternal={label !== 'Email'}
                    color={colors.paper}
                    opacity={0.9}
                    _hover={{ color: colors.yellow, opacity: 1 }}
                    aria-label={label}
                  >
                    <Icon size={22} />
                  </Link>
                ))}
              </HStack>
            </VStack>

            <Box
              position="relative"
              flexShrink={0}
              alignSelf={{ base: 'center', lg: 'center' }}
              w={{ base: '260px', sm: '320px', md: '380px' }}
            >
              <Box
                position="absolute"
                inset={0}
                transform="translate(10px, 10px)"
                bg={colors.yellow}
                border={`3px solid ${colors.ink}`}
                zIndex={0}
              />
              <MotionImage
                src={heroImage}
                alt="Abrar Nafiu"
                w="full"
                aspectRatio={1}
                objectFit="cover"
                objectPosition="center 18%"
                border={`3px solid ${colors.ink}`}
                position="relative"
                zIndex={1}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
              />
            </Box>
          </Flex>
        </Container>
      </MotionBox>
    </Box>
  )
}
