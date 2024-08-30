import Home from "./pages/Home"
import Blog from "./pages/Blog"
import { Provider } from "react-redux";
import { store } from "./app/store"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blogId" element={<Blog />} />
        </Routes>
      </Router>
    </Provider>

  )
}