import type { FC } from "react";
import {ProfileOutlined,DesktopOutlined,LogoutOutlined,ExperimentOutlined,ProjectOutlined} from "@ant-design/icons"
import LogoutButton from "../Modalvisibility/Modals/LogOut";

const Profile: FC = () => {
  return <div className=" mt-5 m-auto w-[80%]">
    <div className="  gap-3 flex flex-1 flex-col mt-5 min-w-[310px] bg-[#46A3581A] p-4 m-4 h-fit ">
      <div  className="flex gap-2">
      <ProfileOutlined className="text-clip"/>
      <p className="hover:text-[#0c0e0c] font-serif cursor-pointer "> Ma'lumotlarim</p>
      </div>
      <div className="flex gap-3">
        <ExperimentOutlined className="text-clip"  />
        <p className="hover:text-[#0c0e0c]  font-serif   cursor-pointer  "> Tajribalarim</p>
      </div>
      <div className="flex gap-3">
        <ProjectOutlined className="text-clip"  />
        <p className="hover:text-[#0c0e0c] font-serif   cursor-pointer  "> Sertifikatlarim</p>
      </div>
      <div className="flex gap-3">
      <DesktopOutlined className="text-clip" />
        <p className="hover:text-[#0c0e0c] font-serif  cursor-pointer  "> Qurilmalarim</p>
      </div>
      <div className="flex gap-3">
      <LogoutOutlined className="text-clip" />
        <button className="hover:text-[#0c0e0c] font-serif  cursor-pointer ">
        <LogoutButton/>
        </button>
      </div>

    </div>
  </div>;
};

export default Profile;
