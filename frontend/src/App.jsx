import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/system/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";


function App() {
  //grabbing the state
  const mode = useSelector((state) => state.global.mode);
  //pass to the createTheme function we created
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* reset css add default */}
      </ThemeProvider>
    </div>
  );
}

export default App;
