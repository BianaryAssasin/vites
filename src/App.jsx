import { Route, Routes } from "react-router-dom";
import Projects from "./pages/projects.jsx";
import Linktree from "./pages/linktree.jsx";
import Home from "./pages/home.jsx";


function App() {
    return <Routes>
        // home route
        <Route path="/" element={<Home />} />

        // others
        <Route path="/projects" element={<Projects />} />
        <Route path="/linktree" element={<Linktree />} />
    </Routes>
}

export default App;