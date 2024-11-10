import type { FC } from "react";
import { CaretRightFilled } from "@ant-design/icons";
import { useQuery } from "react-query";
import axios from "axios";

import { useDispatch } from "react-redux";
import { setActiveCourse } from "../../../redux/courseSlice";
import { useReduxSelector } from "../../../hooks/useredux";

// interface DataItemType {
//   title?: string;
//   route_path?: string;
//   _id?: string;
//   created_at?: Date;
//   updated_at?: string;
// }

interface coder {
	curriculum?: [];
	_id?: string;
	course_details: {
		title?: string;
		video_url?: string;
	};
}

const Startcategory: FC = () => {
	const dispatch = useDispatch();

	const { activeCourse } = useReduxSelector((state) => state.course);
	const { data } = useQuery(
		`/madaniyat-va-sanat/${1}`,
		() =>
			axios({
				url: "https://api.babm.uz/courses/madaniyat-va-sanat/1",
				params: {
					access_token:
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMiw",
				},
			}).then((res) => res.data.data),
		{ refetchOnWindowFocus: false },
	);

	return (
		<div className="mt-5 min-w-[250px] bg-[#F5F5F5] p-[15px] h-[850px] ">
			<h3 className="font-bold cursor-pointer hover:text-[#46A358]">
				Folklor yunalishi
			</h3>

			{data?.curriculum?.map((value: coder, index: number) => (
				<div
					onClick={() => dispatch(setActiveCourse({ index }))}
					className={`mt-6 group h-[350px] bg-[#f5f5f5] flex justify-center items-center relative cursor-pointer ${
						activeCourse.index === index && "text-[#46A358]"
					}`}
					key={value._id}
				>
					{" "}
					<CaretRightFilled />
					{value?.course_details?.title}
				</div>
			))}

			{/* <h3>3-darslik</h3>
      <h3>4-darslik</h3>
      <h3>5-darslik</h3>
      <h3>6-darslik</h3> */}
		</div>
	);
};

export default Startcategory;
