import HomePage from "./Components/HomePage";
import ProfilePage from "./Components/ProfilePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/user/:id" element={<ProfilePage />}></Route>
        <Route path="*" element={<h2>Page Not Found</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
