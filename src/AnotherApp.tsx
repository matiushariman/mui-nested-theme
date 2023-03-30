import { ThemeProvider, createTheme } from "@mui/material/styles";

import { JustButton } from './JustButton';
import { OneMoreApp } from './OneMoreApp';

const theme = createTheme({
    palette: {
            primary: {
            main: '#ff0000',
            }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: '#00ff00'
                }
            }
        }
    }
})
export const AnotherApp = () => {
    return <ThemeProvider theme={theme}><JustButton><OneMoreApp/></JustButton></ThemeProvider>
}