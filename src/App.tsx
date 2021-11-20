import { ChakraProvider } from "@chakra-ui/react";
import { MainPage } from "./components/MainPage";

import './styles/global.css';


export function App() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  )
}