import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary:{
            main : "#336389",
            light:"skyblue" 
        },
      
        
    },
    typography:{
        fontFamily : "Poppins,sans-serif",
        // fontFamily : "Montserrat,sans-serif",
    },
    components:{
        MuiTableCell:{
            styleOverrides:{
                root:{
                    textAlign : "center",
                }
            }
        },
        MuiTextField:{
            styleOverrides:{
                root:{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#61DBFB', // Default border color
                        },
                        '&:hover fieldset': {
                          borderColor: 'lightblue', // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#61DBFB', // Border color when focused
                        },
                      },
                      '& input': {
                        color: 'white', // Text color
                      },
                      '& .MuiInputLabel-root': {
                        color: 'white', // Label color
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#61DBFB', // Label color when focused
                      },
                      '& .MuiInputBase-input': {
                        color: 'white', // Text color for single-line TextField
                      },
                      '& .MuiInputBase-inputMultiline': {
                        color: 'white', // Text color for multiline TextField (textarea)
                      },
                }
            }
        }
        
    }

    
    
    
    
    
})