import { AppProvider } from "./components";
import { AppRouter } from "./routes";

function App(): JSX.Element {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
