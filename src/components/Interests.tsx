import { Box, Container, Heading, Text, VStack, HStack, Link, Image, Skeleton, SimpleGrid } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaFutbol, FaBasketballBall, FaFilm, FaBook, FaChessKnight } from 'react-icons/fa'
import { SiSpotify } from 'react-icons/si'

const MotionBox = motion(Box)

// Edit these to your own favorites
const INTEREST_DETAILS = {
  favoriteKnick: 'Jalen Brunson',
  favoriteChelseaPlayer: 'Cole Palmer',
  topBooks: ['Metamorphisis', 'Handmaids Tale', 'In to the Wild'],
  topMovies: ['V for Vendetta', 'Fight Club', 'Parasite'],
  topArtists: ['Brockhampton', 'Daniel Caesar', 'Travis Scott'],
  chessProfileUrl: 'https://www.chess.com/member/abrarnafiu54321',
  chessLabel: 'Chess.com',
}

interface NowPlaying {
  isPlaying: boolean
  title?: string
  artist?: string
  albumArt?: string
  trackUrl?: string
}

async function fetchNowPlaying(apiUrl: string): Promise<NowPlaying | null> {
  try {
    const res = await fetch(apiUrl)
    if (!res.ok) return null
    const data = await res.json()
    return {
      isPlaying: !!data.isPlaying,
      title: data.title,
      artist: data.artist,
      albumArt: data.albumArt,
      trackUrl: data.trackUrl,
    }
  } catch {
    return null
  }
}

function SpotifyCard({ apiUrl, topArtists }: { apiUrl: string; topArtists: string[] }) {
  const [data, setData] = useState<NowPlaying | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchNowPlaying(apiUrl)
      .then((d) => {
        if (!cancelled) setData(d)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [apiUrl])

  if (loading) {
    return (
      <Box
        p={5}
        borderRadius="16px"
        border="1px solid"
        borderColor="gray.200"
        bg="white"
        transition="all 0.25s ease"
      >
        <HStack spacing={4}>
          <Skeleton w="56px" h="56px" borderRadius="12px" />
          <VStack align="flex-start" spacing={2} flex={1}>
            <Skeleton h="16px" w="120px" />
            <Skeleton h="14px" w="80px" />
          </VStack>
        </HStack>
      </Box>
    )
  }

  const hasTrack = data?.isPlaying && data?.title

  return (
    <Link
      href={data?.trackUrl || 'https://open.spotify.com/user/abrarnafiu'}
      isExternal
      _hover={{ textDecoration: 'none' }}
      display="block"
    >
      <MotionBox
        p={5}
        borderRadius="16px"
        border="1px solid"
        borderColor="gray.200"
        bg="white"
        whileHover={{
          y: -4,
          boxShadow: hasTrack
            ? '0 16px 40px rgba(29, 185, 84, 0.15)'
            : '0 12px 32px rgba(0, 0, 0, 0.08)',
          borderColor: 'brand.300',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <VStack align="flex-start" spacing={3}>
          <HStack spacing={4} w="full">
            {hasTrack && data.albumArt ? (
              <Image
                src={data.albumArt}
                alt=""
                w="56px"
                h="56px"
                borderRadius="12px"
                objectFit="cover"
                flexShrink={0}
              />
            ) : (
              <Box
                w="56px"
                h="56px"
                borderRadius="12px"
                bg="gray.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <SiSpotify size={28} color="#1DB954" />
              </Box>
            )}
            <VStack align="flex-start" spacing={0} flex={1} minW={0}>
              <Text fontSize="xs" color="gray.500" fontWeight={600}>
                Now playing on Spotify
              </Text>
              {hasTrack ? (
                <>
                  <Text fontWeight={600} color="gray.900" fontSize="sm" noOfLines={1}>
                    {data.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600" noOfLines={1}>
                    {data.artist}
                  </Text>
                </>
              ) : (
                <Text fontSize="sm" color="gray.500">
                  Nothing playing right now
                </Text>
              )}
            </VStack>
            <SiSpotify size={20} color="#1DB954" />
          </HStack>
          {topArtists.length > 0 && (
            <Box w="full">
              <Text fontSize="xs" color="gray.500" fontWeight={600} mb={1}>
                Top 3 artists
              </Text>
              <Text fontSize="sm" color="gray.700">
                {topArtists.join(' · ')}
              </Text>
            </Box>
          )}
        </VStack>
      </MotionBox>
    </Link>
  )
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export const Interests = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const spotifyApiUrl = import.meta.env.VITE_SPOTIFY_NOW_PLAYING_URL || ''

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <Box py={{ base: 16, md: 24 }} bg="white" position="relative" overflow="hidden">
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(ellipse 70% 40% at 50% 50%, rgba(99, 102, 241, 0.05), transparent 60%)"
        pointerEvents="none"
      />
      <Container maxW="1200px" position="relative" zIndex={1}>
        <MotionBox
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <VStack align="stretch" spacing={10}>
            <MotionBox variants={item}>
              <Text
                fontSize="sm"
                fontWeight={600}
                color="brand.600"
                letterSpacing="0.05em"
                textTransform="uppercase"
                mb={2}
              >
                Off the keyboard
              </Text>
              <Heading size="xl" color="gray.900" fontWeight={700} letterSpacing="-0.02em">
                Interests
              </Heading>
              <Text color="gray.600" mt={2} maxW="560px">
                What I'm interested in.
              </Text>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6} w="full">
              {/* Chelsea */}
              <MotionBox
                variants={cardVariants}
                minW={0}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Link
                  href="https://www.chelseafc.com"
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                  display="block"
                  h="full"
                >
                  <MotionBox
                    p={5}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    h="full"
                    whileHover={{
                      boxShadow: '0 20px 50px rgba(3, 70, 148, 0.2)',
                      borderColor: '#034694',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <VStack align="flex-start" spacing={3}>
                      <HStack spacing={4}>
                        <MotionBox
                          w="56px"
                          h="56px"
                          borderRadius="12px"
                          bg="#034694"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                          whileHover={{ rotate: 5, transition: { duration: 0.3 } }}
                        >
                          <FaFutbol size={28} color="white" />
                        </MotionBox>
                        <VStack align="flex-start" spacing={0}>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>
                            Soccer
                          </Text>
                          <Text fontWeight={700} color="gray.900" fontSize="lg">
                            Chelsea FC
                          </Text>
                        </VStack>
                      </HStack>
                      <Text fontSize="sm" color="gray.600">
                        <Text as="span" fontWeight={600} color="gray.700">Favorite player:</Text>{' '}
                        {INTEREST_DETAILS.favoriteChelseaPlayer}
                      </Text>
                    </VStack>
                  </MotionBox>
                </Link>
              </MotionBox>

              {/* Knicks */}
              <MotionBox
                variants={cardVariants}
                minW={0}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Link
                  href="https://www.nba.com/knicks"
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                  display="block"
                  h="full"
                >
                  <MotionBox
                    p={5}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    h="full"
                    whileHover={{
                      boxShadow: '0 20px 50px rgba(245, 132, 38, 0.2)',
                      borderColor: '#F58426',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <VStack align="flex-start" spacing={3}>
                      <HStack spacing={4}>
                        <MotionBox
                          w="56px"
                          h="56px"
                          borderRadius="12px"
                          bg="#F58426"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                          whileHover={{ rotate: -5, transition: { duration: 0.3 } }}
                        >
                          <FaBasketballBall size={28} color="white" />
                        </MotionBox>
                        <VStack align="flex-start" spacing={0}>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>
                            Basketball
                          </Text>
                          <Text fontWeight={700} color="gray.900" fontSize="lg">
                            New York Knicks
                          </Text>
                        </VStack>
                      </HStack>
                      <Text fontSize="sm" color="gray.600">
                        <Text as="span" fontWeight={600} color="gray.700">Favorite Knick:</Text>{' '}
                        {INTEREST_DETAILS.favoriteKnick}
                      </Text>
                    </VStack>
                  </MotionBox>
                </Link>
              </MotionBox>

              {/* Spotify */}
              <MotionBox variants={cardVariants} minW={0}>
                {spotifyApiUrl ? (
                  <SpotifyCard apiUrl={spotifyApiUrl} topArtists={INTEREST_DETAILS.topArtists} />
                ) : (
                  <Box
                    p={5}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    transition="all 0.25s ease"
                  >
                    <VStack align="flex-start" spacing={3}>
                      <HStack spacing={4}>
                        <Box
                          w="56px"
                          h="56px"
                          borderRadius="12px"
                          bg="gray.100"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <SiSpotify size={28} color="#1DB954" />
                        </Box>
                        <VStack align="flex-start" spacing={0} flex={1}>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>
                            Spotify
                          </Text>
                          <Text fontSize="sm" color="gray.500">
                            Set up the Now Playing API to show what you're listening to.
                          </Text>
                        </VStack>
                      </HStack>
                      <Box w="full">
                        <Text fontSize="xs" color="gray.500" fontWeight={600} mb={1}>
                          Top 3 artists
                        </Text>
                        <Text fontSize="sm" color="gray.700">
                          {INTEREST_DETAILS.topArtists.join(' · ')}
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                )}
              </MotionBox>

              {/* Letterboxd */}
              <MotionBox
                variants={cardVariants}
                minW={0}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Link
                  href="https://letterboxd.com/abrarnafiu/"
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                  display="block"
                  h="full"
                >
                  <MotionBox
                    p={5}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    h="full"
                    whileHover={{
                      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
                      borderColor: 'gray.400',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <VStack align="flex-start" spacing={3}>
                      <HStack spacing={4}>
                        <MotionBox
                          w="56px"
                          h="56px"
                          borderRadius="12px"
                          bg="#FFB800"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                          whileHover={{ rotate: 5, transition: { duration: 0.3 } }}
                        >
                          <FaFilm size={28} color="white" />
                        </MotionBox>
                        <VStack align="flex-start" spacing={0}>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>
                            Films
                          </Text>
                          <Text fontWeight={700} color="gray.900" fontSize="lg">
                            Letterboxd
                          </Text>
                        </VStack>
                      </HStack>
                      <Box w="full">
                        <Text fontSize="xs" color="gray.500" fontWeight={600} mb={1}>
                          Top 3 movies
                        </Text>
                        <Text fontSize="sm" color="gray.700">
                          {INTEREST_DETAILS.topMovies.join(' · ')}
                        </Text>
                      </Box>
                    </VStack>
                  </MotionBox>
                </Link>
              </MotionBox>

              {/* Goodreads */}
              <MotionBox
                variants={cardVariants}
                minW={0}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Link
                  href="https://www.goodreads.com/user/show/199017465-abrar-nafiu"
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                  display="block"
                  h="full"
                >
                  <MotionBox
                    p={5}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    h="full"
                    whileHover={{
                      boxShadow: '0 20px 50px rgba(87, 121, 91, 0.2)',
                      borderColor: '#57795b',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <VStack align="flex-start" spacing={3}>
                      <HStack spacing={4}>
                        <MotionBox
                          w="56px"
                          h="56px"
                          borderRadius="12px"
                          bg="#57795b"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                          whileHover={{ rotate: -5, transition: { duration: 0.3 } }}
                        >
                          <FaBook size={28} color="white" />
                        </MotionBox>
                        <VStack align="flex-start" spacing={0}>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>
                            Books
                          </Text>
                          <Text fontWeight={700} color="gray.900" fontSize="lg">
                            Goodreads
                          </Text>
                        </VStack>
                      </HStack>
                      <Box w="full">
                        <Text fontSize="xs" color="gray.500" fontWeight={600} mb={1}>
                          Top 3 books
                        </Text>
                        <Text fontSize="sm" color="gray.700">
                          {INTEREST_DETAILS.topBooks.join(' · ')}
                        </Text>
                      </Box>
                    </VStack>
                  </MotionBox>
                </Link>
              </MotionBox>

              {/* Chess */}
              <MotionBox
                variants={cardVariants}
                minW={0}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Link
                  href={INTEREST_DETAILS.chessProfileUrl}
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                  display="block"
                  h="full"
                >
                  <MotionBox
                    p={5}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    h="full"
                    whileHover={{
                      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)',
                      borderColor: 'gray.500',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <VStack align="flex-start" spacing={3}>
                      <HStack spacing={4}>
                        <MotionBox
                          w="56px"
                          h="56px"
                          borderRadius="12px"
                          bg="gray.800"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                          whileHover={{ rotate: 5, transition: { duration: 0.3 } }}
                        >
                          <FaChessKnight size={28} color="white" />
                        </MotionBox>
                        <VStack align="flex-start" spacing={0}>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>
                            Chess
                          </Text>
                          <Text fontWeight={700} color="gray.900" fontSize="lg">
                            {INTEREST_DETAILS.chessLabel}
                          </Text>
                        </VStack>
                      </HStack>
                      <Text fontSize="sm" color="gray.600">
                        Play me or check out my profile.
                      </Text>
                    </VStack>
                  </MotionBox>
                </Link>
              </MotionBox>
            </SimpleGrid>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
