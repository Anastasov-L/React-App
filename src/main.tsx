import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
       <App/> 
    </ChakraProvider>
    
    
  </StrictMode>,
)
