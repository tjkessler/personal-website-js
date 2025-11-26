import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import Research from "./pages/Research.jsx"
import Projects from "./pages/Projects.jsx"

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/research" element={<Layout><Research /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
          </Routes>
        </Router>
    )
}

export default App
