import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import Profile from "./views/Profile";
import "./App.css";
import Save from "./views/Save";

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/save" element={<Save />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
