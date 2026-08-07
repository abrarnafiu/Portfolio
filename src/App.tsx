import React, { useMemo } from 'react'
import { ChakraProvider, Box, VStack } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Interests } from './components/Interests'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { ProjectDetail } from './components/ProjectDetail'
import { theme, colors } from './theme'
import { useSeo } from './seo/useSeo'
import { personJsonLd, websiteJsonLd } from './seo/jsonLd'

const HomePage = () => {
  const jsonLd = useMemo(() => [personJsonLd(), websiteJsonLd()], [])

  useSeo({
    path: '/',
    type: 'profile',
    jsonLd,
  })

  return (
    <Box as="main" id="main-content" w="100%">
      <VStack spacing={0} w="100%" align="stretch">
        <Hero />
        <Box id="experience" />
        <Experience />
        <Box id="skills" />
        <Skills />
        <Box id="interests" />
        <Interests />
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="contact" />
        <Contact />
      </VStack>
    </Box>
  )
}

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box bg={colors.paper} minH="100vh" color={colors.ink}>
          <a
            href="#main-content"
            style={{
              position: 'absolute',
              left: '-9999px',
              top: 'auto',
              width: 1,
              height: 1,
              overflow: 'hidden',
              zIndex: 1000,
            }}
            onFocus={(e) => {
              const el = e.currentTarget
              el.style.left = '16px'
              el.style.top = '16px'
              el.style.width = 'auto'
              el.style.height = 'auto'
              el.style.padding = '8px 12px'
              el.style.background = '#F5B800'
              el.style.color = '#0B0B0B'
              el.style.border = '2px solid #0B0B0B'
              el.style.fontFamily = 'Barlow Condensed, sans-serif'
              el.style.fontWeight = '800'
              el.style.letterSpacing = '0.06em'
              el.style.textTransform = 'uppercase'
            }}
            onBlur={(e) => {
              const el = e.currentTarget
              el.style.left = '-9999px'
              el.style.top = 'auto'
              el.style.width = '1px'
              el.style.height = '1px'
              el.style.padding = '0'
            }}
          >
            Skip to content
          </a>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
