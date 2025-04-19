import React from 'react'
import { ChakraProvider, Box, VStack } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { ProjectDetail } from './components/ProjectDetail'
import { theme } from './theme'

const HomePage = () => (
  <VStack spacing={20} w="full">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </VStack>
)

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box bg="gray.900" minH="100vh" color="white">
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