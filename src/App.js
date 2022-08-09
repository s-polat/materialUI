import { Person } from "@mui/icons-material";
import { Box, Button, Container, createTheme, Stack, ThemeProvider, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Ridebar from "./components/Ridebar";
import Sidebar from "./components/Sidebar";



function App() {
  const [mode, setMode] = useState("light");

  const darkMode = createTheme({
    palette: {
      mode: mode
    }
  })
 
  return (
    <ThemeProvider theme={darkMode}>

   
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={3} justifyContent="space-between" >
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <Ridebar/>
        
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
