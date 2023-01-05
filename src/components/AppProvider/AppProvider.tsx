import { BrowserRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function AppProvider({ children }: Props): JSX.Element {
  return <BrowserRouter>{children}</BrowserRouter>;
}
