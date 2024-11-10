import type { FC } from "react";
import Startcategory from "./Startcategory";
import Startvideo from "./Startvideo";
import { useReduxDispatch } from "../../hooks/useredux";
// import Start from "./Startvideo2";

const StartCourse: FC = () => {
	const dispatch = useReduxDispatch();

	return (
		<div className="flex m-auto w-[80%] mt-6 gap-12">
			<Startcategory />
			<Startvideo />
			{/* <Start /> */}
		</div>
	);
};

export default StartCourse;
