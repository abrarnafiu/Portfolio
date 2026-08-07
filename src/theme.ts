import { extendTheme } from '@chakra-ui/react'

/**
 * Palette drawn from Zohran Mamdani's campaign identity:
 * royal subway blue, taxi/bodega marigold, cranberry red.
 */
export const colors = {
  blue: '#1B3FFF',
  blueDeep: '#0E28B8',
  yellow: '#F5B800',
  yellowHot: '#FFC933',
  red: '#C8102E',
  redDeep: '#9E0A22',
  ink: '#0B0B0B',
  paper: '#FFFDF6',
  muted: '#3A3A3A',
  line: '#0B0B0B',
}

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: colors.paper,
        color: colors.ink,
        fontFamily: '"Barlow", system-ui, sans-serif',
        overflowX: 'hidden',
        letterSpacing: '0.01em',
      },
      '::selection': {
        bg: colors.yellow,
        color: colors.ink,
      },
      a: {
        color: 'inherit',
      },
    },
  },
  fonts: {
    heading: '"Alfa Slab One", Georgia, serif',
    body: '"Barlow", system-ui, sans-serif',
    display: '"Alfa Slab One", Georgia, serif',
    condensed: '"Barlow Condensed", "Barlow", sans-serif',
  },
  colors: {
    brand: {
      50: '#E8ECFF',
      100: '#C5CEFF',
      200: '#8A9BFF',
      300: '#5C73FF',
      400: '#3A55FF',
      500: colors.blue,
      600: colors.blueDeep,
      700: '#0A1F96',
      800: '#07166E',
      900: '#040E45',
    },
    marigold: {
      400: colors.yellowHot,
      500: colors.yellow,
      600: '#D9A000',
    },
    cranberry: {
      400: '#E01E3A',
      500: colors.red,
      600: colors.redDeep,
    },
    ink: {
      500: colors.ink,
      400: colors.muted,
    },
    paper: {
      500: colors.paper,
    },
  },
  radii: {
    none: '0',
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
    '2xl': '0',
    full: '9999px',
  },
  shadows: {
    hard: `4px 4px 0 ${colors.ink}`,
    'hard-sm': `2px 2px 0 ${colors.ink}`,
    'hard-lg': `6px 6px 0 ${colors.ink}`,
    'hard-yellow': `4px 4px 0 ${colors.yellow}`,
    'hard-red': `4px 4px 0 ${colors.red}`,
    'hard-blue': `4px 4px 0 ${colors.blue}`,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '0',
        fontWeight: 700,
        fontFamily: '"Barlow Condensed", "Barlow", sans-serif',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
      },
      variants: {
        solid: {
          bg: colors.yellow,
          color: colors.ink,
          border: `2px solid ${colors.ink}`,
          boxShadow: `4px 4px 0 ${colors.ink}`,
          _hover: {
            bg: colors.yellowHot,
            transform: 'translate(-2px, -2px)',
            boxShadow: `6px 6px 0 ${colors.ink}`,
            textDecoration: 'none',
          },
          _active: {
            transform: 'translate(2px, 2px)',
            boxShadow: `2px 2px 0 ${colors.ink}`,
          },
        },
        outline: {
          bg: 'transparent',
          color: colors.ink,
          border: `2px solid ${colors.ink}`,
          boxShadow: `4px 4px 0 ${colors.ink}`,
          _hover: {
            bg: colors.paper,
            transform: 'translate(-2px, -2px)',
            boxShadow: `6px 6px 0 ${colors.ink}`,
            textDecoration: 'none',
          },
        },
        blue: {
          bg: colors.blue,
          color: colors.paper,
          border: `2px solid ${colors.ink}`,
          boxShadow: `4px 4px 0 ${colors.ink}`,
          _hover: {
            bg: colors.blueDeep,
            transform: 'translate(-2px, -2px)',
            boxShadow: `6px 6px 0 ${colors.ink}`,
            textDecoration: 'none',
          },
        },
        red: {
          bg: colors.red,
          color: colors.paper,
          border: `2px solid ${colors.ink}`,
          boxShadow: `4px 4px 0 ${colors.ink}`,
          _hover: {
            bg: colors.redDeep,
            transform: 'translate(-2px, -2px)',
            boxShadow: `6px 6px 0 ${colors.ink}`,
            textDecoration: 'none',
          },
        },
      },
      defaultProps: {
        variant: 'solid',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: '"Alfa Slab One", Georgia, serif',
        fontWeight: 400,
        letterSpacing: '0.01em',
        color: colors.ink,
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecoration: 'none' },
      },
    },
  },
})
