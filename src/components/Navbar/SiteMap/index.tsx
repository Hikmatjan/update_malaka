import { Modal } from "antd";
import type { FC } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useredux";
import { setSiteModalVisibility,setauthModal } from "../../../redux/ModalSlice";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import {  useNavigate } from "react-router-dom";

const SiteMap: FC = () => {
  const navigate = useNavigate();
	const userData = useAuthUser()();
  const isAuthed = useIsAuthenticated()();
  const dispatch = useReduxDispatch();
  const { SiteMapModalVisibility } = useReduxSelector((state) => state.modal);
  const hover_style: string =
    "hover:border-l-2 hover:border-[#46A258] hover:text-[#46A258] hover:pl-2 ";

  return (
    <Modal
      onCancel={() => dispatch(setSiteModalVisibility())}
      open={SiteMapModalVisibility}
      title="SiteMap "
      footer={false}
    >
      <div className="flex gap-3 flex-col">
        <h3
          className={`font-bold hover:text-[#46A258]cursor-pointer transition-colors ${hover_style}`}
        >
          Yoriqnoma
        </h3>
        <h3
          className={`font-bold  cursor-pointer transition-colors ${hover_style}`}
        >
          Ozbekcha
        </h3>
        <div className="flex justify-center items-center gap-2">
        <button
						onClick={() => {
							!isAuthed && dispatch(setauthModal());
							navigate("/account");
						}}
						className="bg-[#46A357]  text-white w-[96px] h-[36px] rounded-md flex justify-center items-center gap-2"
					>
						{userData ? (
							userData?.name ?? "Profile"
						) : (
							<>
								<LoginOutlined className="text-[23px]" />
								Kirish
							</>
						)}
					</button>
        </div>
      </div>
    </Modal>
  );
};

export default SiteMap;
