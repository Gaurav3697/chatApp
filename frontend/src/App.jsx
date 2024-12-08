import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"



function App() {
  const { authUser } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <Signup />} />
        <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/" element={authUser ? <Chat /> : <Navigate to={"/Login"} />} />
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App
