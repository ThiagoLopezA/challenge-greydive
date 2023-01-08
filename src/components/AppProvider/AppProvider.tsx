import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { theme } from "@/assets";
import { ThemeProvider } from "@mui/material";
import moment from "moment";
interface Props {
  children: React.ReactNode;
}

export default function AppProvider({ children }: Props): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterMoment}
        adapterLocale={moment.locale("es")}
      >
        <BrowserRouter>{children}</BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
