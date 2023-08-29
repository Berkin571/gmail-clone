import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { EmailList, Mail } from "./pages";

import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/Mail" element={<Mail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
