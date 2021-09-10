import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import HeaderMobile from "./components/HeaderMobile";
import Heading from "./components/Heading";
import SidebarDesktop from "./components/SidebarDesktop";
import SlidingMobileSidebar from "./components/SlidingMobileSidebar";
import { useDispatchContext } from "./context/appContext";
import "./style.css";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatchContext();

  const onNoteUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const sleep = (m: number) => new Promise(r => setTimeout(r, m));

  const addNote = () => {
    if (!note || note.trim() === "") {
      setError("Note is found empty");
      return;
    }
    dispatch({ type: "add", note });
    setNote("");
  };

  const closeSidebar = () => setSidebarOpen(false);
  const openSidebar = () => setSidebarOpen(true);

  useEffect(() => {
    sleep(3000).then(() => {
      setError("");
    });
  }, [error, setError]);

  return (
    <Router>
      <div className="h-screen flex overflow-hidden bg-white">
        <SlidingMobileSidebar show={sidebarOpen} onClose={closeSidebar} />
        <SidebarDesktop />
        <div className="flex h-full flex-col justify-between min-w-0 flex-1 overflow-hidden">
          <HeaderMobile openSidebar={openSidebar} />
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex h-full flex-col flex-1 relative z-0 overflow-y-auto focus:outline-none">
              {error && <Error message={error} />}
              <Heading note={note} onUpdate={onNoteUpdate} addNote={addNote} />
              <Footer />
            </main>
          </div>
        </div>
      </div>
      {/* <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/about">About</Route>
      </Switch> */}
    </Router>
  );
};

export default App;
