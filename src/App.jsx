import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.css";
import "./App.css";
import Nav from "./components/Nav";
import { AuthStateProvider } from "./context/AuthState";
import Routes from "./Routes";

function App() {
  return (
    <AuthStateProvider>
      <Router>
          <Nav />
          <Routes />
      </Router>
    </AuthStateProvider>
  );
}

export default App;
