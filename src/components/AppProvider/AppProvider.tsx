import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

interface Props {
  children: React.ReactNode;
}

export default function AppProvider({ children }: Props): JSX.Element {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>{children}</BrowserRouter>
    </LocalizationProvider>
  );
}
