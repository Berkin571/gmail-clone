import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Sidebar } from "./components";
import { EmailList, Mail } from "./pages";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Sidebar />

          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/Mail" element={<Mail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
