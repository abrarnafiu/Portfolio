import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html': {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: '#ffffff',
        color: 'gray.800',
        fontFamily: '"Inter", system-ui, sans-serif',
        overflowX: 'hidden',
      },
    },
  },
  fonts: {
    heading: '"Inter", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
  },
  colors: {
    brand: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
  },
  shadows: {
    soft: '0 2px 8px rgba(0, 0, 0, 0.04)',
    'soft-lg': '0 4px 20px rgba(0, 0, 0, 0.06)',
    'soft-xl': '0 8px 30px rgba(0, 0, 0, 0.08)',
    glow: '0 0 0 1px rgba(99, 102, 241, 0.2)',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '12px',
        fontWeight: 600,
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'scale(1.02)',
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
          },
          _active: { bg: 'brand.700' },
        },
        outline: {
          borderColor: 'gray.300',
          color: 'gray.700',
          _hover: {
            borderColor: 'brand.400',
            color: 'brand.600',
            bg: 'brand.50',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: 'gray.900',
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecoration: 'none' },
      },
    },
  },
})
