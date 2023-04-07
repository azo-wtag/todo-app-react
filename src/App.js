import { Routes, Route } from "react-router-dom";
import "styles/app.scss";
import Home from "pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-violet3">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
