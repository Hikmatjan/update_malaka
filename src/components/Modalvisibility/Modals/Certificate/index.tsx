import { Modal } from "antd";
import type { FC } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useredux";
import { setcertificatemodal } from "../../../../redux/ModalSlice";

const Certication: FC = () => {
  const { certificatemodal } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();
  return (
    <Modal
      onCancel={() => dispatch(setcertificatemodal())}
      open={certificatemodal}
      footer={true}
    >
      <div>
        <div className="text-lg flex justify-center mb-6  font-bold cursor-pointer hover:text-[#46A358]">
          Siz kursni muvaffaqiyatli tugatdingiz
        </div>
        <div className="flex justify-center items-center ">
          <button className=" text-center mt-4 bg-[#1677FF] text-white text-sm w-[90px] h-[36px] rounded-md flex justify-center items-center gap-2">
            {" "}
            Yuklab oling
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Certication;
