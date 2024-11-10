import { Input, Modal, Form, notification } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConfirmModal } from "../../../../redux/ModalSlice";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useSignIn } from "react-auth-kit";

const Confrim = () => {
	const { confirmModal } = useSelector((state: any) => state.modal);
	const signIn = useSignIn();
	const [isLoading, setLoading] = useState<boolean>(false);
	const dispatch = useDispatch();

	const onFinish = async (e: any) => {
		setLoading(true);
		try {
			const {
				data: { data },
			} = await axios({
				url: "https://api.babm.uz/auth/confirm-email",
				method: "POST",
				data: e,
			});

			console.log(data);
			localStorage.setItem("token", data.token);

			signIn({
				token: data.token,
				expiresIn: 3600,
				tokenType: "Bearer",
				authState: data.user,
			});

			dispatch(setConfirmModal());
		} catch (error) {
			notification.error({
				message: "Kod xato",
			});
		}

		setLoading(false);
	};

	return (
		<Modal
			open={confirmModal}
			onCancel={() => dispatch(setConfirmModal())}
			footer={false}
		>
			<div className="m-auto w-4/5">
				<h3 className="text-sm  mt-8 font-normal">
					{" "}
					Emailingizdagi kodni kiriting.
				</h3>
				<Form onFinish={onFinish}>
					<Form.Item
						name="code"
						rules={[{ required: true, message: "Kodni kiriting." }]}
					>
						<Input
							className="h-10  mt-3 border border-[#46A358]"
							placeholder="Kod"
							type="text"
						/>
					</Form.Item>

					<button
						type="submit"
						className="bg-[#1677FF] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-11 my-7"
					>
						{isLoading ? <LoadingOutlined /> : "Tasdiqlash"}
					</button>
				</Form>
			</div>
		</Modal>
	);
};

export default Confrim;
