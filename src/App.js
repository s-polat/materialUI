import { Person } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';



function App() {
  const StyledButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.otherColor.main
  }));
  return (
    <div>
      <h1>Hello World</h1>
      <Button></Button>
      <Button variant="text" style={{backgroundColor:"white", color:"purple"}}>Text</Button> {/* //burda kendi style imizi inline olarak verdik */}
      <Button variant="contained" sx={{backgroundColor:"purple", color:"white"}}>Text</Button> {/* //burdada kendi style imizi inline "sx" olarak verdik */}
      <StyledButton variant="contained">Siddik</StyledButton>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" >Outlined</Button>
      <Button startIcon={<Person/>} variant="contained" color="success" >Outlined</Button>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
      <Typography variant="h3" component="p">Hello World</Typography>

      <Button variant="contained" color="otherColor">Customized</Button>

     

    </div>
  );
}

export default App;
