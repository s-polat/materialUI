import { Person } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Ridebar from "./components/Ridebar";
import Sidebar from "./components/Sidebar";



function App() {
  
 
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={3} justifyContent="space-between" >
        <Sidebar/>
        <Feed/>
        <Ridebar/>
        
      </Stack>
      <Add/>
    </Box>
  );
}

export default App;
