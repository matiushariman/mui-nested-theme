import { ThemeProvider, createTheme } from "@mui/material/styles";

import { JustButton } from './JustButton';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00ff00',
        }
    }
})
export const OneMoreApp = () => {
    return <ThemeProvider theme={(outerTheme) => ({...theme,...outerTheme, })}><JustButton/></ThemeProvider>
}