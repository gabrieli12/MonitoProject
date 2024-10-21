import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/largeComponents/Nav";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Header from "./components/largeComponents/Header";
import Login from "./pages/Login";
import FullPage from "./components/largeComponents/FullPage";
import Register from "./pages/Register";
import MoreInfoPetCard from "./pages/MoreInfoPetCard";
import ForgotPass from "./pages/ForgotPass";




export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullPage />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="moreInfo" element={<MoreInfoPetCard />} />
          <Route path="forgotPass" element={<ForgotPass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}