import { createTheme } from "@mui/material/styles"
import defaultTheme from "./default"



const fonts = {
    typography: {
        fontFamily: 'Shabnam',
    },
    components: {
        MuiScopedCssBaseLine: {
            styleOverrides: {
                root: {
                    fontFamily: 'Shabnam'
                }
            }
        }
    } 
}

const themes = {
    default: createTheme({
        ...defaultTheme, ...fonts
    })
}

export default themes;