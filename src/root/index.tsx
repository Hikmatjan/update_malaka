import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import StartCourse from "../components/Startcourse";
import Certication from "../components/Modalvisibility/Modals/Certificate";
import Profile from "../components/Profile";

const Root: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route path="/" element={<Home />} />
				<Route path="/:course_name" element={<StartCourse />} />
				<Route path={"/account"} element={<Profile />} />
			</Route>
		</Routes>
	);
};

export default Root;
