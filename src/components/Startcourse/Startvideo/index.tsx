import { useEffect, type FC } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import axios from "axios";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useredux";
import { setcertificatemodal } from "../../../redux/ModalSlice";
import { useSelector } from "react-redux";
import { setActiveCourse, setSelectedCourse } from "../../../redux/courseSlice";
import { Button, notification } from "antd";
import { useAuthUser } from "react-auth-kit";

// interface curry {
//   curriculum?: [];
//   _id?: string;
//   course_details: {
//     title?: string;
//     video_url?: string;
//   };
//   questions?: {
//     id: {
//       correctAnswer?: number;
//       point?: number;
//       question?: string;
//       questionType?: string;
//       answer?: [];
//     };
//   };
// }
interface general {
	_id?: string;
	image?: string;
	title?: string;
	updated_at?: string;
	created_at?: string;
	curriculum?: demo[];
}
interface demo {
	_id?: number;
	correctAnswer?: string;
	point?: string;
	question?: string;
	questionType?: string;
	answer?: demo2[];

	course_details?: {
		title?: string;
		video_url?: string;
	};
	questions?: {
		correctAnswer?: string;
		point?: string;
		question?: string;
		questionType?: string;
		answer?: demo2[];
	};
}
// interface demo1 {
//   data?: {
//     correctAnswer?: string;
//     point?: string;
//     question?: string;
//     questionType?: string;
//     answer?: demo2[];
//   };
// }
interface demo2 {
	data?: string;
}

const Startvideo: FC = () => {
	const { activeCourse, selectedCourse } = useReduxSelector(
		(state) => state.course,
	);
	const dispatch = useReduxDispatch();
	const user: any = useAuthUser()();

	const { data } = useQuery(
		`/madaniyat-va-sanat/${selectedCourse?.id}`,
		() =>
			axios({
				url: "https://api.babm.uz/courses/madaniyat-va-sanat/1",
			}).then((res) => res.data.data),
		{ refetchOnWindowFocus: false },
	);

	const course = data?.curriculum[activeCourse?.index];

	useEffect(() => {
		const call = async () => {
			try {
				await axios({
					url: "https://api.babm.uz/courses/mark-course",
					method: "POST",
					data: {
						course_id: selectedCourse?.id,
						user_id: user?.id,
						lesson_id: course?.id,
					},
				});
				notification.success({
					message: "Kursni muvofaqqiyatli tugatdingiz",
				});
			} catch (error) {
				notification.error({
					message: "Xatolik yuzberdi",
				});
			}
		};

		if (course?.id) call();
	}, [course]);

	const nextCourse = () => {
		if (data?.curriculum?.length - 1 > activeCourse?.index)
			dispatch(setActiveCourse({ index: activeCourse?.index + 1 }));
	};

	const certificateDowload = () => {
		window.open(
			`https://api.babm.uz/download/certificate?user_id=${user?.id}&course_id=${selectedCourse?.id}`,
			"_blank",
		);
	};

	return (
		<div className=" w-full m-auto mt-3">
			<div className="flex w-[96%] justify-between items-center font-semibold cursor-pointer">
				<h3 className="font-semibold cursor-pointer hover:text-[#46A358]">
					{course?.course_details?.title}
				</h3>
				{!(data?.curriculum?.length - 1 > activeCourse?.index) && (
					<Button onClick={certificateDowload}>Sertifikat yuklab olish</Button>
				)}
				<Button
					onClick={nextCourse}
					className="bg-[#1677FF]  text-white text-sm w-[96px] h-[36px] rounded-md flex justify-center items-center gap-2"
					disabled={!(data?.curriculum?.length - 1 > activeCourse?.index)}
				>
					Oldinga <ArrowRightOutlined />
				</Button>
			</div>

			<iframe
				className="mt-[50px]"
				width="100%"
				height="500"
				src={course?.course_details?.video_url}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			/>

			<div className=" mt-7 bg-[#F5F5F5]">
				{/* {data?.curriculum?.map((value: demo) => (
					<div
						className=" mt-6 group h-[350px] bg-[#f5f5f5] flex justify-center items-center relative cursor-pointer"
						key={value?._id}
					>
						<div className=" group h-[350px] bg-[#f5f5f5]  text-center justify-center items-center relative cursor-pointer">
							<h1 className="mt-7">Test savollari</h1>
							<h3>{String(value?.questions)}</h3>
						</div>
					</div>
				))} */}
				<div className="flex justify-end  mr-4 pb-6 font-semibold cursor-pointer">
					<button className="bg-[#1677FF] text-white mr-2  text-sm  w-[90px] h-[36px] rounded-md flex justify-center items-center gap-2">
						<ArrowLeftOutlined /> Orqaga
					</button>
					<button
						onClick={() => dispatch(setcertificatemodal())}
						className="bg-[#1677FF] text-white text-sm w-[90px] h-[36px] rounded-md flex justify-center items-center gap-2"
					>
						Oldinga <ArrowRightOutlined />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Startvideo;
