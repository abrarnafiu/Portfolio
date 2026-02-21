import { Box, Container, Heading, Text, VStack, HStack, Link, Image, Skeleton } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaFutbol, FaBasketballBall } from 'react-icons/fa'
import { SiSpotify } from 'react-icons/si'

const MotionBox = motion(Box)

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

function SpotifyCard({ apiUrl }: { apiUrl: string }) {
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
      <Box
        p={5}
        borderRadius="16px"
        border="1px solid"
        borderColor="gray.200"
        bg="white"
        transition="all 0.25s ease"
        _hover={{
          borderColor: 'brand.200',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        }}
      >
        <HStack spacing={4}>
          {hasTrack && data.albumArt ? (
            <Image
              src={data.albumArt}
              alt=""
              w="56px"
              h="56px"
              borderRadius="12px"
              objectFit="cover"
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
      </Box>
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

  return (
    <Box py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="1200px">
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
                Teams I root for and what I'm listening to.
              </Text>
            </MotionBox>

            <HStack align="stretch" spacing={6} flexWrap="wrap">
              {/* Chelsea */}
              <MotionBox variants={item} flex={{ base: '1 1 100%', md: '1 1 200px' }} minW={0}>
                <Link
                  href="https://www.chelseafc.com"
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                  display="block"
                  h="full"
                >
                  <Box
                    p={5}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    h="full"
                    transition="all 0.25s ease"
                    _hover={{
                      borderColor: '#034694',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <HStack spacing={4}>
                      <Box
                        w="56px"
                        h="56px"
                        borderRadius="12px"
                        bg="#034694"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <FaFutbol size={28} color="white" />
                      </Box>
                      <VStack align="flex-start" spacing={0}>
                        <Text fontSize="xs" color="gray.500" fontWeight={600}>
                          Soccer
                        </Text>
                        <Text fontWeight={700} color="gray.900" fontSize="lg">
                          Chelsea FC
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </Link>
              </MotionBox>

              {/* Knicks */}
              <MotionBox variants={item} flex={{ base: '1 1 100%', md: '1 1 200px' }} minW={0}>
                <Link
                  href="https://www.nba.com/knicks"
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                  display="block"
                  h="full"
                >
                  <Box
                    p={5}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    h="full"
                    transition="all 0.25s ease"
                    _hover={{
                      borderColor: '#F58426',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <HStack spacing={4}>
                      <Box
                        w="56px"
                        h="56px"
                        borderRadius="12px"
                        bg="#F58426"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <FaBasketballBall size={28} color="white" />
                      </Box>
                      <VStack align="flex-start" spacing={0}>
                        <Text fontSize="xs" color="gray.500" fontWeight={600}>
                          Basketball
                        </Text>
                        <Text fontWeight={700} color="gray.900" fontSize="lg">
                          New York Knicks
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </Link>
              </MotionBox>

              {/* Spotify - takes remaining space or full row on small */}
              <MotionBox variants={item} flex={{ base: '1 1 100%', md: '1 1 280px' }} minW={0}>
                {spotifyApiUrl ? (
                  <SpotifyCard apiUrl={spotifyApiUrl} />
                ) : (
                  <Box
                    p={5}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    transition="all 0.25s ease"
                  >
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
                  </Box>
                )}
              </MotionBox>
            </HStack>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
