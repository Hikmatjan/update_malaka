/* eslint-disable no-tabs */
import { useState, type FC } from "react";
import { Divider, Form, Input } from "antd";
import {
	GoogleOutlined,
	LoadingOutlined,
	FacebookOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useReduxDispatch } from "../../../../hooks/useredux";
import {
	setConfirmModal,
	setauthModal,
	setmessagemodal,
} from "../../../../redux/ModalSlice";
import useNotification from "antd/es/notification/useNotification";

const Regisration: FC = () => {
	const notify = useNotification();
	const dispatch = useReduxDispatch();
	const signIn = useSignIn();
	const [isLoading, setLoading] = useState<boolean>(false);

	const onFinish = async (a: {
		email: string;
		password: string;
		code: string;
	}) => {
		setLoading(true);
		await axios({
			url: "https://api.babm.uz/auth/sign-up",
			method: "POST",
			data: a,
		});

		dispatch(setauthModal());
		dispatch(setConfirmModal());

		setLoading(false);
	};

	return (
		<div className="m-auto w-4/5">
			<h3 className="text-sm  mt-8 font-normal">
				{" "}
				Enter your email and password to register.
			</h3>
			<Form onFinish={onFinish}>
				<Form.Item
					name="email"
					rules={[{ required: true, message: "Emailingizni kiriting" }]}
				>
					<Input
						className="h-10  mt-3 border border-[#46A358]"
						placeholder=" email adress"
						type="email"
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: "Parolingizni kiriting" }]}
				>
					<Input.Password
						className="h-10  mt-3 border border-[#46A358]"
						placeholder="parol"
						type="password"
					/>
				</Form.Item>
				<button
					type="submit"
					className="bg-[#1677FF] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-11 my-7"
				>
					{isLoading ? <LoadingOutlined /> : "Register"}
				</button>
			</Form>
			<Divider>Or register with</Divider>
			<button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-10 w-full rounded-md mb-4 pl-3 ">
				{" "}
				<GoogleOutlined /> Register with Google
			</button>
			<button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-10 w-full rounded-md mb-4 pl-3 ">
				{" "}
				<FacebookOutlined /> Register with Facebook
			</button>
		</div>
	);
};

export default Regisration;
