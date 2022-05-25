import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import PasswordReset from "./Pages/Login/PasswordReset";
import Dashborad from "./Pages/Dashboard/Dashborad";
import Purchase from "./Pages/Purchase/Purchase";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyReview from "./Pages/Dashboard/MyReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import RequireAuth from "./Pages/Login/RequireAuth";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/blog" element={<Blog />}></Route>
				<Route
					path="/purchase/:toolId"
					element={
						<RequireAuth>
							<Purchase />
						</RequireAuth>
					}
				></Route>
				<Route
					path="/dashboard"
					element={
						<RequireAuth>
							<Dashborad />
						</RequireAuth>
					}
				>
					<Route index element={<MyOrder />}></Route>
					<Route path="review" element={<MyReview />}></Route>
					<Route path="profile" element={<MyProfile />}></Route>
					{/* admin */}
					<Route
						path="make-admin"
						element={
							<RequireAdmin>
								<MakeAdmin />
							</RequireAdmin>
						}
					></Route>
				</Route>
				<Route
					path="/payment/:productId"
					element={
						<RequireAuth>
							<Payment />
						</RequireAuth>
					}
				></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/password-reset" element={<PasswordReset />}></Route>
			</Routes>
			<Footer></Footer>
			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
