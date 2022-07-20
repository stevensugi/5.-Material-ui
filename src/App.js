import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import {useState} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import {makeStyles, ThemeProvider, createTheme} from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles({
  root: {
    background:'linear-gradient(45deg, #fe6b8b, #ff8e53)',
    border:0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 10,
    }
  },
  // palette: {
  //   primary: {
  //     main: orange[400],
  //   },
  //   secondary: {
  //     main: green[500],
  //   }
  // }
})

function ButtonStyled(){
  const classes = useStyle();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample(){
  const [checked, setChecked] = useState(true)
  return(
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon/>}
            // checkedIcon={<SaveIcon/>}
            onChange={(e)=> setChecked(e.target.checked)}
            color="primary"
            inputProps={{
              'aria-label' : 'secondary checkbox'
            }}
          />}
        label="Testing Checkbox"
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color='secondary'>
              <ToolBar>
                <MenuIcon/>
              </ToolBar>
              <Typography variant='h6'>
                MUI Themeing
              </Typography>
              <Button>
                Login
              </Button>
            </AppBar>
            <Typography variant="h2" component='div'>
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled/>
            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{height: 75, width:'100%', }}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height: 75, width: '100%', }}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height: 75, width: '100%', }}/>
              </Grid>
            </Grid>

            <TextField
              variant='filled'
              color='secondary'
              type='email'
              label='The time'
              placeholder='test@test.com'
            />
            <CheckboxExample/>
            <ButtonGroup size='large' variant='contained' > 
              <Button
                startIcon={<SaveIcon />}
                // style={{
                //   fontSize: 24
                // }}
                color='primary'>
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                // style={{
                //   fontSize: 24
                // }}
                color='secondary'>
                Discard
              </Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
