import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
	name: "ModalSlice",
	initialState: {
		SiteMapModalVisibility: false,
		authModal: false,
		startmodal: false,
		messagemodal: false,
		certificatemodal: false,
		confirmModal: false,
	},
	reducers: {
		setSiteModalVisibility(state) {
			state.SiteMapModalVisibility = !state.SiteMapModalVisibility;
		},
		setauthModal(state) {
			state.authModal = !state.authModal;
		},
		setstartmodal(state) {
			state.startmodal = !state.startmodal;
		},
		setmessagemodal(state) {
			state.messagemodal = !state.messagemodal;
		},
		setcertificatemodal(state) {
			state.certificatemodal = !state.certificatemodal;
		},
		setConfirmModal(state) {
			state.confirmModal = !state.confirmModal;
		},
	},
});
export default ModalSlice.reducer;
export const {
	setSiteModalVisibility,
	setauthModal,
	setstartmodal,
	setmessagemodal,
	setConfirmModal,
	setcertificatemodal,
} = ModalSlice.actions;
