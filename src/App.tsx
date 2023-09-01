import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { EmailList, Mail } from "./pages";

import "./App.scss";
import { SendMail } from "./components/send-mail/send-mail.component";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./service/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector((state) =>
    selectSendMessageIsOpen(state)
  );

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

          {sendMessageIsOpen && <SendMail />}
        </div>
      </Router>
    </>
  );
}

export default App;
