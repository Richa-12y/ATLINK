import "./App.css";
import { Navbar, SideBar } from "./components";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="aplication-content-container">
        <SideBar />
        <div className="center-container box-shadow ">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
