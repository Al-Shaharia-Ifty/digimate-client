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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageOrder from "./Pages/Services/ManageOrder";
import AddProduct from "./Pages/Services/AddProduct";
import AllUser from "./Pages/Services/AllUser";
import ManageProduct from "./Pages/Services/ManageProduct";

AOS.init();
function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        />
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
          <Route path="manageOrder" element={<ManageOrder />} />
          <Route path="add_product" element={<AddProduct />} />
          <Route path="admin" element={<AllUser />} />
          <Route path="manage_product" element={<ManageProduct />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset_pass" element={<ResetPassword />} />
      </Routes>
      <ToastContainer />
    </Navbar>
  );
}

export default App;
