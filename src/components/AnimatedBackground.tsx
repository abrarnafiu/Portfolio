import { Box } from '@chakra-ui/react'
import { colors } from '../theme'

/** Diagonal stripe texture — bodega awning / campaign poster energy */
export function StripeField({
  color = colors.ink,
  opacity = 0.07,
}: {
  color?: string
  opacity?: number
}) {
  return (
    <Box
      position="absolute"
      inset={0}
      pointerEvents="none"
      opacity={opacity}
      backgroundImage={`repeating-linear-gradient(
        -45deg,
        ${color},
        ${color} 2px,
        transparent 2px,
        transparent 14px
      )`}
    />
  )
}

/** Hard color blotches instead of soft purple orbs */
export function HeroPosterBackdrop() {
  return (
    <>
      <Box
        position="absolute"
        top={{ base: '8%', md: '12%' }}
        right={{ base: '-8%', md: '4%' }}
        w={{ base: '180px', md: '280px' }}
        h={{ base: '180px', md: '280px' }}
        bg={colors.yellow}
        border={`3px solid ${colors.ink}`}
        transform="rotate(8deg)"
        pointerEvents="none"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom={{ base: '6%', md: '10%' }}
        left={{ base: '-6%', md: '6%' }}
        w={{ base: '120px', md: '200px' }}
        h={{ base: '120px', md: '200px' }}
        bg={colors.red}
        border={`3px solid ${colors.ink}`}
        transform="rotate(-6deg)"
        pointerEvents="none"
        zIndex={0}
      />
      <StripeField color={colors.ink} opacity={0.06} />
    </>
  )
}
