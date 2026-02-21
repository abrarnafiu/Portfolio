import React from 'react'
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
import { theme } from './theme'

const HomePage = () => (
  <Box w="100%">
    <VStack spacing={0} w="100%" align="stretch">
      <Hero />
      <Box id="experience" bg="white" />
      <Experience />
      <Box id="skills" bg="gray.50" />
      <Skills />
      <Box id="interests" bg="white" />
      <Interests />
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="contact" bg="gray.50" />
      <Contact />
    </VStack>
  </Box>
)

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box bg="white" minH="100vh" color="gray.800">
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
