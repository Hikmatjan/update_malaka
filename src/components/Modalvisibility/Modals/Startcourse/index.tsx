import type { FC } from "react";
import { Modal, notification } from "antd";
import { setauthModal, setstartmodal } from "../../../../redux/ModalSlice";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useredux";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Startmodal: FC = () => {
	const [params] = useSearchParams();
	const navigate = useNavigate();
	const { startmodal } = useReduxSelector((state) => state.modal);
	const { selectedCourse } = useReduxSelector((state) => state.course);
	const user = useAuthUser()();
	const dispatch = useReduxDispatch();
	const isAuthed: any = useIsAuthenticated()();

	const category: string = String(
		params.get("categories") ?? "madaniyat-va-sanat",
	);

	const startCommand = async () => {
		navigate(`/${category}`);

		try {
			await axios({
				url: "https://api.babm.uz/courses/start-course",
				method: "POST",
				data: {
					category,
					course_id: selectedCourse?.id,
					user_id: user?.id,
				},
			});
		} catch (error) {
			notification.error({ message: "Kursni allaqachon boshlagansiz!" });
		}
	};

	console.log(selectedCourse);

	return (
		<div>
			<Modal
				onCancel={() => dispatch(setstartmodal())}
				open={startmodal}
				footer={false}
			>
				<div className="text-center cursor-pointer hover:text-[#46A358] font-bold font-sans text-lg">
					<h3>Kursni boshlashni xoxlaysizmi?</h3>
					<div className=" mt-7 flex justify-center">
						<button
							onClick={() => {
								if (isAuthed) {
									dispatch(setstartmodal());
									startCommand();
									return;
								}

								dispatch(setstartmodal())
								dispatch(setauthModal());
								// navigate("/madaniyat-va-sanat");
							}}
							className="bg-[#1677FF] text-white mr-2  text-sm  w-[90px] h-[36px] rounded-md flex justify-center items-center gap-2"
						>
							Xa
						</button>
						<button
							onClick={() => {
								dispatch(setstartmodal());
							}}
							className="bg-[#1677FF] text-white text-sm w-[90px] h-[36px] rounded-md flex justify-center items-center gap-2"
						>
							Yoq
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Startmodal;
