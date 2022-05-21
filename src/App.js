import React from "react";
import MainRoutes from "./routes/Routes";
import {GlobalState} from "./global/GlobalState"
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./constants/theme";


export default function App(){
  return(     
    <GlobalState>
      <ThemeProvider theme={theme}>
        <MainRoutes/>
      </ThemeProvider>
    </GlobalState>
    
  )
}
