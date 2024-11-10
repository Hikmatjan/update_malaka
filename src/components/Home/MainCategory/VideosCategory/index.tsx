import type { FC } from "react";
import axios from "axios";
import {
	ShoppingOutlined,
	SearchOutlined,
	HeartOutlined,
} from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import useLoader from "../../../../generic/skeleton";
import { useQuery } from "react-query";
import { useReduxDispatch } from "../../../../hooks/useredux";
import { setstartmodal } from "../../../../redux/ModalSlice";
import { setSelectedCourse } from "../../../../redux/courseSlice";
interface DataItemType {
	title?: string;
	created_at?: Date;
	updated_at?: string;
	curriculum?: string;
	_id?: number;
	image?: string;
}

const VideosCategory: FC<DataItemType> = ({ title, _id }) => {
	const [params] = useSearchParams();
	const dispatch = useReduxDispatch();
	const { flowers_loader } = useLoader();

	const courses: string = String(
		params.get("categories") ?? "madaniyat-va-sanat",
	);
	const { data, isLoading } = useQuery(
		`/courses/${courses}`,
		() =>
			axios({
				url: `https://api.babm.uz/courses/${courses}`,
				params: {
					access_token:
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMiw",
				},
			}).then((res) => res.data.data),
		{
			refetchOnWindowFocus: false,
		},
	);

	return (
		<div className="mt-[30px] grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
			{isLoading
				? flowers_loader()
				: data?.map((value: DataItemType) => (
						<div key={value?._id} {...value}>
							<div className="group h-[200px] bg-[#f5f5f5] flex justify-center items-center relative cursor-pointer ">
								<img className="w-fit h-fit" src={value.image} alt="" />
								<div className=" gap-2 absolute bottom-5 hidden group-hover:flex">
									<div
										onClick={() => {
											dispatch(setstartmodal());
											dispatch(setSelectedCourse(value));
										}}
										className=" w-[35px] h-[35px] bg-[#ffffff] rounded-lg flex justify-center items-center text-xl"
									>
										<ShoppingOutlined />
									</div>
									<div className=" w-[35px] h-[35px] bg-[#ffffff] rounded-lg flex justify-center items-center text-xl">
										<HeartOutlined />
									</div>
									<div className=" w-[35px] h-[35px] bg-[#ffffff] rounded-lg flex justify-center items-center text-xl">
										<SearchOutlined />
									</div>
								</div>
							</div>
							<div className="flex justify-items-end">
								<h3 className="font-bold cursor-pointer hover:text-[#46A358] mt-3">
									{value.title}
								</h3>
							</div>
						</div>
				  ))}
		</div>
	);
};

export default VideosCategory;
