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

const SectionWithLine: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box borderBottom="1px" borderColor="black" w="100%">
    {children}
  </Box>
)


const HomePage = () => (
  <Box w="100%">
    <VStack spacing={20} w="100%" align="stretch">
      <SectionWithLine><Hero /></SectionWithLine>
      <SectionWithLine><About /></SectionWithLine>
      <SectionWithLine><Skills /></SectionWithLine>
      <SectionWithLine><Projects /></SectionWithLine>
      <SectionWithLine><Contact /></SectionWithLine>
    </VStack>
  </Box>
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