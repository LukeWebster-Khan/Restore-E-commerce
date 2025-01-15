import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { ThemeProvider } from "./theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <NavBar />
        <div className="container mx-auto">
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
