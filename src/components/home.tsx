import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import PublicIcon from '@mui/icons-material/Public';
import iza from '../assets/liza3.png'
import Login from '../components/login'



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function App() {
  const [openLogin, setOpenLogin] = useState(false);
  const handleLoginClick = () => {
    setOpenLogin(true);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={0}
       
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography className='logoName' variant="h6" color="inherit"  sx={{ flexGrow: 1 }}>
          LizaLearn
          </Typography>
          <nav className='linksNavbar'>
            
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              className='link'
              underline="none"
            >
              <PublicIcon />
            </Link>
          </nav>
          <Button onClick={handleLoginClick} className='loginButton' href="#" color='error' variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Log in
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="md" component="main">
      <Grid className='gridContainer' container spacing={5} alignItems="flex-end" display='flex' wrap='wrap' justifyContent='center'>
        <Grid item xs={6} sm={6} md={6}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Prazer, Liza!
        </Typography>
        <Typography className='description' variant="h5" align="center" color="text.secondary" component="p">
          Te ajudarei a aprender novos idiomas com recursos rápidos de forma simples e divertida!
        </Typography>
        <Grid container spacing={5} alignItems="flex-end" display='flex' justifyContent='center'>
        <Button className='loginButton' href="#" color='error' variant="outlined" sx={{ my: 1, mx: 1.5, mt:8 }}>
            Conhecer
          </Button>
          </Grid>
        </Grid>

     
        <Grid item xs={6} sm={6} md={6} mt={8}>
        <Grid container spacing={4} justifyContent="space-evenly">
         <img src={iza} alt="izarealescola" className='izaLogo'/>
        </Grid>
        </Grid>
          </Grid>
       
      </Container>

      <Login  open={openLogin} onClose={() => setOpenLogin(false)}  />
  
    </ThemeProvider>
  );
}