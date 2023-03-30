import { useState } from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { JustButton } from './JustButton';
import { AnotherApp } from './AnotherApp';

const theme = createTheme({
    palette: {
         primary: {
            main: '#556cd6',
         }
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            }
        }
    }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
        <JustButton><AnotherApp/></JustButton>
    </ThemeProvider>
  )
}

export default App
