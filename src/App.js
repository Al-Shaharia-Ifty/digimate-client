import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import AOS from "aos";
import "aos/dist/aos.css";
import SignUp from "./Pages/Login/SignUp";
import ResetPassword from "./Pages/Login/ResetPassword";
import RequireAuth from "./Pages/Login/RequireAuth";
import ProductDetails from "./Components/ProductDetails";
import MyProfile from "./Pages/Services/MyProfile";
import MyOrder from "./Pages/Services/MyOrder";

AOS.init();
function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/services"
          element={
            <RequireAuth>
              <Services />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="orders" element={<MyOrder />} />
        </Route>
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset_pass" element={<ResetPassword />} />
      </Routes>
    </Navbar>
  );
}

export default App;
