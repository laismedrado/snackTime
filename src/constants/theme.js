import { createTheme } from '@material-ui/core/styles';
import { primaryColor, blackColor } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    text: {
      primary: blackColor,
    }
}});