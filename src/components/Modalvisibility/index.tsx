import type { FC } from "react";
import Modals from "./Modals";
import Startmodal from "./Modals/Startcourse";
// import Success from "./Modals/Message";
import Certication from "./Modals/Certificate";
import Confrim from "./Modals/Confirm";

const Modalvisibility: FC = () => {
	return (
		<div>
			<Modals />
			<Startmodal />
			<Certication />
			<Confrim />
		</div>
	);
};

export default Modalvisibility;
