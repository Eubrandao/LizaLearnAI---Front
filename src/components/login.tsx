import React, { useEffect, FC } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';


import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
  } from '@react-spring/web'

interface LoginProps {
    open: boolean;
    onClose: () => void;
  }

  const AnimatedBox = animated(Box);


const style = {
    position: 'absolute' as 'absolute',
    top: '44%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Login: FC<LoginProps> = ({ open, onClose }) => {
    const styles = useSpring({
        opacity: open ? 1 : 0,
        transform: open ? 'scale(1)' : 'scale(0.5)',
        config: { tension: 200, friction: 20 },
      });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
      
    // useEffect(() => {
    //   if (open) {
    //     // Perform any action you need when the modal is opened
    //   }
    // }, [open]);
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      <Container maxWidth="md" component="main">
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AnimatedBox
        sx={style}
        style={styles}
      >
        
    
        <Box
          sx={style}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

                <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, textTransform:'none' }}
            >
            Log in
            </Button>

            <Typography sx={{fontSize:18}} variant="h5" color="text.secondary" align="center">Ou</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 2, textTransform:'none' }}
            >
                <GoogleIcon sx={{mr:2}}/>
              Continuar com o Google
            </Button>
            <Grid container>
              
              <Grid item>
              <Typography sx={{fontSize:15}} variant="h5" color="text.secondary" align="center">Novo no LizaLearn?</Typography>
                <Link href="#" variant="body2">
                  {"Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </AnimatedBox>
      </Modal>
       
      </Container>
  
    </ThemeProvider>
  );
}
export default Login;