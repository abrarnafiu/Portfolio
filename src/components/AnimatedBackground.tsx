import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export function HeroAnimatedBackground() {
  return (
    <>
      {/* Animated gradient orbs */}
      <MotionBox
        position="absolute"
        top="-30%"
        right="-15%"
        w="700px"
        h="700px"
        borderRadius="full"
        bg="linear-gradient(135deg, #6366f1 0%, #818cf8 50%, #a5b4fc 100%)"
        opacity={0.25}
        filter="blur(100px)"
        pointerEvents="none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionBox
        position="absolute"
        bottom="-20%"
        left="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="linear-gradient(225deg, #4f46e5 0%, #6366f1 100%)"
        opacity={0.2}
        filter="blur(80px)"
        pointerEvents="none"
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionBox
        position="absolute"
        top="40%"
        left="50%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="linear-gradient(180deg, #c7d2fe 0%, transparent 70%)"
        opacity={0.3}
        filter="blur(60px)"
        pointerEvents="none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Subtle grid */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)"
        backgroundSize="60px 60px"
        pointerEvents="none"
      />
    </>
  )
}

export function SectionAnimatedBackground() {
  return (
    <MotionBox
      position="absolute"
      inset={0}
      backgroundImage="radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.08), transparent)"
      pointerEvents="none"
    />
  )
}
