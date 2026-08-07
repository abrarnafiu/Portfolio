import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Image,
  Skeleton,
  SimpleGrid,
} from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaFutbol, FaBasketballBall, FaFilm, FaBook, FaChessKnight } from 'react-icons/fa'
import { SiSpotify } from 'react-icons/si'
import { colors } from '../theme'

const MotionBox = motion(Box)

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

function SpotifyBlock({ apiUrl, topArtists }: { apiUrl: string; topArtists: string[] }) {
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
    return () => {
      cancelled = true
    }
  }, [apiUrl])

  if (loading) {
    return (
      <Box p={5} h="full" border={`3px solid ${colors.ink}`} bg={colors.paper}>
        <HStack spacing={4}>
          <Skeleton w="52px" h="52px" borderRadius={0} />
          <VStack align="flex-start" spacing={2} flex={1}>
            <Skeleton h="14px" w="120px" />
            <Skeleton h="12px" w="80px" />
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
      h="full"
    >
      <Box
        p={5}
        h="full"
        border={`3px solid ${colors.ink}`}
        bg={colors.paper}
        boxShadow={`4px 4px 0 ${colors.ink}`}
        transition="transform 0.15s ease, box-shadow 0.15s ease"
        _hover={{
          transform: 'translate(-2px, -2px)',
          boxShadow: `6px 6px 0 ${colors.ink}`,
        }}
      >
        <VStack align="flex-start" spacing={3}>
          <HStack spacing={4} w="full">
            {hasTrack && data.albumArt ? (
              <Image
                src={data.albumArt}
                alt=""
                w="52px"
                h="52px"
                objectFit="cover"
                border={`2px solid ${colors.ink}`}
                flexShrink={0}
              />
            ) : (
              <Box
                w="52px"
                h="52px"
                bg={colors.ink}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <SiSpotify size={26} color={colors.yellow} />
              </Box>
            )}
            <VStack align="flex-start" spacing={0} flex={1} minW={0}>
              <Text
                fontFamily="condensed"
                fontSize="xs"
                fontWeight={700}
                letterSpacing="0.1em"
                textTransform="uppercase"
                color={colors.muted}
              >
                Now playing
              </Text>
              {hasTrack ? (
                <>
                  <Text fontWeight={700} noOfLines={1}>
                    {data.title}
                  </Text>
                  <Text fontSize="sm" color={colors.muted} noOfLines={1}>
                    {data.artist}
                  </Text>
                </>
              ) : (
                <Text fontSize="sm" color={colors.muted}>
                  Nothing playing right now
                </Text>
              )}
            </VStack>
          </HStack>
          <Box w="full">
            <Text
              fontFamily="condensed"
              fontSize="xs"
              fontWeight={700}
              letterSpacing="0.1em"
              textTransform="uppercase"
              color={colors.muted}
              mb={1}
            >
              Top 3 artists
            </Text>
            <Text fontSize="sm" fontWeight={600}>
              {topArtists.join(' · ')}
            </Text>
          </Box>
        </VStack>
      </Box>
    </Link>
  )
}

type Tile = {
  key: string
  href: string
  label: string
  title: string
  detail: string
  Icon: typeof FaFutbol
  bg: string
  fg: string
}

const tiles: Tile[] = [
  {
    key: 'chelsea',
    href: 'https://www.chelseafc.com',
    label: 'Soccer',
    title: 'Chelsea FC',
    detail: `Favorite player: ${INTEREST_DETAILS.favoriteChelseaPlayer}`,
    Icon: FaFutbol,
    bg: colors.blue,
    fg: colors.paper,
  },
  {
    key: 'knicks',
    href: 'https://www.nba.com/knicks',
    label: 'Basketball',
    title: 'New York Knicks',
    detail: `Favorite Knick: ${INTEREST_DETAILS.favoriteKnick}`,
    Icon: FaBasketballBall,
    bg: colors.yellow,
    fg: colors.ink,
  },
  {
    key: 'films',
    href: 'https://letterboxd.com/abrarnafiu/',
    label: 'Films',
    title: 'Letterboxd',
    detail: INTEREST_DETAILS.topMovies.join(' · '),
    Icon: FaFilm,
    bg: colors.red,
    fg: colors.paper,
  },
  {
    key: 'books',
    href: 'https://www.goodreads.com/user/show/199017465-abrar-nafiu',
    label: 'Books',
    title: 'Goodreads',
    detail: INTEREST_DETAILS.topBooks.join(' · '),
    Icon: FaBook,
    bg: colors.ink,
    fg: colors.yellow,
  },
  {
    key: 'chess',
    href: INTEREST_DETAILS.chessProfileUrl,
    label: 'Chess',
    title: INTEREST_DETAILS.chessLabel,
    detail: 'Play me or check out my profile.',
    Icon: FaChessKnight,
    bg: colors.paper,
    fg: colors.ink,
  },
]

export const Interests = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const spotifyApiUrl = import.meta.env.VITE_SPOTIFY_NOW_PLAYING_URL || ''

  return (
    <Box
      as="section"
      aria-labelledby="interests-heading"
      py={{ base: 16, md: 24 }}
      bg={colors.yellow}
      borderBottom={`4px solid ${colors.ink}`}
      position="relative"
    >
      <Container maxW="1240px" px={{ base: 4, md: 8 }}>
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <Text
            fontFamily="condensed"
            fontWeight={700}
            letterSpacing="0.14em"
            textTransform="uppercase"
            fontSize="sm"
            color={colors.red}
            mb={2}
          >
            03 — Off the Keyboard
          </Text>
          <Heading
            as="h2"
            id="interests-heading"
            fontSize={{ base: '3xl', md: '5xl' }}
            textShadow={`4px 4px 0 ${colors.paper}`}
            lineHeight={1.05}
          >
            INTERESTS
          </Heading>
          <Text color={colors.ink} mt={3} maxW="520px" fontSize="lg" opacity={0.85}>
            What I care about when I&apos;m not shipping code.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5} mt={10}>
          {tiles.map((tile, i) => (
            <MotionBox
              key={tile.key}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <Link href={tile.href} isExternal _hover={{ textDecoration: 'none' }} display="block" h="full">
                <Box
                  p={5}
                  h="full"
                  minH="160px"
                  bg={tile.bg}
                  color={tile.fg}
                  border={`3px solid ${colors.ink}`}
                  boxShadow={`4px 4px 0 ${colors.ink}`}
                  transition="transform 0.15s ease, box-shadow 0.15s ease"
                  _hover={{
                    transform: 'translate(-3px, -3px)',
                    boxShadow: `7px 7px 0 ${colors.ink}`,
                  }}
                >
                  <HStack spacing={4} mb={4} align="flex-start">
                    <Box
                      w="48px"
                      h="48px"
                      border={`2px solid ${tile.fg}`}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <tile.Icon size={22} />
                    </Box>
                    <VStack align="flex-start" spacing={0}>
                      <Text
                        fontFamily="condensed"
                        fontSize="xs"
                        fontWeight={700}
                        letterSpacing="0.12em"
                        textTransform="uppercase"
                        opacity={0.8}
                      >
                        {tile.label}
                      </Text>
                      <Text fontFamily="heading" fontSize="xl" lineHeight={1.1}>
                        {tile.title}
                      </Text>
                    </VStack>
                  </HStack>
                  <Text fontSize="sm" lineHeight={1.45} opacity={0.95}>
                    {tile.detail}
                  </Text>
                </Box>
              </Link>
            </MotionBox>
          ))}

          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {spotifyApiUrl ? (
              <SpotifyBlock apiUrl={spotifyApiUrl} topArtists={INTEREST_DETAILS.topArtists} />
            ) : (
              <Box
                p={5}
                h="full"
                minH="160px"
                bg={colors.paper}
                border={`3px solid ${colors.ink}`}
                boxShadow={`4px 4px 0 ${colors.ink}`}
              >
                <HStack spacing={4} mb={3}>
                  <Box
                    w="48px"
                    h="48px"
                    bg={colors.ink}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <SiSpotify size={22} color={colors.yellow} />
                  </Box>
                  <VStack align="flex-start" spacing={0}>
                    <Text
                      fontFamily="condensed"
                      fontSize="xs"
                      fontWeight={700}
                      letterSpacing="0.12em"
                      textTransform="uppercase"
                      color={colors.muted}
                    >
                      Music
                    </Text>
                    <Text fontFamily="heading" fontSize="xl">
                      Spotify
                    </Text>
                  </VStack>
                </HStack>
                <Text
                  fontFamily="condensed"
                  fontSize="xs"
                  fontWeight={700}
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  color={colors.muted}
                  mb={1}
                >
                  Top 3 artists
                </Text>
                <Text fontSize="sm" fontWeight={600}>
                  {INTEREST_DETAILS.topArtists.join(' · ')}
                </Text>
              </Box>
            )}
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
