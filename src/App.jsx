import Home from "./pages/Home"
import Blog from "./pages/Blog"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blog />} />
      </Routes>
    </Router>
  )
}